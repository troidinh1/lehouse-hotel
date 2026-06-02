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

  const bookingInfo = {
    name: params?.get("name") || "",
    phone: params?.get("phone") || "",
    email: params?.get("email") || "",
    roomName: params?.get("roomName") || "",
    checkIn: params?.get("checkIn") || "",
    checkOut: params?.get("checkOut") || "",
    units: params?.get("units") || params?.get("nights") || "1",
    guests: params?.get("guests") || "",
    paymentMethod: params?.get("paymentMethod") || "",
    stayType: params?.get("stayType") || "Qua đêm",
    total: params?.get("total") || "0",
    note: params?.get("note") || "Không có",
  };

  const zaloMessage = useMemo(() => {
    if (!params) return "";

    return `Xin chào ${hotel.name},

Tôi đã đặt phòng trên website:

Họ tên: ${bookingInfo.name}
Số điện thoại: ${bookingInfo.phone}
Email: ${bookingInfo.email || "Không có"}
Loại phòng: ${bookingInfo.roomName}
Hình thức lưu trú: ${bookingInfo.stayType}
Ngày nhận phòng: ${bookingInfo.checkIn}
Ngày trả phòng: ${bookingInfo.checkOut}
Số ${bookingInfo.stayType === "Cả ngày" ? "ngày" : "đêm"}: ${
      bookingInfo.units
    }
Số khách: ${bookingInfo.guests}
Phương thức thanh toán: ${bookingInfo.paymentMethod}
Tổng thanh toán: ${formatMoney(bookingInfo.total)}
Ghi chú: ${bookingInfo.note}

Vui lòng hỗ trợ thêm nếu cần.`;
  }, [params]);

  const zaloLink = `https://zalo.me/${hotel.zalo}?text=${encodeURIComponent(
    zaloMessage
  )}`;

  return (
    <main className="min-h-screen bg-[#F4EFE4]">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F2F3A] text-sm font-black text-[#C9A45C]">
              LH
            </div>

            <div>
              <p className="font-black text-[#111827]">{hotel.shortName}</p>
              <p className="text-xs font-semibold text-[#6B7280]">
                Hotel & Studio
              </p>
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border border-[#0F2F3A]/20 px-4 py-2 text-sm font-black text-[#0F2F3A] transition hover:bg-[#F4EFE4]"
          >
            Về trang chủ
          </a>
        </div>
      </header>

      <section className="px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5">
            <div className="bg-[#0F2F3A] px-6 py-10 text-center text-white md:px-10 md:py-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-black text-[#0F2F3A]">
                ✓
              </div>

              <p className="mt-6 font-black uppercase tracking-[0.25em] text-[#C9A45C]">
                Đặt phòng thành công
              </p>

              <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
                Bạn đã đặt phòng thành công
              </h1>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/75">
                Thông tin đặt phòng của bạn đã được ghi nhận. Bạn có thể gửi
                thông tin này qua Zalo để khách sạn hỗ trợ nhanh hơn nếu cần.
              </p>
            </div>

            {params ? (
              <div className="grid gap-6 p-5 md:grid-cols-[1fr_0.85fr] md:p-8">
                <div className="rounded-[2rem] bg-[#F4EFE4] p-5 md:p-6">
                  <h2 className="text-2xl font-black text-[#111827]">
                    Thông tin đặt phòng
                  </h2>

                  <div className="mt-6 grid gap-4 text-sm md:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4">
                      <p className="font-bold text-[#6B7280]">Họ và tên</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {bookingInfo.name}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="font-bold text-[#6B7280]">Số điện thoại</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {bookingInfo.phone}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="font-bold text-[#6B7280]">Email</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {bookingInfo.email || "Không có"}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="font-bold text-[#6B7280]">Số khách</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {bookingInfo.guests}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 md:col-span-2">
                      <p className="font-bold text-[#6B7280]">Loại phòng</p>
                      <p className="mt-1 text-xl font-black text-[#0F2F3A]">
                        {bookingInfo.roomName}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="font-bold text-[#6B7280]">
                        Hình thức lưu trú
                      </p>
                      <p className="mt-1 font-black text-[#111827]">
                        {bookingInfo.stayType}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="font-bold text-[#6B7280]">
                        Số {bookingInfo.stayType === "Cả ngày" ? "ngày" : "đêm"}
                      </p>
                      <p className="mt-1 font-black text-[#111827]">
                        {bookingInfo.units}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="font-bold text-[#6B7280]">Ngày nhận phòng</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {bookingInfo.checkIn}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4">
                      <p className="font-bold text-[#6B7280]">Ngày trả phòng</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {bookingInfo.checkOut}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 md:col-span-2">
                      <p className="font-bold text-[#6B7280]">Ghi chú</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {bookingInfo.note}
                      </p>
                    </div>
                  </div>
                </div>

                <aside className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
                  <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
                    Xác nhận
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-[#111827]">
                    Chi tiết thanh toán
                  </h2>

                  <div className="mt-6 space-y-4 text-[#5F6673]">
                    <div className="flex justify-between gap-4">
                      <span>Phương thức</span>
                      <strong className="text-right text-[#111827]">
                        {bookingInfo.paymentMethod}
                      </strong>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span>Loại phòng</span>
                      <strong className="text-right text-[#111827]">
                        {bookingInfo.roomName}
                      </strong>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span>Hình thức</span>
                      <strong className="text-[#111827]">
                        {bookingInfo.stayType}
                      </strong>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span>
                        Số{" "}
                        {bookingInfo.stayType === "Cả ngày" ? "ngày" : "đêm"}
                      </span>
                      <strong className="text-[#111827]">
                        {bookingInfo.units}
                      </strong>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-black/10 pt-6">
                    <p className="text-sm font-bold text-[#6B7280]">
                      Tổng thanh toán
                    </p>
                    <p className="mt-1 text-4xl font-black text-[#0F2F3A]">
                      {formatMoney(bookingInfo.total)}
                    </p>
                  </div>

                  <div className="mt-7 grid gap-3">
                    <a
                      href={zaloLink}
                      target="_blank"
                      className="rounded-full bg-[#0F2F3A] px-6 py-4 text-center font-black text-white transition hover:-translate-y-0.5 hover:bg-[#09232C]"
                    >
                      Gửi thông tin cho khách sạn qua Zalo
                    </a>

                    <a
                      href="/"
                      className="rounded-full border border-[#0F2F3A]/20 px-6 py-4 text-center font-black text-[#0F2F3A] transition hover:bg-[#F4EFE4]"
                    >
                      Quay về trang chủ
                    </a>
                  </div>

                  <p className="mt-5 text-center text-sm leading-6 text-[#6B7280]">
                    Khách sạn có thể liên hệ lại để hỗ trợ thêm nếu cần.
                  </p>
                </aside>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="font-black text-[#0F2F3A]">
                  Đang tải thông tin đặt phòng...
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}