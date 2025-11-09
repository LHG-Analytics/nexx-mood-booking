import { useState } from "react";
import { Button } from "./ui/button";
import { removeBackground, loadImage } from "@/utils/removeBackground";
import logoDark from "@/assets/logo-dark.webp";
import logoLight from "@/assets/logo-light.webp";
import { Loader2, Download } from "lucide-react";
import { toast } from "sonner";

const LogoBackgroundRemover = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedLogoDark, setProcessedLogoDark] = useState<string | null>(null);
  const [processedLogoLight, setProcessedLogoLight] = useState<string | null>(null);

  const processLogo = async (logoSrc: string, isDark: boolean) => {
    try {
      setIsProcessing(true);
      toast.info(`Processando logo ${isDark ? 'escura' : 'clara'}...`);

      // Load the logo image
      const response = await fetch(logoSrc);
      const blob = await response.blob();
      const img = await loadImage(blob);

      // Remove background
      const resultBlob = await removeBackground(img);
      const resultUrl = URL.createObjectURL(resultBlob);

      if (isDark) {
        setProcessedLogoDark(resultUrl);
      } else {
        setProcessedLogoLight(resultUrl);
      }

      toast.success(`Logo ${isDark ? 'escura' : 'clara'} processada com sucesso!`);
    } catch (error) {
      console.error('Error processing logo:', error);
      toast.error(`Erro ao processar logo ${isDark ? 'escura' : 'clara'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed top-20 left-6 z-50 bg-card rounded-2xl shadow-2xl p-6 border border-border max-w-md">
      <h3 className="text-lg font-bold mb-4 text-foreground">Remover Fundo das Logos</h3>
      
      <div className="space-y-6">
        {/* Logo Dark */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Logo Escura</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <img src={logoDark} alt="Logo Dark Original" className="w-full" />
              <p className="text-xs text-center mt-2 text-muted-foreground">Original</p>
            </div>
            {processedLogoDark && (
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-lg">
                <img src={processedLogoDark} alt="Logo Dark Processada" className="w-full" />
                <p className="text-xs text-center mt-2 text-white">Processada</p>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => processLogo(logoDark, true)}
              disabled={isProcessing}
              size="sm"
              className="flex-1"
            >
              {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Processar"}
            </Button>
            {processedLogoDark && (
              <Button
                onClick={() => downloadImage(processedLogoDark, 'logo-dark-no-bg.png')}
                size="sm"
                variant="outline"
              >
                <Download className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Logo Light */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Logo Clara</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg">
              <img src={logoLight} alt="Logo Light Original" className="w-full" />
              <p className="text-xs text-center mt-2 text-white">Original</p>
            </div>
            {processedLogoLight && (
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-lg">
                <img src={processedLogoLight} alt="Logo Light Processada" className="w-full" />
                <p className="text-xs text-center mt-2 text-white">Processada</p>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => processLogo(logoLight, false)}
              disabled={isProcessing}
              size="sm"
              className="flex-1"
            >
              {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Processar"}
            </Button>
            {processedLogoLight && (
              <Button
                onClick={() => downloadImage(processedLogoLight, 'logo-light-no-bg.png')}
                size="sm"
                variant="outline"
              >
                <Download className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        As logos processadas estarão em formato PNG com fundo transparente. Clique em Download para salvar.
      </p>
    </div>
  );
};

export default LogoBackgroundRemover;
