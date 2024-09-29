"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
import { PrimeReactProvider } from "primereact/api";
import * as React from "react";
import { TailwindComponents } from "./tailwind.components";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <PrimeReactProvider
        value={{
          unstyled: false,
          pt: TailwindComponents,
        }}
      >
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </PrimeReactProvider>
    </NextUIProvider>
  );
}
