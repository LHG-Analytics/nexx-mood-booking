import sharp from 'sharp';
import { readdir, stat, mkdir, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '..', 'public', 'assets');

// Configuration
const CONFIG = {
  // Logo settings - smaller, high quality WebP
  logo: {
    maxWidth: 400,
    maxHeight: 300,
    quality: 90,
    format: 'webp'
  },
  // Hero/room images - optimized JPG or WebP
  room: {
    maxWidth: 1200,
    maxHeight: 1200,
    quality: 80,
    format: 'webp'
  },
  // Favicon - keep as PNG but optimize
  favicon: {
    maxWidth: 64,
    maxHeight: 64,
    quality: 90,
    format: 'png'
  }
};

// Track stats
let stats = {
  processed: 0,
  skipped: 0,
  totalSavedBytes: 0,
  errors: []
};

async function getFileType(filePath) {
  const name = basename(filePath).toLowerCase();
  const dir = dirname(filePath).toLowerCase();

  if (name.includes('logo')) return 'logo';
  if (name.includes('favicon') || dir.includes('favicon')) return 'favicon';
  return 'room';
}

async function optimizeImage(inputPath) {
  const ext = extname(inputPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return null;
  }

  const fileType = await getFileType(inputPath);
  const config = CONFIG[fileType];

  try {
    const originalStats = await stat(inputPath);
    const originalSize = originalStats.size;

    // Skip if already small enough (less than 100KB for logos, 500KB for rooms)
    const threshold = fileType === 'logo' ? 50 * 1024 : 300 * 1024;
    if (originalSize < threshold) {
      console.log(`  [SKIP] ${inputPath} - already optimized (${formatBytes(originalSize)})`);
      stats.skipped++;
      return null;
    }

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Determine output path
    let outputPath = inputPath;
    if (config.format === 'webp' && ext !== '.webp') {
      outputPath = inputPath.replace(ext, '.webp');
    }

    // Process image
    let pipeline = image;

    // Resize if needed
    if (metadata.width > config.maxWidth || metadata.height > config.maxHeight) {
      pipeline = pipeline.resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Convert to appropriate format
    if (config.format === 'webp') {
      pipeline = pipeline.webp({ quality: config.quality });
    } else if (config.format === 'png') {
      pipeline = pipeline.png({ quality: config.quality, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: config.quality, mozjpeg: true });
    }

    // Save optimized image
    await pipeline.toFile(outputPath + '.tmp');

    // Get new size
    const newStats = await stat(outputPath + '.tmp');
    const newSize = newStats.size;
    const savedBytes = originalSize - newSize;

    // Only replace if we saved space
    if (savedBytes > 0) {
      // Remove old file if format changed
      if (outputPath !== inputPath) {
        await unlink(inputPath);
      }
      // Rename temp to final
      const { rename } = await import('fs/promises');
      await rename(outputPath + '.tmp', outputPath);

      console.log(`  [OK] ${basename(inputPath)} -> ${basename(outputPath)}`);
      console.log(`       ${formatBytes(originalSize)} -> ${formatBytes(newSize)} (saved ${formatBytes(savedBytes)})`);

      stats.processed++;
      stats.totalSavedBytes += savedBytes;

      return { inputPath, outputPath, savedBytes };
    } else {
      // Delete temp file, keep original
      await unlink(outputPath + '.tmp');
      console.log(`  [SKIP] ${inputPath} - optimization would increase size`);
      stats.skipped++;
      return null;
    }

  } catch (error) {
    console.error(`  [ERROR] ${inputPath}: ${error.message}`);
    stats.errors.push({ path: inputPath, error: error.message });
    return null;
  }
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await optimizeImage(fullPath);
    }
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function main() {
  console.log('='.repeat(60));
  console.log('Image Optimization Script');
  console.log('='.repeat(60));
  console.log(`Processing: ${ASSETS_DIR}\n`);

  await processDirectory(ASSETS_DIR);

  console.log('\n' + '='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));
  console.log(`Processed: ${stats.processed} images`);
  console.log(`Skipped: ${stats.skipped} images`);
  console.log(`Total saved: ${formatBytes(stats.totalSavedBytes)}`);

  if (stats.errors.length > 0) {
    console.log(`\nErrors: ${stats.errors.length}`);
    stats.errors.forEach(e => console.log(`  - ${e.path}: ${e.error}`));
  }
}

main().catch(console.error);
