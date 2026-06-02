"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { bookingRooms, hotel, paymentMethods } from "@/data/hotel";

type StayType = "night" | "day";

function formatMoney(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

function getToday() {
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  return today.toISOString().split("T")[0];
}

function getUnits(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 1;

  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end.getTime() - start.getTime();
  const units = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return units > 0 ? units : 1;
}

export default function BookingClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const today = getToday();

  const initialRoom =
    searchParams.get("room") || bookingRooms[0]?.id || "standard";

  const initialStayType =
    searchParams.get("stayType") === "day" ? "day" : "night";

  const [form, setForm] = useState({
    roomId: initialRoom,
    checkIn: searchParams.get("checkIn") || "",
    checkOut: searchParams.get("checkOut") || "",
    guests: searchParams.get("guests") || "2",
    name: "",
    phone: "",
    email: "",
    note: "",
    paymentMethod: "pay-at-hotel",
    stayType: initialStayType as StayType,
  });

  const selectedRoom = useMemo(() => {
    return (
      bookingRooms.find((room) => room.id === form.roomId) || bookingRooms[0]
    );
  }, [form.roomId]);

  const selectedPayment = useMemo(() => {
    return (
      paymentMethods.find((item) => item.id === form.paymentMethod) ||
      paymentMethods[0]
    );
  }, [form.paymentMethod]);

  const currentUnitPrice =
    form.stayType === "night"
      ? selectedRoom.nightPrice
      : selectedRoom.dayPrice;

  const units = getUnits(form.checkIn, form.checkOut);
  const total = currentUnitPrice * units;

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => {
      const next = {
        ...prev,
        [name]: value,
      };

      if (name === "checkIn" && next.checkOut && next.checkOut < value) {
        next.checkOut = value;
      }

      return next;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const params = new URLSearchParams({
      roomName: selectedRoom.name,
      roomId: selectedRoom.id,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      units: String(units),
      guests: form.guests,
      name: form.name,
      phone: form.phone,
      email: form.email,
      note: form.note || "Không có",
      paymentMethod: selectedPayment.name,
      total: String(total),
      stayType: form.stayType === "night" ? "Qua đêm" : "Cả ngày",
    });

    router.push(`/booking-success?${params.toString()}`);
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
                Hotel & Studio
              </p>
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border border-[#0F2F3A]/20 px-4 py-2 text-sm font-black text-[#0F2F3A] hover:bg-[#F4EFE4]"
          >
            Về trang chủ
          </a>
        </div>
      </header>

      <section className="px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
              Đặt phòng
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#111827] md:text-6xl">
              Hoàn tất thông tin đặt phòng
            </h1>

            <p className="mt-4 max-w-2xl leading-8 text-[#5F6673]">
              Nhập thông tin lưu trú, kiểm tra lại phòng đã chọn và xác nhận đặt
              phòng tại Le House Hotel.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-8 md:grid-cols-[1fr_0.78fr]"
          >
            <div className="space-y-6">
              <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
                <h2 className="text-2xl font-black text-[#111827]">
                  Thông tin lưu trú
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-black text-[#111827]">
                      Ngày nhận phòng
                    </label>
                    <input
                      required
                      type="date"
                      name="checkIn"
                      min={today}
                      value={form.checkIn}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#0F2F3A]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-[#111827]">
                      Ngày trả phòng
                    </label>
                    <input
                      required
                      type="date"
                      name="checkOut"
                      min={form.checkIn || today}
                      value={form.checkOut}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#0F2F3A]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-[#111827]">
                      Số khách
                    </label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#0F2F3A]"
                    >
                      <option value="1">1 khách</option>
                      <option value="2">2 khách</option>
                      <option value="3">3 khách</option>
                      <option value="4">4 khách</option>
                      <option value="5+">5+ khách</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-[#111827]">
                      Hình thức lưu trú
                    </label>
                    <select
                      name="stayType"
                      value={form.stayType}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#0F2F3A]"
                    >
                      <option value="night">Qua đêm</option>
                      <option value="day">Cả ngày</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-[#111827]">
                      Số điện thoại
                    </label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Số điện thoại liên hệ"
                      className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#0F2F3A]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-[#111827]">
                      Họ và tên
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nhập họ tên"
                      className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#0F2F3A]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-[#111827]">
                      Email
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Không bắt buộc"
                      className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#0F2F3A]"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-black text-[#111827]">
                    Ghi chú thêm
                  </label>
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ví dụ: muốn phòng có cửa sổ, check-in sớm..."
                    className="w-full resize-none rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#0F2F3A]"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
                <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[280px] overflow-hidden">
                    <img
                      src={selectedRoom.image}
                      alt={selectedRoom.name}
                      className="h-full min-h-[280px] w-full object-cover"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-[#0F2F3A] shadow-sm">
                      Còn {selectedRoom.available} phòng
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <p className="font-black uppercase tracking-[0.2em] text-[#C9A45C]">
                      Phòng đã chọn
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-[#111827]">
                      {selectedRoom.name}
                    </h2>

                    <p className="mt-3 leading-7 text-[#5F6673]">
                      {selectedRoom.desc}
                    </p>

                    <div className="mt-5 rounded-[1.5rem] bg-[#F4EFE4] p-4">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold text-[#6B7280]">
                            Giá hiện tại
                          </p>
                          <p className="mt-1 text-3xl font-black text-[#0F2F3A]">
                            {formatMoney(currentUnitPrice)}
                          </p>
                          <p className="text-sm font-bold text-[#6B7280]">
                            {form.stayType === "night" ? "/ đêm" : "/ ngày"}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-bold text-[#6B7280]">
                            Hình thức
                          </p>
                          <p className="mt-1 font-black text-[#0F2F3A]">
                            {form.stayType === "night" ? "Qua đêm" : "Cả ngày"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="mb-2 block text-sm font-black text-[#111827]">
                        Đổi phòng trực tiếp
                      </label>

                      <select
                        name="roomId"
                        value={form.roomId}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold text-[#0F2F3A] outline-none focus:border-[#0F2F3A]"
                      >
                        {bookingRooms.map((room) => {
                          const price =
                            form.stayType === "night"
                              ? room.nightPrice
                              : room.dayPrice;

                          return (
                            <option key={room.id} value={room.id}>
                              {room.name} - {formatMoney(price)}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="md:sticky md:top-24">
              <div className="rounded-[2rem] bg-[#0F2F3A] p-5 text-white shadow-2xl shadow-black/15 md:p-6">
                <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
                  Xác nhận
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Chi tiết đặt phòng
                </h2>

                <div className="mt-6 space-y-4 text-white/85">
                  <div className="flex justify-between gap-4">
                    <span>Loại phòng</span>
                    <strong className="text-right text-white">
                      {selectedRoom.name}
                    </strong>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Hình thức</span>
                    <strong className="text-white">
                      {form.stayType === "night" ? "Qua đêm" : "Cả ngày"}
                    </strong>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Số phòng còn trống</span>
                    <strong className="text-white">
                      {selectedRoom.available}
                    </strong>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>
                      {form.stayType === "night" ? "Số đêm" : "Số ngày"}
                    </span>
                    <strong className="text-white">{units}</strong>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>
                      Giá mỗi {form.stayType === "night" ? "đêm" : "ngày"}
                    </span>
                    <strong className="text-white">
                      {formatMoney(currentUnitPrice)}
                    </strong>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/15 pt-6">
                  <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#C9A45C]">
                    Phương thức thanh toán
                  </p>

                  <div className="grid gap-3">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className={`cursor-pointer rounded-[1.3rem] border p-4 transition ${
                          form.paymentMethod === method.id
                            ? "border-[#C9A45C] bg-white/10"
                            : "border-white/15 bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={form.paymentMethod === method.id}
                            onChange={handleChange}
                          />
                          <p className="font-black text-white">
                            {method.name}
                          </p>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-white/65">
                          {method.desc}
                        </p>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/15 pt-6">
                  <div className="flex items-end justify-between gap-4">
                    <span className="font-bold text-white/85">
                      Tổng thanh toán
                    </span>
                    <strong className="text-3xl text-[#C9A45C]">
                      {formatMoney(total)}
                    </strong>
                  </div>

                  <p className="mt-2 text-sm text-white/60">
                    Tổng tiền được tính theo{" "}
                    {form.stayType === "night" ? "số đêm" : "số ngày"} và loại
                    phòng đã chọn.
                  </p>
                </div>

                <button
                  type="submit"
                  className="mt-7 w-full rounded-full bg-white px-6 py-4 font-black text-[#0F2F3A] transition hover:-translate-y-0.5 hover:bg-[#F4EFE4]"
                >
                  Đặt phòng
                </button>
              </div>
            </aside>
          </form>
        </div>
      </section>
    </main>
  );
}