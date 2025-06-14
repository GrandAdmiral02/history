"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { HistoricalSite } from "./map";

interface GoogleMapProps {
  sites: HistoricalSite[];
  center?: [number, number];
  zoom?: number;
  height?: string;
}

export default function GoogleMap({
  sites = [],
  center = [18.6717, 105.6891715], // Tọa độ Thành cổ Vinh
  zoom = 14, // Zoom gần hơn để tập trung vào Thành cổ Vinh
  height = "500px",
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey || apiKey === "demo-api-key") {
      setError("Google Maps API key chưa được cấu hình");
      setIsLoading(false);
      return;
    }

    const loader = new Loader({
      apiKey,
      version: "weekly",
      libraries: ["places"],
    });

    loader
      .load()
      .then((google) => {
        if (!mapRef.current) return;

        const map = new google.maps.Map(mapRef.current, {
          center: { lat: center[0], lng: center[1] },
          zoom,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        });

        // Fallback: Nếu sites rỗng, thêm marker cho Thành cổ Vinh
        const defaultSites: HistoricalSite[] = sites.length
          ? sites
          : [
              {
                id: "1",
                name: "Thành cổ Vinh",
                description: "Di tích lịch sử nổi tiếng của Nghệ An, xây dựng từ thời Nguyễn.",
                position: [18.6717, 105.6891715],
                slug: "/store/product/2", // Giả định liên kết đến sản phẩm "Mô hình Thành cổ Vinh"
              },
            ];

        // Thêm markers cho các địa điểm
        defaultSites.forEach((site) => {
          const marker = new google.maps.Marker({
            position: { lat: site.position[0], lng: site.position[1] },
            map,
            title: site.name,
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div class="p-3 bg-white rounded-md shadow-md">
                <h3 class="font-semibold text-lg text-teal-900 bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">${site.name}</h3>
                <p class="text-sm text-gray-600 mb-2">${site.description}</p>
                ${
                  site.slug !== "#"
                    ? `<a href="${site.slug}" class="text-teal-600 hover:text-amber-500 font-medium">Xem chi tiết →</a>`
                    : ""
                }
              </div>
            `,
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        });

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi tải Google Maps:", error);
        setError("Không thể tải bản đồ, vui lòng thử lại sau");
        setIsLoading(false);
      });
  }, [center, zoom, sites]);

  if (error) {
    return (
      <div
        className="w-full flex flex-col items-center justify-center bg-slate-100 rounded-md border-2 border-dashed border-teal-300"
        style={{ height }}
      >
        <p className="text-teal-600 font-semibold mb-2">⚠️ {error}</p>
        <p className="text-sm text-slate-500">
          Vui lòng kiểm tra API key trong file .env hoặc liên hệ quản trị viên
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 rounded-md z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-2"></div>
            <p className="text-teal-600 font-medium">Đang tải bản đồ...</p>
          </div>
        </div>
      )}
      <div ref={mapRef} className="w-full h-full rounded-md border border-teal-200/50" />
    </div>
  );
}