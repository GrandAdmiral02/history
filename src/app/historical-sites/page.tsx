import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HistoricalSitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="https://thoitiethomnay.vn/images/di-tich-lich-su-o-nghe-an-1.jpg"
          alt="Di tích lịch sử Nghệ An"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Di Tích Lịch Sử Nghệ An
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Khám phá những di sản văn hóa, lịch sử và cách mạng nổi bật của vùng
            đất xứ Nghệ
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-foreground">Điểm đến</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Khám Phá Di Sản Lịch Sử Nghệ An
          </h2>
          <p className="text-muted-foreground">
            Nghệ An - vùng đất "địa linh nhân kiệt" sở hữu gần 1.400 di tích
            lịch sử văn hóa, trong đó có 375 di tích đã được xếp hạng theo các
            cấp độ khác nhau. Dưới đây là những di tích tiêu biểu nhất mà bạn
            không nên bỏ lỡ khi đến với mảnh đất này.
          </p>
        </div>

        <Tabs defaultValue="cultural" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cultural">Di tích lịch sử văn hóa</TabsTrigger>
            <TabsTrigger value="revolutionary">Di tích cách mạng</TabsTrigger>
            <TabsTrigger value="memorial">
              Di tích lưu niệm danh nhân
            </TabsTrigger>
          </TabsList>

          {/* Di tích lịch sử văn hóa */}
          <TabsContent value="cultural" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/dataimages/202008/original/images2310505_mgi_104406.jpg"
                    alt="Đền Cuông"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Đền Cuông</CardTitle>
                  <CardDescription>
                    Di tích lịch sử văn hóa cấp quốc gia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Đền Cuông nằm ở xã Diễn An, huyện Diễn Châu, là một di tích
                    lịch sử văn hóa cấp quốc gia, thờ An Dương Vương và các công
                    thần Cao Sơn, Quý Minh.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/den-cuong">Chi Tiết</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKD2XdE05XKJxspLuFCfA2f17HV4jBVizhA&s"
                    alt="Đền Quả Sơn"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Đền Quả Sơn</CardTitle>
                  <CardDescription>
                    Di tích lịch sử văn hóa cấp quốc gia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Đền Quả Sơn nằm tại huyện Đô Lương, là di tích lịch sử quan
                    trọng thờ Mai Hắc Đế - vị vua nông dân đầu tiên trong lịch
                    sử Việt Nam.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/den-qua-son">Chi Tiết</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://ik.imagekit.io/tvlk/blog/2023/06/thanh-co-vinh-acc-5.png?tr=q-70,c-at_max,w-500,h-300,dpr-2"
                    alt="Thành cổ Vinh"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Thành cổ Vinh</CardTitle>
                  <CardDescription>Di tích lịch sử cấp tỉnh</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Thành cổ Vinh nằm trên địa bàn của ba phường Cửa Nam, Đội
                    Cung, Quang Trung, là chứng tích lịch sử ghi lại dấu ấn
                    nhiều biến động của xứ Nghệ.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/thanh-co-vinh">Chi Tiết</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://cualo.vn/wp-content/uploads/2022/02/vl1.jpg"
                    alt="Đền Vạn Lộc"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Đền Vạn Lộc</CardTitle>
                  <CardDescription>
                    Di tích lịch sử văn hóa cấp quốc gia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Đền Vạn Lộc nằm tại xã Hưng Lộc, thành phố Vinh, là nơi thờ
                    phụng các vị anh hùng dân tộc trong lịch sử đấu tranh chống
                    ngoại xâm.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/den-van-loc">Chi Tiết</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Di tích cách mạng */}
          <TabsContent value="revolutionary" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://dulichthuduc.com.vn/vnt_upload/news/BAC-TRUNG-BO/nghe-an/khu_di_tich_lich_su_truong_bon_nghe_an_thu_duc_travel.jpg"
                    alt="Truông Bồn"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Truông Bồn</CardTitle>
                  <CardDescription>
                    Di tích lịch sử quốc gia đặc biệt
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Truông Bồn là nơi tưởng nhớ sự hy sinh anh dũng của 13 chiến
                    sĩ thanh niên xung phong và 49 cán bộ, chiến sĩ trong chiến
                    tranh chống Mỹ.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/truong-bon">Chi Tiết</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://bna.1cdn.vn/2024/11/08/anh-thanhcuowngf.jpg"
                    alt="Bảo tàng Xô Viết Nghệ Tĩnh"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Bảo tàng Xô Viết Nghệ Tĩnh</CardTitle>
                  <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Bảo tàng Xô Viết Nghệ Tĩnh nằm tại thành phố Vinh, là nơi
                    lưu giữ và trưng bày các hiện vật, tài liệu về phong trào Xô
                    Viết Nghệ Tĩnh 1930-1931.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/bao-tang-xo-viet-nghe-tinh">
                      Chi Tiết
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/4028eaa467f477c80167f48e23810ac6/062022/di-tich-quoc-gia-dac-biet-km-so-0-o-nghe-an-xuong-cap-nghiem-trong_20220630070433.jpg"
                    alt="Cột mốc số 0 - đường Hồ Chí Minh"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Cột mốc số 0 - đường Hồ Chí Minh</CardTitle>
                  <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Cột mốc số 0 nằm tại xã Tân Kỳ đánh dấu điểm khởi đầu của
                    đường mòn Hồ Chí Minh huyền thoại - con đường huyết mạch
                    trong kháng chiến chống Mỹ.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/cot-moc-so-0">Chi Tiết</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Di tích lưu niệm danh nhân */}
          <TabsContent value="memorial" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMrq7BvbI1OG2xMI-qHbSNaCl4kgdPp_eTQ&s"
                    alt="Khu di tích Kim Liên"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Khu di tích Kim Liên</CardTitle>
                  <CardDescription>
                    Di tích lịch sử quốc gia đặc biệt
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Khu di tích Kim Liên là quê hương của Chủ tịch Hồ Chí Minh,
                    nằm tại xã Kim Liên, huyện Nam Đàn, bao gồm làng Sen, làng
                    Hoàng Trù và nhiều công trình khác.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/kim-lien">Chi Tiết</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://lh5.googleusercontent.com/proxy/88va4BBNAZTwr0PwM5A7UXt6Zkv3y22rvI2bMNo4OuSI3MdbzyWFssTPCjkMYJcdhxo3Zp5AzblZLTEipSuyqd5nQR49YaPJx35bEF4a65r-op-Hk4uF-hlJuQUNvi8N0SqWX2UdWdlvQOdXqx7yQRrXyrzXOMWY8yko7N5ehHohh73Z3w-mvbo"
                    alt="Di tích lưu niệm cụ Phan Bội Châu"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Di tích lưu niệm cụ Phan Bội Châu</CardTitle>
                  <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Di tích lưu niệm cụ Phan Bội Châu tại xã Đông Liễu, huyện
                    Nam Đàn, ghi dấu cuộc đời và sự nghiệp của nhà cách mạng
                    tiền bối Phan Bội Châu.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/phan-boi-chau">Chi Tiết</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/image/moloan.jpg"
                    alt="Mộ bà Hoàng Thị Loan"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Mộ bà Hoàng Thị Loan</CardTitle>
                  <CardDescription>Di tích lịch sử quốc gia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Mộ bà Hoàng Thị Loan - thân mẫu Chủ tịch Hồ Chí Minh nằm tại
                    núi Động Tranh, xã Nam Giang, huyện Nam Đàn, được xây dựng
                    trang nghiêm, tôn kính.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href="/historical-sites/mo-ba-hoang-thi-loan">
                      Chi Tiết
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
