import { hotel, phoneLink, zaloLink } from "@/data/hotel";

export default function BookingStrip() {
  return (
    <section className="relative z-20 -mt-10 px-4 md:-mt-14 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/5 bg-white p-4 shadow-2xl shadow-black/10 md:p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_0.9fr]">
          <div className="rounded-2xl bg-[#F4EFE4] p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C9A45C]">
              Khu vực
            </p>
            <p className="mt-1 font-black text-[#0F2F3A]">
              Liên Chiểu, Đà Nẵng
            </p>
          </div>

          <div className="rounded-2xl bg-[#F4EFE4] p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C9A45C]">
              Loại lưu trú
            </p>
            <p className="mt-1 font-black text-[#0F2F3A]">Hotel & Studio</p>
          </div>

          <div className="rounded-2xl bg-[#F4EFE4] p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C9A45C]">
              Hotline
            </p>
            <p className="mt-1 font-black text-[#0F2F3A]">{hotel.hotline}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            <a
              href={zaloLink}
              target="_blank"
              className="flex items-center justify-center rounded-2xl bg-[#0F2F3A] px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#09232C]"
            >
              Đặt phòng
            </a>

            <a
              href={phoneLink}
              className="flex items-center justify-center rounded-2xl border border-[#0F2F3A]/20 px-5 py-4 text-sm font-black text-[#0F2F3A] transition hover:-translate-y-0.5 hover:bg-[#F4EFE4]"
            >
              Gọi ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}