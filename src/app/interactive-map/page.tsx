'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import GoogleMap, { HISTORICAL_SITES } from '@/components/ui/google-map';

const categories = [
  { id: 'all', name: 'Tất cả' },
  { id: 've-nguon', name: 'Về nguồn' },
  { id: 'con-duong-huyen-thoai', name: 'Con đường huyền thoại' },
  { id: 'di-san-tam-linh', name: 'Di sản tâm linh' },
  { id: 'dau-an-danh-nhan', name: 'Dấu ấn danh nhân' },
];

export default function InteractiveMapPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Bản đồ di tích lịch sử Nghệ An</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Khám phá di tích theo bản đồ</CardTitle>
          <CardDescription>
            Khám phá vị trí địa lý của các di tích lịch sử quan trọng tại Nghệ An
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-5 gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <GoogleMap
                  height="600px"
                  zoom={9}
                  categoryFilter={category.id === 'all' ? undefined : category.id}
                />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {HISTORICAL_SITES.filter(site =>
          activeCategory === 'all' || site.category === activeCategory
        ).map((site) => (
          <Card key={site.id}>
            <CardHeader>
              <CardTitle>{site.name}</CardTitle>
              <CardDescription>{site.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Vị trí: {site.position[0].toFixed(3)}, {site.position[1].toFixed(3)}</p>
              <a
                href={site.slug}
                className="text-blue-600 hover:underline inline-block"
              >
                Xem chi tiết →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
