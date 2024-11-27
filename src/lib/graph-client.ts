import { Client } from "@microsoft/microsoft-graph-client";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { InteractionType } from "@azure/msal-browser";

export function getGraphClient(msalInstance: any) {
  const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(msalInstance, {
    account: msalInstance.getActiveAccount()!,
    interactionType: InteractionType.Popup,
    scopes: ["User.Read", "Sites.Read.All"],
  });

  return Client.initWithMiddleware({ authProvider });
}
