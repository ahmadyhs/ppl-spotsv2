"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MapVisualization({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  const position = { lat, lng };

  return (
    <div className="h-full w-full rounded-xl bg-gray-100 p-4">
      <p className="mb-4 text-xl font-semibold">Peta Lokasi</p>

      <div className="h-[70vh]">
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <Map center={position} zoom={12}>
            <Marker position={position} />
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}
