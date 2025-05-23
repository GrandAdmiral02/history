"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dữ liệu mẫu cho các di tích lịch sử
const historicalSites = [
  {
    id: "kim-lien",
    title: "Khu di tích Kim Liên",
    category: "Di tích lưu niệm danh nhân",
    description: "Quê hương của Chủ tịch Hồ Chí Minh",
    url: "/historical-sites/kim-lien",
    image: "https://ext.same-assets.com/4052699563/777305328.jpeg"
  },
  {
    id: "den-cuong",
    title: "Đền Cuông",
    category: "Di tích lịch sử văn hóa",
    description: "Di tích lịch sử văn hóa cấp quốc gia, thờ An Dương Vương",
    url: "/historical-sites/den-cuong",
    image: "https://ext.same-assets.com/3334769225/3110326546.jpeg"
  },
  {
    id: "truong-bon",
    title: "Truông Bồn",
    category: "Di tích cách mạng",
    description: "Nơi tưởng nhớ sự hy sinh anh dũng của các chiến sĩ thanh niên xung phong",
    url: "/historical-sites/truong-bon",
    image: "https://ext.same-assets.com/3334769225/3220782747.jpeg"
  },
  {
    id: "den-qua-son",
    title: "Đền Quả Sơn",
    category: "Di tích lịch sử văn hóa",
    description: "Di tích lịch sử văn hóa cấp quốc gia tại huyện Đô Lương",
    url: "/historical-sites/den-qua-son",
    image: "https://ext.same-assets.com/3334769225/3151232487.jpeg"
  },
  {
    id: "thanh-co-vinh",
    title: "Thành cổ Vinh",
    category: "Di tích lịch sử văn hóa",
    description: "Chứng tích lịch sử và nơi ghi lại dấu ấn nhiều biến động của xứ Nghệ",
    url: "/historical-sites/thanh-co-vinh",
    image: "https://ext.same-assets.com/3334769225/3264552788.jpeg"
  },
  {
    id: "mo-ba-hoang-thi-loan",
    title: "Mộ bà Hoàng Thị Loan",
    category: "Di tích lưu niệm danh nhân",
    description: "Nơi an nghỉ của thân mẫu Chủ tịch Hồ Chí Minh",
    url: "/historical-sites/mo-ba-hoang-thi-loan",
    image: "https://ext.same-assets.com/3334769225/3377099892.jpeg"
  },
]

// Dữ liệu mẫu cho các hành trình du lịch
const journeys = [
  {
    id: "ve-nguon",
    title: "Hành trình về nguồn",
    category: "Hành trình du lịch",
    description: "Khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh",
    url: "/destinations/ve-nguon",
    image: "https://ext.same-assets.com/4052699563/777305328.jpeg"
  },
  {
    id: "con-duong-huyen-thoai",
    title: "Con đường huyền thoại",
    category: "Hành trình du lịch",
    description: "Hành trình theo dấu chân những người anh hùng",
    url: "/destinations/con-duong-huyen-thoai",
    image: "https://ext.same-assets.com/3334769225/3220782747.jpeg"
  },
  {
    id: "di-san-tam-linh",
    title: "Di sản văn hóa tâm linh",
    category: "Hành trình du lịch",
    description: "Hành trình khám phá các đền, chùa nổi tiếng xứ Nghệ",
    url: "/destinations/di-san-tam-linh",
    image: "https://ext.same-assets.com/3334769225/3110326546.jpeg"
  },
  {
    id: "dau-an-danh-nhan",
    title: "Dấu ấn danh nhân",
    category: "Hành trình du lịch",
    description: "Hành trình theo chân những danh nhân lịch sử xứ Nghệ",
    url: "/destinations/dau-an-danh-nhan",
    image: "https://ext.same-assets.com/3334769225/3359488301.jpeg"
  },
]

// Kết hợp tất cả dữ liệu tìm kiếm
const searchItems = [...historicalSites, ...journeys]

// Lọc các mục theo danh mục
const culturalSites = historicalSites.filter(site => site.category === "Di tích lịch sử văn hóa")
const revolutionarySites = historicalSites.filter(site => site.category === "Di tích cách mạng")
const memorialSites = historicalSites.filter(site => site.category === "Di tích lưu niệm danh nhân")

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [searchResults, setSearchResults] = useState<typeof searchItems>([])
  const [searchQuery, setSearchQuery] = useState(query || "")

  useEffect(() => {
    setSearchQuery(query || "")

    if (!query) {
      setSearchResults(searchItems)
      return
    }

    const lowerCaseQuery = query.toLowerCase()
    const filtered = searchItems.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery) ||
      item.category.toLowerCase().includes(lowerCaseQuery)
    )

    setSearchResults(filtered)
  }, [query])

  return (
    <div className="container py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Kết quả tìm kiếm</h1>
        {query ? (
          <p className="text-muted-foreground">
            Có {searchResults.length} kết quả cho "{query}"
          </p>
        ) : (
          <p className="text-muted-foreground">
            Khám phá các điểm đến và hành trình du lịch tại Nghệ An
          </p>
        )}
      </div>

      <div className="mt-8">
        <form className="flex gap-2">
          <input
            type="text"
            name="q"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Nhập từ khóa tìm kiếm..."
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
          />
          <Button type="submit" className="bg-green-700 hover:bg-green-800">
            Tìm kiếm
          </Button>
        </form>
      </div>

      {query ? (
        // Hiển thị kết quả tìm kiếm
        <div className="mt-8">
          {searchResults.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">Không tìm thấy kết quả nào</h2>
              <p className="text-muted-foreground">
                Vui lòng thử lại với từ khóa khác hoặc xem các đề xuất bên dưới
              </p>
              <div className="mt-6">
                <Link href="/historical-sites">
                  <Button className="bg-green-700 hover:bg-green-800">
                    Xem tất cả điểm đến
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {searchResults.map((item) => (
                <SearchResultCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      ) : (
        // Hiển thị các danh mục khi không có truy vấn
        <div className="mt-8">
          <Tabs defaultValue="popular" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="popular">Phổ biến</TabsTrigger>
              <TabsTrigger value="cultural">Văn hóa</TabsTrigger>
              <TabsTrigger value="revolutionary">Cách mạng</TabsTrigger>
              <TabsTrigger value="memorial">Danh nhân</TabsTrigger>
            </TabsList>
            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchItems.slice(0, 6).map((item) => (
                  <SearchResultCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cultural" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {culturalSites.map((item) => (
                  <SearchResultCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="revolutionary" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {revolutionarySites.map((item) => (
                  <SearchResultCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="memorial" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {memorialSites.map((item) => (
                  <SearchResultCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

function SearchResultCard({ item }: { item: typeof searchItems[0] }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{item.title}</CardTitle>
        <CardDescription>{item.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-green-700 hover:bg-green-800">
          <Link href={item.url}>Xem chi tiết</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
