// src/components/ui/map.tsx
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Các dữ liệu địa điểm di tích lịch sử Nghệ An
export interface HistoricalSite {
  id: string;
  name: string;
  description: string;
  position: [number, number]; // [latitude, longitude]
  slug: string;
  category: string;
}

// Dữ liệu các điểm di tích lịch sử, bổ sung Hoàng Sa và Trường Sa
export const HISTORICAL_SITES: HistoricalSite[] = [
  {
    id: "1",
    name: "Khu di tích Kim Liên",
    description: "Nơi sinh của Chủ tịch Hồ Chí Minh",
    position: [18.686, 105.607],
    slug: "/historical-sites/kim-lien",
    category: "ve-nguon",
  },
  {
    id: "2",
    name: "Đền Cuông",
    description: "Di tích lịch sử văn hóa quốc gia",
    position: [18.779, 105.555],
    slug: "/historical-sites/den-cuong",
    category: "di-san-tam-linh",
  },
  {
    id: "3",
    name: "Truông Bồn",
    description: "Di tích lịch sử cách mạng",
    position: [19.037, 105.562],
    slug: "/historical-sites/truong-bon",
    category: "con-duong-huyen-thoai",
  },
  {
    id: "4",
    name: "Đền Quả Sơn",
    description: "Di tích lịch sử văn hóa",
    position: [18.791, 105.668],
    slug: "/historical-sites/den-qua-son",
    category: "di-san-tam-linh",
  },
  {
    id: "5",
    name: "Thành cổ Vinh",
    description: "Di tích lịch sử kiến trúc quốc gia",
    position: [18.679, 105.685],
    slug: "/historical-sites/thanh-co-vinh",
    category: "dau-an-danh-nhan",
  },
  {
    id: "6",
    name: "Mộ bà Hoàng Thị Loan",
    description: "Mẹ của Chủ tịch Hồ Chí Minh",
    position: [18.682, 105.615],
    slug: "/historical-sites/mo-ba-hoang-thi-loan",
    category: "ve-nguon",
  },
  {
    id: "7",
    name: "Quần đảo Hoàng Sa",
    description: "Thuộc chủ quyền Việt Nam",
    position: [16.5, 112.0],
    slug: "#",
    category: "chu-quyen",
  },
  {
    id: "8",
    name: "Quần đảo Trường Sa",
    description: "Thuộc chủ quyền Việt Nam",
    position: [8.9, 114.3],
    slug: "#",
    category: "chu-quyen",
  },
];

interface MapComponentProps {
  sites?: HistoricalSite[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  showAllSites?: boolean;
  categoryFilter?: string;
  mapProvider?: string;
  mapStyle?: string;
}

const MapComponent = ({
  sites = HISTORICAL_SITES,
  center = [18.679, 105.685], // Trung tâm Nghệ An thay vì toàn Việt Nam
  zoom = 9,
  height = "500px",
  showAllSites = true,
  categoryFilter,
  mapProvider = "OSM",
  mapStyle = "streets-v12",
}: MapComponentProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lọc các địa điểm theo danh mục nếu có
  const filteredSites = categoryFilter
    ? sites.filter((site) => site.category === categoryFilter)
    : sites;

  // Chỉ render MapWithNoSSR khi đã mounted
  if (!mounted) {
    return (
      <div className="w-full flex items-center justify-center bg-slate-100 rounded-md" style={{ height }}>
        Đang tải bản đồ...
      </div>
    );
  }

  const GoogleMapWithNoSSR = dynamic(() => import("./google-map"), {
    ssr: false,
    loading: () => (
      <div className="w-full flex items-center justify-center bg-slate-100 rounded-md" style={{ height }}>
        Đang tải Google Maps...
      </div>
    ),
  });

  return (
    <div className="w-full" style={{ height }}>
      <GoogleMapWithNoSSR
        center={center}
        zoom={zoom}
        sites={filteredSites}
        height={height}
      />
    </div>
  );
};

export default MapComponent;
