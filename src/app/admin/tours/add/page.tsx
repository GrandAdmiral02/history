
"use client";

import { AdminTourForm } from "@/components/admin/admin-tour-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Trang này đã bị loại bỏ theo yêu cầu
export default function AddTourPage() {
  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-red-600">
            Chức năng thêm tour đã bị loại bỏ
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>Chức năng này không còn khả dụng theo yêu cầu quản lý.</p>
        </CardContent>
      </Card>
    </div>
  );
}
