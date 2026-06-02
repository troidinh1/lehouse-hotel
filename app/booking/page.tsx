import { Suspense } from "react";
import BookingClient from "./BookingClient";

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F4EFE4] px-4 py-10">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="font-black text-[#0F2F3A]">
                Đang tải trang đặt phòng...
              </p>
            </div>
          </div>
        </main>
      }
    >
      <BookingClient />
    </Suspense>
  );
}