"use client";

import { useMemo, useState } from "react";
import { hotel } from "@/data/hotel";

type BookingStatus = "new" | "confirmed" | "checked-in" | "cancelled";

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
  {
    id: "LH005",
    customerName: "Hoàng Gia Bảo",
    phone: "0988 777 666",
    roomName: "Phòng tiêu chuẩn",
    checkIn: "2026-06-18",
    checkOut: "2026-06-19",
    stayType: "Qua đêm",
    guests: "2",
    total: 400000,
    paymentMethod: "Thanh toán tại khách sạn",
    status: "checked-in",
    note: "Khách đã nhận phòng.",
  },
];

const statusLabels: Record<BookingStatus, string> = {
  new: "Mới",
  confirmed: "Đã xác nhận",
  "checked-in": "Đã nhận phòng",
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
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  if (status === "confirmed") {
    return "bg-blue-50 text-blue-700 ring-blue-200";
  }

  if (status === "checked-in") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  return "bg-red-50 text-red-700 ring-red-200";
}

function getStatusDot(status: BookingStatus) {
  if (status === "new") return "bg-amber-500";
  if (status === "confirmed") return "bg-blue-500";
  if (status === "checked-in") return "bg-emerald-500";
  return "bg-red-500";
}

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [filter, setFilter] = useState<"all" | BookingStatus>("all");
  const [search, setSearch] = useState("");

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const matchStatus = filter === "all" || booking.status === filter;
      const keyword = search.trim().toLowerCase();

      const matchSearch =
        !keyword ||
        booking.id.toLowerCase().includes(keyword) ||
        booking.customerName.toLowerCase().includes(keyword) ||
        booking.phone.toLowerCase().includes(keyword) ||
        booking.roomName.toLowerCase().includes(keyword);

      return matchStatus && matchSearch;
    });
  }, [bookings, filter, search]);

  const stats = useMemo(() => {
    const activeBookings = bookings.filter(
      (booking) => booking.status !== "cancelled"
    );

    return {
      total: bookings.length,
      new: bookings.filter((booking) => booking.status === "new").length,
      confirmed: bookings.filter((booking) => booking.status === "confirmed")
        .length,
      checkedIn: bookings.filter((booking) => booking.status === "checked-in")
        .length,
      revenue: activeBookings.reduce((sum, booking) => sum + booking.total, 0),
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
    <main className="min-h-screen bg-[#F4EFE4] text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <a href="/admin" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F2F3A] text-sm font-black text-[#C9A45C] shadow-sm">
              LH
            </div>

            <div>
              <p className="font-black leading-tight text-[#111827]">
                Le House Admin
              </p>
              <p className="text-xs font-semibold text-[#6B7280]">
                Booking Management
              </p>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="/"
              className="rounded-full border border-[#0F2F3A]/15 bg-white px-4 py-2 text-sm font-black text-[#0F2F3A] shadow-sm transition hover:bg-[#F4EFE4]"
            >
              Về website
            </a>
          </div>
        </div>
      </header>

      <section className="px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#0F2F3A] shadow-2xl shadow-black/10">
            <div className="grid gap-8 p-6 text-white md:grid-cols-[1fr_360px] md:p-8 lg:p-10">
              <div>
                <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
                  Dashboard
                </p>

                <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                  Quản lý đặt phòng
                </h1>

                <p className="mt-5 max-w-2xl leading-8 text-white/70">
                  Theo dõi booking mới, trạng thái lưu trú, thông tin khách hàng
                  và doanh thu dự kiến trong một giao diện quản lý gọn gàng.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80">
                    Dữ liệu mẫu
                  </span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80">
                    Có thể nâng cấp database
                  </span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80">
                    Mobile friendly
                  </span>
                </div>
              </div>

              <div className="rounded-[1.7rem] bg-white p-6 text-[#111827]">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C9A45C]">
                  Doanh thu dự kiến
                </p>

                <p className="mt-3 text-4xl font-black text-[#0F2F3A]">
                  {formatMoney(stats.revenue)}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  Tổng tiền từ các booking chưa hủy. Khi triển khai thật, số liệu
                  này sẽ lấy trực tiếp từ database.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#F4EFE4] p-4">
                    <p className="text-sm font-bold text-[#6B7280]">Booking</p>
                    <p className="mt-1 text-2xl font-black text-[#0F2F3A]">
                      {stats.total}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F4EFE4] p-4">
                    <p className="text-sm font-bold text-[#6B7280]">Mới</p>
                    <p className="mt-1 text-2xl font-black text-[#C9A45C]">
                      {stats.new}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.7rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#6B7280]">
                  Tổng booking
                </p>
                <span className="h-3 w-3 rounded-full bg-[#0F2F3A]" />
              </div>
              <p className="mt-3 text-3xl font-black text-[#0F2F3A]">
                {stats.total}
              </p>
            </div>

            <div className="rounded-[1.7rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#6B7280]">Booking mới</p>
                <span className="h-3 w-3 rounded-full bg-amber-500" />
              </div>
              <p className="mt-3 text-3xl font-black text-amber-600">
                {stats.new}
              </p>
            </div>

            <div className="rounded-[1.7rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#6B7280]">
                  Đã xác nhận
                </p>
                <span className="h-3 w-3 rounded-full bg-blue-500" />
              </div>
              <p className="mt-3 text-3xl font-black text-blue-600">
                {stats.confirmed}
              </p>
            </div>

            <div className="rounded-[1.7rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#6B7280]">
                  Đã nhận phòng
                </p>
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <p className="mt-3 text-3xl font-black text-emerald-600">
                {stats.checkedIn}
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
            <div className="border-b border-black/5 p-5 md:p-6">
              <div className="grid gap-5 xl:grid-cols-[1fr_auto] xl:items-end">
                <div>
                  <p className="font-black uppercase tracking-[0.2em] text-[#C9A45C]">
                    Booking list
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-[#111827]">
                    Danh sách đặt phòng
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Tìm kiếm theo mã đơn, tên khách, số điện thoại hoặc loại
                    phòng. Có thể cập nhật trạng thái ngay trên bảng.
                  </p>
                </div>

                <div className="grid gap-3 lg:grid-cols-[280px_auto]">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Tìm khách, SĐT, mã đơn..."
                    className="rounded-2xl border border-black/10 bg-[#F4EFE4] px-4 py-3 text-sm font-bold text-[#0F2F3A] outline-none transition focus:border-[#0F2F3A] focus:bg-white"
                  />

                  <div className="grid grid-cols-2 gap-2 sm:flex">
                    {[
                      { key: "all", label: "Tất cả" },
                      { key: "new", label: "Mới" },
                      { key: "confirmed", label: "Xác nhận" },
                      { key: "checked-in", label: "Nhận phòng" },
                      { key: "cancelled", label: "Hủy" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() =>
                          setFilter(item.key as "all" | BookingStatus)
                        }
                        className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                          filter === item.key
                            ? "bg-[#0F2F3A] text-white shadow-lg shadow-[#0F2F3A]/15"
                            : "bg-[#F4EFE4] text-[#0F2F3A] hover:bg-[#0F2F3A]/10"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden xl:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#F4EFE4] text-sm text-[#5F6673]">
                    <th className="px-5 py-4 font-black">Mã</th>
                    <th className="px-5 py-4 font-black">Khách hàng</th>
                    <th className="px-5 py-4 font-black">Phòng</th>
                    <th className="px-5 py-4 font-black">Lưu trú</th>
                    <th className="px-5 py-4 font-black">Thanh toán</th>
                    <th className="px-5 py-4 font-black">Trạng thái</th>
                    <th className="px-5 py-4 font-black">Cập nhật</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-t border-black/5 align-top transition hover:bg-[#FAF7F0]"
                    >
                      <td className="px-5 py-5">
                        <p className="font-black text-[#0F2F3A]">
                          {booking.id}
                        </p>
                      </td>

                      <td className="px-5 py-5">
                        <p className="font-black text-[#111827]">
                          {booking.customerName}
                        </p>
                        <a
                          href={`tel:${booking.phone.replace(/\s/g, "")}`}
                          className="mt-1 inline-flex text-sm font-bold text-[#0F2F3A]"
                        >
                          {booking.phone}
                        </a>
                      </td>

                      <td className="px-5 py-5">
                        <p className="font-black text-[#111827]">
                          {booking.roomName}
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#6B7280]">
                          {booking.guests} khách · {booking.stayType}
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold text-[#5F6673]">
                        <p>{formatDateVi(booking.checkIn)}</p>
                        <p>→ {formatDateVi(booking.checkOut)}</p>
                      </td>

                      <td className="px-5 py-5">
                        <p className="font-black text-[#0F2F3A]">
                          {formatMoney(booking.total)}
                        </p>
                        <p className="mt-1 max-w-[160px] text-sm text-[#6B7280]">
                          {booking.paymentMethod}
                        </p>
                      </td>

                      <td className="px-5 py-5">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black ring-1 ${getStatusClass(
                            booking.status
                          )}`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${getStatusDot(
                              booking.status
                            )}`}
                          />
                          {statusLabels[booking.status]}
                        </span>
                      </td>

                      <td className="px-5 py-5">
                        <select
                          value={booking.status}
                          onChange={(e) =>
                            updateStatus(
                              booking.id,
                              e.target.value as BookingStatus
                            )
                          }
                          className="rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm font-bold text-[#0F2F3A] outline-none transition focus:border-[#0F2F3A]"
                        >
                          <option value="new">Mới</option>
                          <option value="confirmed">Đã xác nhận</option>
                          <option value="checked-in">Đã nhận phòng</option>
                          <option value="cancelled">Đã hủy</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 p-4 xl:hidden">
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
                      <a
                        href={`tel:${booking.phone.replace(/\s/g, "")}`}
                        className="mt-1 inline-flex text-sm font-bold text-[#0F2F3A]"
                      >
                        {booking.phone}
                      </a>
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
                      <p className="mt-1 text-[#6B7280]">
                        {booking.guests} khách · {booking.stayType}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-3">
                      <p className="font-bold text-[#6B7280]">Lưu trú</p>
                      <p className="mt-1 font-black text-[#111827]">
                        {formatDateVi(booking.checkIn)} →{" "}
                        {formatDateVi(booking.checkOut)}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-3">
                      <p className="font-bold text-[#6B7280]">Thanh toán</p>
                      <p className="mt-1 text-xl font-black text-[#0F2F3A]">
                        {formatMoney(booking.total)}
                      </p>
                      <p className="mt-1 text-[#6B7280]">
                        {booking.paymentMethod}
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
                    className="mt-4 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-black text-[#0F2F3A] outline-none"
                  >
                    <option value="new">Mới</option>
                    <option value="confirmed">Đã xác nhận</option>
                    <option value="checked-in">Đã nhận phòng</option>
                    <option value="cancelled">Đã hủy</option>
                  </select>
                </div>
              ))}
            </div>

            {filteredBookings.length === 0 && (
              <div className="p-10 text-center">
                <p className="font-black text-[#0F2F3A]">
                  Không tìm thấy booking phù hợp.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
                  Production ready
                </p>
                <h2 className="mt-3 text-3xl font-black text-[#111827]">
                  Có thể nâng cấp thành hệ thống thật
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-[#6B7280]">
                  Khi triển khai thật, mỗi booking khách đặt trên website sẽ lưu
                  vào database. Nhân viên có thể đăng nhập, xem đơn mới, đổi
                  trạng thái, lọc booking theo ngày và theo dõi doanh thu.
                </p>
              </div>

              <a
                href="/"
                className="inline-flex justify-center rounded-full bg-[#0F2F3A] px-7 py-4 font-black text-white shadow-lg shadow-[#0F2F3A]/15 transition hover:-translate-y-0.5 hover:bg-[#09232C]"
              >
                Xem website khách
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}