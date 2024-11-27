'use client';

import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "@/lib/msal-config";
import SharePointSites from "@/components/SharePointSites";

const msalInstance = new PublicClientApplication(msalConfig);

export default function Home() {
  return (
    <MsalProvider instance={msalInstance}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SharePointSites />
      </main>
    </MsalProvider>
  );
}
