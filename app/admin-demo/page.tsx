"use client";

import { useMemo, useState } from "react";
import { hotel } from "@/data/hotel";

type BookingStatus = "new" | "confirmed" | "cancelled";

type Booking = {
  id: string;
  customerName: string;
  phone: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  stayType: "Qua đêm" | "Cả ngày";
  guests: string;
  total: number;
  paymentMethod: string;
  status: BookingStatus;
  note: string;
};

const initialBookings: Booking[] = [
  {
    id: "LH001",
    customerName: "Nguyễn Minh Anh",
    phone: "0901 234 567",
    roomName: "Phòng đôi tiện nghi",
    checkIn: "2026-06-05",
    checkOut: "2026-06-06",
    stayType: "Qua đêm",
    guests: "2",
    total: 550000,
    paymentMethod: "Thanh toán tại khách sạn",
    status: "new",
    note: "Muốn phòng có cửa sổ, check-in khoảng 14h.",
  },
  {
    id: "LH002",
    customerName: "Trần Quốc Huy",
    phone: "0935 678 999",
    roomName: "Studio lưu trú",
    checkIn: "2026-06-08",
    checkOut: "2026-06-10",
    stayType: "Qua đêm",
    guests: "2",
    total: 1400000,
    paymentMethod: "Chuyển khoản giữ phòng",
    status: "confirmed",
    note: "Khách công tác, cần bàn làm việc.",
  },
  {
    id: "LH003",
    customerName: "Lê Hoàng Nam",
    phone: "0977 222 888",
    roomName: "Phòng tiêu chuẩn",
    checkIn: "2026-06-12",
    checkOut: "2026-06-12",
    stayType: "Cả ngày",
    guests: "1",
    total: 300000,
    paymentMethod: "Thanh toán tại khách sạn",
    status: "new",
    note: "Cần nhận phòng buổi sáng.",
  },
  {
    id: "LH004",
    customerName: "Phạm Thu Hà",
    phone: "0912 333 555",
    roomName: "Phòng đôi tiện nghi",
    checkIn: "2026-06-15",
    checkOut: "2026-06-16",
    stayType: "Qua đêm",
    guests: "3",
    total: 550000,
    paymentMethod: "Chuyển khoản giữ phòng",
    status: "cancelled",
    note: "Khách đã đổi lịch.",
  },
];

const statusLabels: Record<BookingStatus, string> = {
  new: "Mới",
  confirmed: "Đã xác nhận",
  cancelled: "Đã hủy",
};

function formatMoney(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

function formatDateVi(value: string) {
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function getStatusClass(status: BookingStatus) {
  if (status === "new") {
    return "bg-[#C9A45C]/15 text-[#8A6A22] ring-[#C9A45C]/30";
  }

  if (status === "confirmed") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  return "bg-red-50 text-red-700 ring-red-200";
}

export default function AdminDemoPage() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [filter, setFilter] = useState<"all" | BookingStatus>("all");

  const filteredBookings = useMemo(() => {
    if (filter === "all") return bookings;
    return bookings.filter((booking) => booking.status === filter);
  }, [bookings, filter]);

  const stats = useMemo(() => {
    const totalRevenue = bookings
      .filter((booking) => booking.status !== "cancelled")
      .reduce((sum, booking) => sum + booking.total, 0);

    return {
      total: bookings.length,
      new: bookings.filter((booking) => booking.status === "new").length,
      confirmed: bookings.filter((booking) => booking.status === "confirmed")
        .length,
      revenue: totalRevenue,
    };
  }, [bookings]);

  function updateStatus(id: string, status: BookingStatus) {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status,
            }
          : booking
      )
    );
  }

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
                Admin Demo
              </p>
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border border-[#0F2F3A]/20 px-4 py-2 text-sm font-black text-[#0F2F3A] transition hover:bg-[#F4EFE4]"
          >
            Về website
          </a>
        </div>
      </header>

      <section className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
                Quản lý booking
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight text-[#111827] md:text-6xl">
                Dashboard đặt phòng
              </h1>

              <p className="mt-4 max-w-2xl leading-8 text-[#5F6673]">
                Giao diện demo cho khách sạn theo dõi đơn đặt phòng, trạng thái
                khách, tổng tiền và thông tin lưu trú.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#0F2F3A] px-5 py-4 text-white shadow-xl shadow-black/10">
              <p className="text-sm font-bold text-white/70">
                Doanh thu dự kiến
              </p>
              <p className="mt-1 text-2xl font-black text-[#C9A45C]">
                {formatMoney(stats.revenue)}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-sm font-bold text-[#6B7280]">Tổng booking</p>
              <p className="mt-2 text-3xl font-black text-[#0F2F3A]">
                {stats.total}
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-sm font-bold text-[#6B7280]">Booking mới</p>
              <p className="mt-2 text-3xl font-black text-[#C9A45C]">
                {stats.new}
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-sm font-bold text-[#6B7280]">Đã xác nhận</p>
              <p className="mt-2 text-3xl font-black text-emerald-600">
                {stats.confirmed}
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-sm font-bold text-[#6B7280]">Tình trạng</p>
              <p className="mt-2 text-3xl font-black text-[#0F2F3A]">Demo</p>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-black/5 md:p-5">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-black text-[#111827]">
                  Danh sách đặt phòng
                </h2>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Có thể lọc trạng thái và đổi trạng thái booking trực tiếp.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:flex">
                {[
                  { key: "all", label: "Tất cả" },
                  { key: "new", label: "Mới" },
                  { key: "confirmed", label: "Đã xác nhận" },
                  { key: "cancelled", label: "Đã hủy" },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() =>
                      setFilter(item.key as "all" | BookingStatus)
                    }
                    className={`rounded-full px-4 py-2 text-sm font-black transition ${
                      filter === item.key
                        ? "bg-[#0F2F3A] text-white"
                        : "bg-[#F4EFE4] text-[#0F2F3A] hover:bg-[#0F2F3A]/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 hidden overflow-hidden rounded-[1.5rem] border border-black/5 md:block">
              <table className="w-full border-collapse bg-white text-left">
                <thead className="bg-[#F4EFE4] text-sm text-[#5F6673]">
                  <tr>
                    <th className="px-4 py-4 font-black">Mã</th>
                    <th className="px-4 py-4 font-black">Khách hàng</th>
                    <th className="px-4 py-4 font-black">Phòng</th>
                    <th className="px-4 py-4 font-black">Lưu trú</th>
                    <th className="px-4 py-4 font-black">Tổng tiền</th>
                    <th className="px-4 py-4 font-black">Trạng thái</th>
                    <th className="px-4 py-4 font-black">Cập nhật</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-t border-black/5 align-top"
                    >
                      <td className="px-4 py-4 font-black text-[#0F2F3A]">
                        {booking.id}
                      </td>

                      <td className="px-4 py-4">
                        <p className="font-black text-[#111827]">
                          {booking.customerName}
                        </p>
                        <p className="mt-1 text-sm text-[#6B7280]">
                          {booking.phone}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <p className="font-bold text-[#111827]">
                          {booking.roomName}
                        </p>
                        <p className="mt-1 text-sm text-[#6B7280]">
                          {booking.guests} khách · {booking.stayType}
                        </p>
                      </td>

                      <td className="px-4 py-4 text-sm text-[#5F6673]">
                        <p>{formatDateVi(booking.checkIn)}</p>
                        <p>→ {formatDateVi(booking.checkOut)}</p>
                      </td>

                      <td className="px-4 py-4 font-black text-[#0F2F3A]">
                        {formatMoney(booking.total)}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-black ring-1 ${getStatusClass(
                            booking.status
                          )}`}
                        >
                          {statusLabels[booking.status]}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <select
                          value={booking.status}
                          onChange={(e) =>
                            updateStatus(
                              booking.id,
                              e.target.value as BookingStatus
                            )
                          }
                          className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-bold text-[#0F2F3A] outline-none"
                        >
                          <option value="new">Mới</option>
                          <option value="confirmed">Đã xác nhận</option>
                          <option value="cancelled">Đã hủy</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-4 md:hidden">
              {filteredBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-[1.5rem] border border-black/5 bg-[#F4EFE4] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C9A45C]">
                        {booking.id}
                      </p>
                      <h3 className="mt-1 text-xl font-black text-[#111827]">
                        {booking.customerName}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-[#6B7280]">
                        {booking.phone}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-black ring-1 ${getStatusClass(
                        booking.status
                      )}`}
                    >
                      {statusLabels[booking.status]}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="rounded-2xl bg-white p-3">
                      <p className="font-bold text-[#6B7280]">Phòng</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {booking.roomName}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-3">
                      <p className="font-bold text-[#6B7280]">Lưu trú</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {formatDateVi(booking.checkIn)} →{" "}
                        {formatDateVi(booking.checkOut)}
                      </p>
                      <p className="mt-1 text-[#6B7280]">
                        {booking.guests} khách · {booking.stayType}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-3">
                      <p className="font-bold text-[#6B7280]">Tổng tiền</p>
                      <p className="mt-1 text-xl font-black text-[#0F2F3A]">
                        {formatMoney(booking.total)}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-3">
                      <p className="font-bold text-[#6B7280]">Ghi chú</p>
                      <p className="mt-1 text-[#111827]">{booking.note}</p>
                    </div>
                  </div>

                  <select
                    value={booking.status}
                    onChange={(e) =>
                      updateStatus(booking.id, e.target.value as BookingStatus)
                    }
                    className="mt-4 w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-black text-[#0F2F3A] outline-none"
                  >
                    <option value="new">Mới</option>
                    <option value="confirmed">Đã xác nhận</option>
                    <option value="cancelled">Đã hủy</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] bg-[#0F2F3A] p-6 text-white md:p-8">
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
              Gợi ý nâng cấp
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Từ demo thành hệ thống quản lý thật
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-white/75">
              Bản này đang là dữ liệu mẫu để demo. Khi triển khai thật, booking
              sẽ được lưu vào database, khách sạn có thể đăng nhập, xem đơn mới,
              đổi trạng thái, lọc theo ngày và thống kê doanh thu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}