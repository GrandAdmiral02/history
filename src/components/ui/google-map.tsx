'use client';

import React from 'react';
import { GoogleMap as GoogleMapComponent, LoadScript, Marker } from '@react-google-maps/api';

interface GoogleMapProps {
  height?: string;
  zoom?: number;
  categoryFilter?: string;
}

const HISTORICAL_SITES = [
  {
    id: 'kim-lien',
    name: 'Khu di tích Kim Liên',
    description: 'Quê hương của Chủ tịch Hồ Chí Minh',
    category: 've-nguon',
    position: [19.127, 105.327],
    slug: '/historical-sites/kim-lien'
  },
  {
    id: 'den-cuong',
    name: 'Đền Cuông',
    description: 'Di tích lịch sử văn hóa cấp quốc gia',
    category: 'di-san-tam-linh',
    position: [18.905, 105.232],
    slug: '/historical-sites/den-cuong'
  },
  {
    id: 'truong-bon',
    name: 'Truông Bồn',
    description: 'Di tích lịch sử cách mạng',
    category: 'con-duong-huyen-thoai',
    position: [18.845, 105.123],
    slug: '/historical-sites/truong-bon'
  },
  {
    id: 'den-qua-son',
    name: 'Đền Quả Sơn',
    description: 'Di tích tâm linh nổi tiếng',
    category: 'di-san-tam-linh',
    position: [19.256, 105.421],
    slug: '/historical-sites/den-qua-son'
  },
  {
    id: 'mo-ba-hoang-thi-loan',
    name: 'Mộ bà Hoàng Thị Loan',
    description: 'Mộ mẹ của Chủ tịch Hồ Chí Minh',
    category: 've-nguon',
    position: [19.125, 105.325],
    slug: '/historical-sites/mo-ba-hoang-thi-loan'
  },
  {
    id: 'thanh-co-vinh',
    name: 'Thành cổ Vinh',
    description: 'Di tích kiến trúc cổ',
    category: 'dau-an-danh-nhan',
    position: [18.673, 105.693],
    slug: '/historical-sites/thanh-co-vinh'
  }
];

export default function GoogleMap({ height = "450px", zoom = 9, categoryFilter }: GoogleMapProps) {
  const filteredSites = categoryFilter
    ? HISTORICAL_SITES.filter(site => site.category === categoryFilter)
    : HISTORICAL_SITES;

  const mapContainerStyle = {
    width: '100%',
    height: height,
  };

  const center = {
    lat: 18.8,
    lng: 105.4,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBpCYwmOOsZMqtb9lZ5vQhbQdKKNKpxe-Y'}>
      <GoogleMapComponent
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
      >
        {filteredSites.map(site => (
          <Marker
            key={site.id}
            position={{ lat: site.position[0], lng: site.position[1] }}
            label={site.name.charAt(0)}
          />
        ))}
      </GoogleMapComponent>
    </LoadScript>
  );
}

export { HISTORICAL_SITES };