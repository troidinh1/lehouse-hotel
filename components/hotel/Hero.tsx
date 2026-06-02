import { hotel, phoneLink } from "@/data/hotel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE4]">
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#C9A45C]/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#0F2F3A]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:px-6 md:pb-24 md:pt-16">
        <div className="text-center md:text-left">
          <div className="mb-4 inline-flex rounded-full border border-[#C9A45C]/50 bg-white/85 px-4 py-2 text-xs font-black text-[#0F2F3A] shadow-sm md:text-sm">
            Khách sạn & căn hộ chuyên nghiệp tại Đà Nẵng
          </div>

          <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-[#C9A45C] md:text-sm">
            Welcome to
          </p>

          <h1 className="font-display text-[50px] font-bold leading-[0.92] tracking-tight text-[#111827] md:text-[92px]">
            Le House
            <span className="block text-[#0F2F3A]">Hotel</span>
          </h1>

          <p className="mx-auto mt-5 max-w-sm text-lg font-black leading-snug text-[#0F2F3A] md:mx-0 md:max-w-none md:text-2xl">
            Hotel & Studio tại Liên Chiểu, Đà Nẵng
          </p>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#5F6673] md:mx-0 md:text-lg md:leading-8">
            Không gian lưu trú hiện đại, sạch sẽ và thoải mái. Phù hợp cho khách
            du lịch, công tác, cặp đôi và gia đình nhỏ khi đến Đà Nẵng.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row md:justify-start">
            <a
  href="/#rooms"
  className="rounded-full bg-[#0F2F3A] px-7 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-[#0F2F3A]/20 transition hover:-translate-y-0.5 hover:bg-[#09232C]"
>
  Chọn phòng ngay
</a>

            <a
              href={phoneLink}
              className="rounded-full border border-[#0F2F3A]/20 bg-white px-7 py-4 text-center text-base font-extrabold text-[#0F2F3A] shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A45C]"
            >
              Gọi {hotel.hotline}
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 md:max-w-xl md:gap-3">
            {hotel.stats.map((item) => (
              <div
                key={item.label}
                className="min-w-0 rounded-2xl border border-black/5 bg-white/90 p-3 text-left shadow-sm md:rounded-3xl md:p-5"
              >
                <p className="truncate text-xl font-black text-[#0F2F3A] md:text-3xl">
                  {item.number}
                </p>
                <p className="mt-1 text-[11px] font-bold leading-4 text-[#6B7280] md:text-sm md:leading-5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[1.7rem] border-[8px] border-white bg-white shadow-2xl shadow-black/20 md:rounded-[2rem] md:border-[10px]">
            <img
              src={hotel.heroImage}
              alt={hotel.name}
              className="h-[390px] w-full object-cover md:h-[590px]"
            />
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur md:bottom-6 md:left-6 md:right-auto md:min-w-80 md:p-5">
            <p className="text-sm font-bold text-[#6B7280]">
              Hotline đặt phòng
            </p>
            <p className="mt-1 text-2xl font-black text-[#0F2F3A]">
              {hotel.hotline}
            </p>
            <p className="mt-2 text-sm text-[#6B7280]">
              Hỗ trợ tư vấn phòng trống & giá tốt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}