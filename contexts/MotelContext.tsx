"use client";

import { createContext, useContext, ReactNode, useMemo } from 'react';
import { MotelConfig } from '@/types/motel';
import { getMotelConfigFromHostname } from '@/lib/getMotelConfig';

interface MotelContextType {
  config: MotelConfig;
}

const MotelContext = createContext<MotelContextType | undefined>(undefined);

interface MotelProviderProps {
  children: ReactNode;
  initialConfig?: MotelConfig;
}

/**
 * Provider component that makes motel configuration available throughout the app
 * Detects the motel based on hostname and provides the appropriate configuration
 */
export function MotelProvider({ children, initialConfig }: MotelProviderProps) {
  const config = useMemo(() => {
    // If initial config is provided (SSR), use it
    if (initialConfig) {
      return initialConfig;
    }

    // Otherwise detect from window.location (client-side only)
    if (typeof window !== 'undefined') {
      return getMotelConfigFromHostname(window.location.hostname);
    }

    // Fallback to mood for SSR without initial config
    return getMotelConfigFromHostname('localhost');
  }, [initialConfig]);

  return (
    <MotelContext.Provider value={{ config }}>
      {children}
    </MotelContext.Provider>
  );
}

/**
 * Hook to access motel configuration
 * @returns The current motel configuration
 * @throws Error if used outside of MotelProvider
 */
export function useMotel(): MotelConfig {
  const context = useContext(MotelContext);

  if (context === undefined) {
    throw new Error('useMotel must be used within a MotelProvider');
  }

  return context.config;
}
