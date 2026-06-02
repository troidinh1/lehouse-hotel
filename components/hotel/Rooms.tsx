"use client";

import { useEffect, useState } from "react";
import { bookingRooms } from "@/data/hotel";

type StayType = "night" | "day";

function formatMoney(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

export default function Rooms() {
  const [bookingInfo, setBookingInfo] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
  });

  const [stayType, setStayType] = useState<StayType>("night");

  useEffect(() => {
    function syncFromStorage() {
      setBookingInfo({
        checkIn: localStorage.getItem("lehouse_checkIn") || "",
        checkOut: localStorage.getItem("lehouse_checkOut") || "",
        guests: localStorage.getItem("lehouse_guests") || "2",
      });

      const savedStayType = localStorage.getItem("lehouse_stayType");

      if (savedStayType === "day" || savedStayType === "night") {
        setStayType(savedStayType);
      }
    }

    function handleBookingUpdated(event: Event) {
      const customEvent = event as CustomEvent<{
        checkIn: string;
        checkOut: string;
        guests: string;
        stayType: StayType;
      }>;

      setBookingInfo({
        checkIn: customEvent.detail.checkIn,
        checkOut: customEvent.detail.checkOut,
        guests: customEvent.detail.guests,
      });

      setStayType(customEvent.detail.stayType);
    }

    syncFromStorage();

    window.addEventListener("lehouse-booking-updated", handleBookingUpdated);

    return () => {
      window.removeEventListener(
        "lehouse-booking-updated",
        handleBookingUpdated
      );
    };
  }, []);

  function changeStayType(type: StayType) {
    setStayType(type);
    localStorage.setItem("lehouse_stayType", type);
  }

  function getRoomPrice(room: (typeof bookingRooms)[number]) {
    return stayType === "night" ? room.nightPrice : room.dayPrice;
  }

  function getStayTypeLabel() {
    return stayType === "night" ? "Qua đêm" : "Cả ngày";
  }

  function getUnitLabel() {
    return stayType === "night" ? "/ đêm" : "/ ngày";
  }

  function getBookingHref(roomId: string) {
    const params = new URLSearchParams({
      room: roomId,
      stayType,
    });

    if (bookingInfo.checkIn) params.set("checkIn", bookingInfo.checkIn);
    if (bookingInfo.checkOut) params.set("checkOut", bookingInfo.checkOut);
    if (bookingInfo.guests) params.set("guests", bookingInfo.guests);

    return `/booking?${params.toString()}`;
  }

  return (
    <section id="rooms" className="bg-[#F4EFE4] px-4 py-14 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
              Hạng phòng
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#111827] md:text-5xl">
              Chọn phòng phù hợp với chuyến đi của bạn
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#5F6673] md:text-base md:leading-8">
              Xem giá theo hình thức lưu trú, số phòng còn trống và chọn phòng
              phù hợp trước khi hoàn tất đặt phòng.
            </p>
          </div>

          <div className="inline-flex w-fit rounded-full border border-black/5 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => changeStayType("night")}
              className={`rounded-full px-5 py-2.5 text-sm font-black transition ${
                stayType === "night"
                  ? "bg-[#0F2F3A] text-white"
                  : "text-[#0F2F3A] hover:bg-[#F4EFE4]"
              }`}
            >
              Qua đêm
            </button>

            <button
              type="button"
              onClick={() => changeStayType("day")}
              className={`rounded-full px-5 py-2.5 text-sm font-black transition ${
                stayType === "day"
                  ? "bg-[#0F2F3A] text-white"
                  : "text-[#0F2F3A] hover:bg-[#F4EFE4]"
              }`}
            >
              Cả ngày
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-7 md:mt-10 md:grid-cols-3">
          {bookingRooms.map((room) => {
            const currentPrice = getRoomPrice(room);

            return (
              <div
                key={room.id}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:h-80"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-[#0F2F3A] shadow-sm">
                    Còn {room.available} phòng
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-full bg-[#0F2F3A] px-4 py-2 text-sm font-black text-white shadow-lg">
                    {formatMoney(currentPrice)}
                    {getUnitLabel()}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#C9A45C]">
                    Le House Hotel
                  </p>

                  <h3 className="text-2xl font-black text-[#111827]">
                    {room.name}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#5F6673] md:text-base">
                    {room.desc}
                  </p>

                  <div className="mt-6 rounded-[1.5rem] border border-[#0F2F3A]/10 bg-[#F4EFE4] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A45C]">
                          Còn trống
                        </p>
                        <p className="mt-1 text-base font-black text-[#0F2F3A]">
                          {room.available} phòng
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A45C]">
                          Giá {stayType === "night" ? "đêm" : "ngày"}
                        </p>
                        <p className="mt-1 text-xl font-black text-[#0F2F3A]">
                          {formatMoney(currentPrice)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.5rem] bg-white ring-1 ring-black/5">
                    <div className="flex items-center justify-between px-4 py-3">
                      <p className="text-sm font-bold text-[#5F6673]">
                        Hình thức
                      </p>
                      <p className="text-sm font-black text-[#0F2F3A]">
                        {getStayTypeLabel()}
                      </p>
                    </div>
                  </div>

                  <a
                    href={getBookingHref(room.id)}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-[1.3rem] bg-[#0F2F3A] px-5 py-4 font-black text-white shadow-lg shadow-[#0F2F3A]/15 transition hover:-translate-y-0.5 hover:bg-[#09232C] md:mt-auto"
                  >
                    Đặt phòng này
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}