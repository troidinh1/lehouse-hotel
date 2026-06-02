"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { bookingRooms, hotel, paymentMethods } from "@/data/hotel";

function formatMoney(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

function getNights(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 1;

  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end.getTime() - start.getTime();
  const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return nights > 0 ? nights : 1;
}

export default function BookingClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultRoom =
    searchParams.get("room") || bookingRooms[0]?.id || "standard";

  const [form, setForm] = useState({
    roomId: defaultRoom,
    checkIn: searchParams.get("checkIn") || "",
    checkOut: searchParams.get("checkOut") || "",
    guests: searchParams.get("guests") || "2",
    name: "",
    phone: "",
    email: "",
    note: "",
    paymentMethod: "pay-at-hotel",
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

  const nights = getNights(form.checkIn, form.checkOut);
  const total = selectedRoom.price * nights;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const params = new URLSearchParams({
      roomName: selectedRoom.name,
      roomId: selectedRoom.id,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      nights: String(nights),
      guests: form.guests,
      name: form.name,
      phone: form.phone,
      email: form.email,
      note: form.note || "Không có",
      paymentMethod: selectedPayment.name,
      total: String(total),
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
              Xác nhận thông tin lưu trú
            </h1>
            <p className="mt-4 max-w-2xl leading-8 text-[#5F6673]">
              Chọn loại phòng, ngày lưu trú và phương thức thanh toán. Le House
              sẽ liên hệ xác nhận phòng trống trước khi giữ phòng chính thức.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-8 md:grid-cols-[1fr_0.85fr]"
          >
            <div className="space-y-6">
              <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
                <h2 className="text-2xl font-black text-[#111827]">
                  Chọn loại phòng
                </h2>

                <div className="mt-5 grid gap-4">
                  {bookingRooms.map((room) => (
                    <label
                      key={room.id}
                      className={`grid cursor-pointer gap-4 rounded-[1.5rem] border p-4 transition md:grid-cols-[140px_1fr_auto] ${
                        form.roomId === room.id
                          ? "border-[#0F2F3A] bg-[#F4EFE4]"
                          : "border-black/10 bg-white hover:bg-[#FAF7F0]"
                      }`}
                    >
                      <img
                        src={room.image}
                        alt={room.name}
                        className="h-32 w-full rounded-[1.2rem] object-cover md:h-28"
                      />

                      <div>
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="roomId"
                            value={room.id}
                            checked={form.roomId === room.id}
                            onChange={handleChange}
                          />
                          <p className="font-black text-[#111827]">
                            {room.name}
                          </p>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-[#5F6673]">
                          {room.desc}
                        </p>

                        <p className="mt-3 text-sm font-black text-[#0F2F3A]">
                          Còn {room.available} phòng trống
                        </p>
                      </div>

                      <div className="text-left md:text-right">
                        <p className="text-xl font-black text-[#0F2F3A]">
                          {formatMoney(room.price)}
                        </p>
                        <p className="text-sm text-[#6B7280]">/ đêm</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
                <h2 className="text-2xl font-black text-[#111827]">
                  Thông tin đặt phòng
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
            </div>

            <aside className="md:sticky md:top-24">
              <div className="rounded-[2rem] bg-[#0F2F3A] p-5 text-white shadow-2xl shadow-black/15 md:p-6">
                <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
                  Xác nhận
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Thông tin đặt phòng
                </h2>

                <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-white/10">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="h-52 w-full object-cover"
                  />
                </div>

                <div className="mt-6 space-y-4 text-white/85">
                  <div className="flex justify-between gap-4">
                    <span>Loại phòng</span>
                    <strong className="text-right text-white">
                      {selectedRoom.name}
                    </strong>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Số phòng còn trống</span>
                    <strong className="text-white">
                      {selectedRoom.available}
                    </strong>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Số đêm</span>
                    <strong className="text-white">{nights}</strong>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Giá mỗi đêm</span>
                    <strong className="text-white">
                      {formatMoney(selectedRoom.price)}
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
                      Tổng tạm tính
                    </span>
                    <strong className="text-3xl text-[#C9A45C]">
                      {formatMoney(total)}
                    </strong>
                  </div>
                  <p className="mt-2 text-sm text-white/60">
                    Giá sẽ được nhân viên xác nhận lại theo tình trạng phòng
                    thực tế.
                  </p>
                </div>

                <button
                  type="submit"
                  className="mt-7 w-full rounded-full bg-white px-6 py-4 font-black text-[#0F2F3A] transition hover:-translate-y-0.5 hover:bg-[#F4EFE4]"
                >
                  Xác nhận đặt phòng
                </button>
              </div>
            </aside>
          </form>
        </div>
      </section>
    </main>
  );
}