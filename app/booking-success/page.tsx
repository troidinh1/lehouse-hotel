"use client";

import { useEffect, useMemo, useState } from "react";
import { hotel } from "@/data/hotel";

function formatMoney(value: string | null) {
  const number = Number(value || 0);
  return new Intl.NumberFormat("vi-VN").format(number) + "đ";
}

export default function BookingSuccessPage() {
  const [params, setParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    setParams(new URLSearchParams(window.location.search));
  }, []);

  const zaloMessage = useMemo(() => {
    if (!params) return "";

    return `Xin chào ${hotel.name},

Tôi vừa gửi yêu cầu đặt phòng trên website:

Họ tên: ${params.get("name")}
Số điện thoại: ${params.get("phone")}
Email: ${params.get("email") || "Không có"}
Loại phòng: ${params.get("roomName")}
Ngày nhận phòng: ${params.get("checkIn")}
Ngày trả phòng: ${params.get("checkOut")}
Số đêm: ${params.get("nights")}
Số khách: ${params.get("guests")}
Phương thức thanh toán: ${params.get("paymentMethod")}
Tổng tạm tính: ${formatMoney(params.get("total"))}
Ghi chú: ${params.get("note")}

Vui lòng xác nhận phòng trống và hướng dẫn bước tiếp theo giúp tôi.`;
  }, [params]);

  const zaloLink = `https://zalo.me/${hotel.zalo}?text=${encodeURIComponent(
    zaloMessage
  )}`;

  return (
    <main className="min-h-screen bg-[#F4EFE4] px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] bg-white p-6 text-center shadow-2xl shadow-black/10 md:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0F2F3A] text-2xl font-black text-[#C9A45C]">
            ✓
          </div>

          <p className="mt-6 font-black uppercase tracking-[0.25em] text-[#C9A45C]">
            Đặt phòng thành công
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[#111827] md:text-5xl">
            Le House đã nhận yêu cầu của bạn
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#5F6673]">
            Đây là yêu cầu đặt phòng tạm thời. Nhân viên khách sạn sẽ kiểm tra
            phòng trống và liên hệ xác nhận lại qua điện thoại hoặc Zalo.
          </p>

          {params && (
            <div className="mt-8 rounded-[2rem] bg-[#F4EFE4] p-5 text-left">
              <h2 className="text-xl font-black text-[#111827]">
                Thông tin đặt phòng
              </h2>

              <div className="mt-5 grid gap-3 text-sm text-[#5F6673] md:grid-cols-2">
                <p>
                  <strong className="text-[#111827]">Họ tên:</strong>{" "}
                  {params.get("name")}
                </p>
                <p>
                  <strong className="text-[#111827]">Số điện thoại:</strong>{" "}
                  {params.get("phone")}
                </p>
                <p>
                  <strong className="text-[#111827]">Loại phòng:</strong>{" "}
                  {params.get("roomName")}
                </p>
                <p>
                  <strong className="text-[#111827]">Số khách:</strong>{" "}
                  {params.get("guests")}
                </p>
                <p>
                  <strong className="text-[#111827]">Nhận phòng:</strong>{" "}
                  {params.get("checkIn")}
                </p>
                <p>
                  <strong className="text-[#111827]">Trả phòng:</strong>{" "}
                  {params.get("checkOut")}
                </p>
                <p>
                  <strong className="text-[#111827]">Số đêm:</strong>{" "}
                  {params.get("nights")}
                </p>
                <p>
                  <strong className="text-[#111827]">Thanh toán:</strong>{" "}
                  {params.get("paymentMethod")}
                </p>
              </div>

              <div className="mt-5 border-t border-black/10 pt-5">
                <p className="text-sm font-bold text-[#5F6673]">
                  Tổng tạm tính
                </p>
                <p className="mt-1 text-3xl font-black text-[#0F2F3A]">
                  {formatMoney(params.get("total"))}
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={zaloLink}
              target="_blank"
              className="rounded-full bg-[#0F2F3A] px-6 py-4 font-black text-white hover:bg-[#09232C]"
            >
              Gửi thông tin qua Zalo
            </a>

            <a
              href="/"
              className="rounded-full border border-[#0F2F3A]/20 px-6 py-4 font-black text-[#0F2F3A] hover:bg-[#F4EFE4]"
            >
              Quay về trang chủ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}