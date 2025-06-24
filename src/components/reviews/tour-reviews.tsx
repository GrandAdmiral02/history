
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, StarIcon } from "lucide-react";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export function TourReviews({ tourId }: { tourId?: string }) {
  const getStoredReviews = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`reviews-${tourId || 'default'}`);
      if (stored) {
        return JSON.parse(stored);
      }
    }
    return [
      {
        id: "1",
        name: "Nguyễn Văn A",
        rating: 5,
        comment: "Tour rất tuyệt vời, hướng dẫn viên nhiệt tình. Tôi sẽ quay lại!",
        date: "2024-01-15",
      },
      {
        id: "2", 
        name: "Trần Thị B",
        rating: 4,
        comment: "Chuyến đi thú vị, học được nhiều điều về lịch sử Nghệ An.",
        date: "2024-01-10",
      },
    ];
  };

  const [reviews, setReviews] = useState<Review[]>(getStoredReviews);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment || newReview.rating === 0) {
      alert("Vui lòng điền đầy đủ thông tin đánh giá");
      return;
    }

    const review: Review = {
      id: Date.now().toString(),
      ...newReview,
      date: new Date().toISOString().split('T')[0],
    };

    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    
    // Lưu vào localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(`reviews-${tourId || 'default'}`, JSON.stringify(updatedReviews));
    }
    
    setNewReview({ name: "", rating: 0, comment: "" });
    alert("Cảm ơn bạn đã đánh giá!");
  };

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => {
      const isFilled = index < rating;
      return (
        <StarIcon
          key={index}
          className={`h-5 w-5 ${
            isFilled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
          onClick={
            interactive
              ? () => setNewReview({ ...newReview, rating: index + 1 })
              : undefined
          }
          onMouseEnter={
            interactive ? () => setHoveredStar(index + 1) : undefined
          }
          onMouseLeave={interactive ? () => setHoveredStar(0) : undefined}
        />
      );
    });
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  return (
    <div className="space-y-6">
      {/* Thống kê đánh giá */}
      <Card>
        <CardHeader>
          <CardTitle>Đánh giá từ khách hàng</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-3xl font-bold text-yellow-600">
              {averageRating}
            </div>
            <div className="flex">{renderStars(Math.round(Number(averageRating)))}</div>
            <div className="text-muted-foreground">
              ({reviews.length} đánh giá)
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form đánh giá mới */}
      <Card>
        <CardHeader>
          <CardTitle>Viết đánh giá của bạn</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <Label htmlFor="reviewName">Tên của bạn</Label>
              <Input
                id="reviewName"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                placeholder="Nhập tên của bạn"
                required
              />
            </div>

            <div>
              <Label>Đánh giá sao</Label>
              <div className="flex space-x-1 mt-1">
                {Array.from({ length: 5 }, (_, index) => {
                  const isFilled = index < (hoveredStar || newReview.rating);
                  return (
                    <StarIcon
                      key={index}
                      className={`h-6 w-6 cursor-pointer transition-colors ${
                        isFilled ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                      }`}
                      onClick={() => setNewReview({ ...newReview, rating: index + 1 })}
                      onMouseEnter={() => setHoveredStar(index + 1)}
                      onMouseLeave={() => setHoveredStar(0)}
                    />
                  );
                })}
              </div>
            </div>

            <div>
              <Label htmlFor="reviewComment">Lời đánh giá</Label>
              <Textarea
                id="reviewComment"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder="Chia sẻ trải nghiệm của bạn về tour này..."
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="bg-green-700 hover:bg-green-800">
              Gửi đánh giá
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Danh sách đánh giá */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
