import { useState, useEffect } from 'react';
import { useMsal } from "@azure/msal-react";
import { getGraphClient } from '@/lib/graph-client';
import { Site } from '@microsoft/microsoft-graph-types';

export default function SharePointSites() {
  const { instance } = useMsal();
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    async function fetchSites() {
      const graphClient = getGraphClient(instance);
      const response = await graphClient.api('/sites?search=*').get();
      setSites(response.value);
    }

    fetchSites();
  }, [instance]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SharePoint Sites</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Web URL</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site) => (
              <tr key={site.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{site.displayName}</td>
                <td className="py-2 px-4 border-b">{site.webUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
