"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Loader2,
  Search,
  UserCircle,
  MoreHorizontal,
  PenLine,
  Trash2,
  ChevronDown,
  UserCog,
  UserCheck,
} from "lucide-react";
import type { UserRole } from "@prisma/client"; // Sử dụng import từ Prisma sau khi generate

interface User {
  id: string;
  name: string | null;
  email: string;
  role: UserRole;
  createdAt: string;
  emailVerified: string | null;
  image: string | null;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<UserRole | "ALL">("ALL");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Mock data cho demo
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setUsers([
          {
            id: "user-1",
            name: "Nguyễn Văn A",
            email: "nguyenvana@example.com",
            role: "USER",
            createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
            emailVerified: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString(),
            image: null,
          },
          {
            id: "user-2",
            name: "Trần Thị B",
            email: "tranthib@example.com",
            role: "USER",
            createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
            emailVerified: new Date(Date.now() - 24 * 24 * 60 * 60 * 1000).toISOString(),
            image: null,
          },
          {
            id: "user-3",
            name: "Lê Văn C",
            email: "levanc@example.com",
            role: "GUIDE",
            createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
            emailVerified: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toISOString(),
            image: null,
          },
          {
            id: "user-4",
            name: "Phạm Thị D",
            email: "phamthid@example.com",
            role: "ADMIN",
            createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
            emailVerified: new Date(Date.now() - 59 * 24 * 60 * 60 * 1000).toISOString(),
            image: null,
          },
          {
            id: "user-5",
            name: "Hoàng Văn E",
            email: "hoangvane@example.com",
            role: "USER",
            createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            emailVerified: null,
            image: null,
          },
        ]);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Không thể tải dữ liệu người dùng");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users
    .filter((user) => {
      if (roleFilter === "ALL") return true;
      return user.role === roleFilter;
    })
    .filter((user) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        user.name?.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });

  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    if (!confirm(`Bạn có chắc chắn muốn thay đổi vai trò người dùng thành ${newRole}?`)) return;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId
            ? { ...user, role: newRole }
            : user
        )
      );
      alert("Cập nhật vai trò thành công");
    } catch (err) {
      console.error("Error updating user role:", err);
      alert("Đã xảy ra lỗi khi cập nhật vai trò người dùng");
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa người dùng này? Hành động này không thể hoàn tác.")) return;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      alert("Xóa người dùng thành công");
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Đã xảy ra lỗi khi xóa người dùng");
    }
  };

  const getRoleBadge = (role: UserRole) => {
    switch (role) {
      case "ADMIN":
        return (
          <div className="flex items-center bg-red-100 text-red-800 rounded-full px-2 py-1 text-xs font-medium">
            <UserCog className="h-3 w-3 mr-1" />
            Quản trị viên
          </div>
        );
      case "GUIDE":
        return (
          <div className="flex items-center bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs font-medium">
            <UserCheck className="h-3 w-3 mr-1" />
            Hướng dẫn viên
          </div>
        );
      case "USER":
        return (
          <div className="flex items-center bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
            <UserCircle className="h-3 w-3 mr-1" />
            Người dùng
          </div>
        );
      default:
        return (
          <div className="flex items-center bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs font-medium">
            {role}
          </div>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-green-700 mb-4" />
        <p className="text-muted-foreground">Đang tải danh sách người dùng...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-6 text-center">
        <UserCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          Đã xảy ra lỗi
        </h3>
        <p className="text-red-700">{error}</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => window.location.reload()}
        >
          Thử lại
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm theo tên hoặc email"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="min-w-[160px]">
              <span>
                {roleFilter === "ALL" && "Tất cả vai trò"}
                {roleFilter === "ADMIN" && "Quản trị viên"}
                {roleFilter === "GUIDE" && "Hướng dẫn viên"}
                {roleFilter === "USER" && "Người dùng"}
              </span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setRoleFilter("ALL")}>
              Tất cả vai trò
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRoleFilter("ADMIN")}>
              Quản trị viên
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRoleFilter("GUIDE")}>
              Hướng dẫn viên
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRoleFilter("USER")}>
              Người dùng
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="bg-green-700 hover:bg-green-800">
          Thêm người dùng
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Danh sách người dùng</CardTitle>
          <CardDescription>
            Quản lý thông tin và phân quyền người dùng hệ thống
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredUsers.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Không tìm thấy người dùng nào
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Người dùng</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Vai trò</TableHead>
                  <TableHead>Ngày tham gia</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3">
                          {user.image ? (
                            <img
                              src={user.image}
                              alt={user.name || ""}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          ) : (
                            <UserCircle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <span>
                          {user.name || "Chưa cập nhật"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {user.email}
                    </TableCell>
                    <TableCell>
                      {getRoleBadge(user.role)}
                    </TableCell>
                    <TableCell>
                      {user.createdAt ? format(new Date(user.createdAt), "dd/MM/yyyy", {
                        locale: vi,
                      }) : "N/A"}
                    </TableCell>
                    <TableCell>
                      {user.emailVerified ? (
                        <div className="flex items-center bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium max-w-fit">
                          Đã xác thực
                        </div>
                      ) : (
                        <div className="flex items-center bg-yellow-100 text-yellow-800 rounded-full px-2 py-1 text-xs font-medium max-w-fit">
                          Chưa xác thực
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <PenLine className="mr-2 h-4 w-4" />
                            Chỉnh sửa
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleRoleChange(user.id, "ADMIN")}
                            disabled={user.role === "ADMIN"}
                          >
                            <UserCog className="mr-2 h-4 w-4" />
                            Đặt làm Admin
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleRoleChange(user.id, "GUIDE")}
                            disabled={user.role === "GUIDE"}
                          >
                            <UserCheck className="mr-2 h-4 w-4" />
                            Đặt làm Guide
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleRoleChange(user.id, "USER")}
                            disabled={user.role === "USER"}
                          >
                            <UserCircle className="mr-2 h-4 w-4" />
                            Đặt làm User
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600 hover:text-red-700 focus:text-red-700"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Xóa
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}