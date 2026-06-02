import { hotel, phoneLink, zaloLink } from "@/data/hotel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE4]">
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#C9A45C]/25 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#0F2F3A]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-[1fr_0.95fr] md:px-6 md:pb-24 md:pt-16">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-[#C9A45C]/50 bg-white/80 px-4 py-2 text-sm font-bold text-[#0F2F3A] shadow-sm">
            Khách sạn & căn hộ tại Liên Chiểu, Đà Nẵng
          </div>

         <h1 className="max-w-3xl text-[46px] font-black leading-[1.02] tracking-tight text-[#111827] md:text-[76px]">
  LE HOUSE HOTEL
</h1>

<p className="mt-4 text-xl font-bold text-[#0F2F3A] md:text-2xl">
  Hotel & Studio tại Liên Chiểu, Đà Nẵng
</p>

<p className="mt-5 max-w-2xl text-base leading-8 text-[#5F6673] md:text-lg">
  Không gian lưu trú hiện đại, sạch sẽ và thoải mái. Phù hợp cho khách du
  lịch, công tác, cặp đôi và gia đình nhỏ khi đến Đà Nẵng.
</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={zaloLink}
              target="_blank"
              className="rounded-full bg-[#0F2F3A] px-7 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-[#0F2F3A]/20 transition hover:-translate-y-0.5 hover:bg-[#09232C]"
            >
              Đặt phòng qua Zalo
            </a>

            <a
              href={phoneLink}
              className="rounded-full border border-[#0F2F3A]/20 bg-white px-7 py-4 text-center text-base font-extrabold text-[#0F2F3A] shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A45C]"
            >
              Gọi {hotel.hotline}
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {hotel.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-black/5 bg-white/90 p-4 shadow-sm"
              >
                <p className="text-2xl font-black text-[#0F2F3A]">
                  {item.number}
                </p>
                <p className="mt-1 text-xs font-bold leading-5 text-[#6B7280] md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border-[10px] border-white bg-white shadow-2xl shadow-black/20">
            <img
              src={hotel.heroImage}
              alt={hotel.name}
              className="h-[430px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur md:right-auto md:min-w-72">
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