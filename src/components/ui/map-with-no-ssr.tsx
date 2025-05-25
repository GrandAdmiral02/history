// src/components/ui/map-with-no-ssr.tsx
"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { HistoricalSite } from "./map";
import L from "leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css"; // Thêm CSS của Leaflet
import "@/styles.css";

// Fix Leaflet icon issues
const fixLeafletIcon = () => {
  // biome-ignore lint/suspicious/noExplicitAny: Required for Leaflet icon fix
  (L.Icon.Default.prototype as any)._getIconUrl = undefined;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/marker-icon-2x.png",
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
  });
};

interface MapWithNoSSRProps {
  center: [number, number];
  zoom: number;
  sites: HistoricalSite[];
  showAllSites: boolean;
  height: string;
  mapProvider?: string;
  mapStyle?: string;
}

const MapWithNoSSR = ({ center, zoom, sites, showAllSites, height, mapProvider = "OSM", mapStyle }: MapWithNoSSRProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    fixLeafletIcon();

    if (mapRef.current || !mapContainerRef.current) {
      // Đảm bảo bản đồ chỉ được khởi tạo nếu chưa có
      return;
    }

    const map = L.map(mapContainerRef.current).setView(center, zoom);
    mapRef.current = map;

    const tileLayerProps =
      mapProvider === "MAPBOX"
        ? {
            url: `https://api.mapbox.com/styles/v1/mapbox/${mapStyle || "streets-v12"}/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
            attribution: '© <a href="https://www.mapbox.com/">Mapbox</a> contributors',
          }
        : {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          };

    L.tileLayer(tileLayerProps.url, { attribution: tileLayerProps.attribution }).addTo(map);

    // Cleanup khi component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center, zoom, mapProvider, mapStyle]); // Thêm dependencies để cập nhật bản đồ khi cần

  return (
    <div style={{ height: height, width: "100%" }}>
      <div ref={mapContainerRef} style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }} />
    </div>
  );
};

export default MapWithNoSSR;