"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { bookingRooms } from "@/data/hotel";

export default function BookingStrip() {
  const router = useRouter();

  const [form, setForm] = useState({
    room: bookingRooms[0]?.id || "standard",
    checkIn: "",
    checkOut: "",
    guests: "2",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      room: form.room,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
    });

    router.push(`/booking?${params.toString()}`);
  }

  return (
    <section className="relative z-20 -mt-8 px-4 md:-mt-12 md:px-6">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-6xl rounded-[2rem] border border-black/5 bg-white p-3 shadow-2xl shadow-black/10 md:p-4"
      >
        <div className="grid gap-3 md:grid-cols-[1fr_1fr_0.85fr_1.15fr_0.9fr]">
          <div className="rounded-[1.3rem] bg-[#F4EFE4] px-4 py-3.5">
            <label className="block text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A45C]">
              Nhận phòng
            </label>
            <input
              required
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              className="mt-2 w-full bg-transparent text-[15px] font-black text-[#0F2F3A] outline-none"
            />
          </div>

          <div className="rounded-[1.3rem] bg-[#F4EFE4] px-4 py-3.5">
            <label className="block text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A45C]">
              Trả phòng
            </label>
            <input
              required
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              className="mt-2 w-full bg-transparent text-[15px] font-black text-[#0F2F3A] outline-none"
            />
          </div>

          <div className="rounded-[1.3rem] bg-[#F4EFE4] px-4 py-3.5">
            <label className="block text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A45C]">
              Số khách
            </label>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="mt-2 w-full bg-transparent text-[15px] font-black text-[#0F2F3A] outline-none"
            >
              <option value="1">1 khách</option>
              <option value="2">2 khách</option>
              <option value="3">3 khách</option>
              <option value="4">4 khách</option>
              <option value="5+">5+ khách</option>
            </select>
          </div>

          <div className="rounded-[1.3rem] bg-[#F4EFE4] px-4 py-3.5">
            <label className="block text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A45C]">
              Loại phòng
            </label>
            <select
              name="room"
              value={form.room}
              onChange={handleChange}
              className="mt-2 w-full bg-transparent text-[15px] font-black text-[#0F2F3A] outline-none"
            >
              {bookingRooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="rounded-[1.3rem] bg-[#0F2F3A] px-5 py-4 text-sm font-black text-white shadow-lg shadow-[#0F2F3A]/15 transition hover:-translate-y-0.5 hover:bg-[#09232C]"
          >
            Kiểm tra phòng
          </button>
        </div>
      </form>
    </section>
  );
}