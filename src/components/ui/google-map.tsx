'use client';

import React from 'react';

interface GoogleMapProps {
  height?: string;
  zoom?: number;
  categoryFilter?: string;
}

// Data về các di tích lịch sử
const HISTORICAL_SITES = [
  {
    id: 'kim-lien',
    name: 'Khu di tích Kim Liên',
    description: 'Quê hương của Chủ tịch Hồ Chí Minh',
    category: 've-nguon',
    lat: 19.127,
    lng: 105.327,
    slug: '/historical-sites/kim-lien'
  },
  {
    id: 'den-cuong',
    name: 'Đền Cuông',
    description: 'Di tích lịch sử văn hóa cấp quốc gia',
    category: 'di-san-tam-linh',
    lat: 18.905,
    lng: 105.232,
    slug: '/historical-sites/den-cuong'
  },
  {
    id: 'truong-bon',
    name: 'Truông Bồn',
    description: 'Di tích lịch sử cách mạng',
    category: 'con-duong-huyen-thoai',
    lat: 18.845,
    lng: 105.123,
    slug: '/historical-sites/truong-bon'
  },
  {
    id: 'den-qua-son',
    name: 'Đền Quả Sơn',
    description: 'Di tích tâm linh nổi tiếng',
    category: 'di-san-tam-linh',
    lat: 19.256,
    lng: 105.421,
    slug: '/historical-sites/den-qua-son'
  },
  {
    id: 'mo-ba-hoang-thi-loan',
    name: 'Mộ bà Hoàng Thị Loan',
    description: 'Mộ mẹ của Chủ tịch Hồ Chí Minh',
    category: 've-nguon',
    lat: 19.125,
    lng: 105.325,
    slug: '/historical-sites/mo-ba-hoang-thi-loan'
  },
  {
    id: 'thanh-co-vinh',
    name: 'Thành cổ Vinh',
    description: 'Di tích kiến trúc cổ',
    category: 'dau-an-danh-nhan',
    lat: 18.673,
    lng: 105.693,
    slug: '/historical-sites/thanh-co-vinh'
  }
];

export default function GoogleMap({ height = "450px", zoom = 9, categoryFilter }: GoogleMapProps) {
  // Filter sites based on category
  const filteredSites = categoryFilter
    ? HISTORICAL_SITES.filter(site => site.category === categoryFilter)
    : HISTORICAL_SITES;

  // Create markers parameter for Google Maps embed
  const markers = filteredSites.map(site =>
    `&markers=color:red%7Clabel:${site.name.charAt(0)}%7C${site.lat},${site.lng}`
  ).join('');

  // Center of Nghệ An province
  const center = "18.8,105.4";

  const embedUrl = `https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBpCYwmOOsZMqtb9lZ5vQhbQdKKNKpxe-Y'}&center=${center}&zoom=${zoom}${markers}`;

  return (
    <div className="w-full" style={{ height }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  );
}

export { HISTORICAL_SITES };
