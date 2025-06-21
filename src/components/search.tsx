"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Dữ liệu mẫu cho các di tích lịch sử
const historicalSites = [
  {
    id: "kim-lien",
    title: "Khu di tích Kim Liên",
    category: "Di tích lưu niệm danh nhân",
    description: "Quê hương của Chủ tịch Hồ Chí Minh",
    url: "/historical-sites/kim-lien",
  },
  {
    id: "den-cuong",
    title: "Đền Cuông",
    category: "Di tích lịch sử văn hóa",
    description: "Di tích lịch sử văn hóa cấp quốc gia, thờ An Dương Vương",
    url: "/historical-sites/den-cuong",
  },
  {
    id: "truong-bon",
    category: "Di tích cách mạng",
    title: "Truông Bồn",
    description:
      "Nơi tưởng nhớ sự hy sinh anh dũng của các chiến sĩ thanh niên xung phong",
    url: "/historical-sites/truong-bon",
  },
  {
    id: "den-qua-son",
    title: "Đền Quả Sơn",
    category: "Di tích lịch sử văn hóa",
    description: "Di tích lịch sử văn hóa cấp quốc gia tại huyện Đô Lương",
    url: "/historical-sites/den-qua-son",
  },
  {
    id: "thanh-co-vinh",
    title: "Thành cổ Vinh",
    category: "Di tích lịch sử văn hóa",
    description:
      "Chứng tích lịch sử và nơi ghi lại dấu ấn nhiều biến động của xứ Nghệ",
    url: "/historical-sites/thanh-co-vinh",
  },
  {
    id: "mo-ba-hoang-thi-loan",
    title: "Mộ bà Hoàng Thị Loan",
    category: "Di tích lưu niệm danh nhân",
    description: "Nơi an nghỉ của thân mẫu Chủ tịch Hồ Chí Minh",
    url: "/historical-sites/mo-ba-hoang-thi-loan",
  },
];

// Dữ liệu mẫu cho các hành trình du lịch
const journeys = [
  {
    id: "ve-nguon",
    title: "Hành trình về nguồn",
    category: "Hành trình du lịch",
    description: "Khám phá quê hương và cuộc đời của Chủ tịch Hồ Chí Minh",
    url: "/destinations/ve-nguon",
  },
  {
    id: "con-duong-huyen-thoai",
    title: "Con đường huyền thoại",
    category: "Hành trình du lịch",
    description: "Hành trình theo dấu chân những người anh hùng",
    url: "/destinations/con-duong-huyen-thoai",
  },
  {
    id: "di-san-tam-linh",
    title: "Di sản văn hóa tâm linh",
    category: "Hành trình du lịch",
    description: "Hành trình khám phá các đền, chùa nổi tiếng xứ Nghệ",
    url: "/destinations/di-san-tam-linh",
  },
  {
    id: "dau-an-danh-nhan",
    title: "Dấu ấn danh nhân",
    category: "Hành trình du lịch",
    description: "Hành trình theo chân những danh nhân lịch sử xứ Nghệ",
    url: "/destinations/dau-an-danh-nhan",
  },
];

// Kết hợp tất cả dữ liệu tìm kiếm
const searchItems = [...historicalSites, ...journeys];

export function SearchButton() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Tìm kiếm...</span>
        <span className="sr-only">Tìm kiếm</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Tìm kiếm điểm đến, hành trình..." />
        <CommandList>
          <CommandEmpty>Không tìm thấy kết quả nào.</CommandEmpty>
          <CommandGroup heading="Di tích lịch sử">
            {historicalSites.map((site) => (
              <CommandItem
                key={site.id}
                onSelect={() => runCommand(() => router.push(site.url))}
              >
                <span>{site.title}</span>
                <span className="text-muted-foreground text-xs ml-2">
                  - {site.description}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Hành trình du lịch">
            {journeys.map((journey) => (
              <CommandItem
                key={journey.id}
                onSelect={() => runCommand(() => router.push(journey.url))}
              >
                <span>{journey.title}</span>
                <span className="text-muted-foreground text-xs ml-2">
                  - {journey.description}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export function SearchDialog({ ...props }: DialogProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(searchItems);

  // Lọc các mục tìm kiếm dựa trên truy vấn
  React.useEffect(() => {
    if (!searchQuery) {
      setFilteredItems(searchItems);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.description.toLowerCase().includes(lowerCaseQuery) ||
        item.category.toLowerCase().includes(lowerCaseQuery),
    );

    setFilteredItems(filtered);
  }, [searchQuery]);

  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="h-10 justify-start text-muted-foreground"
        >
          <SearchIcon className="mr-2 h-4 w-4" />
          Tìm kiếm điểm đến...
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Tìm kiếm điểm đến</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Nhập tên điểm đến, hành trình..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
            />
          </div>
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {filteredItems.length === 0 ? (
              <div className="text-center py-4 text-muted-foreground">
                Không tìm thấy kết quả nào.
              </div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-2 hover:bg-muted rounded-md cursor-pointer"
                  onClick={() => {
                    router.push(item.url);
                    props.onOpenChange?.(false);
                  }}
                >
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {item.category}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
