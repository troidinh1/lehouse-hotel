import { hotel, phoneLink, zaloLink } from "@/data/hotel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F0]">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#C9A45C]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0F2F3A]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-[1fr_0.95fr] md:px-6 md:py-20">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-[#C9A45C]/30 bg-white/80 px-4 py-2 text-sm font-bold text-[#0F2F3A] shadow-sm">
            Khách sạn & căn hộ tại Liên Chiểu, Đà Nẵng
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-gray-950 md:text-6xl">
            Lưu trú hiện đại, tiện nghi và gần biển Nguyễn Tất Thành
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            {hotel.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={zaloLink}
              target="_blank"
              className="rounded-full bg-[#0F2F3A] px-7 py-4 text-center text-base font-extrabold text-white shadow-lg shadow-[#0F2F3A]/20 hover:bg-[#09232c]"
            >
              Đặt phòng qua Zalo
            </a>

            <a
              href={phoneLink}
              className="rounded-full border border-[#0F2F3A]/20 bg-white px-7 py-4 text-center text-base font-extrabold text-[#0F2F3A] hover:border-[#C9A45C]"
            >
              Gọi {hotel.hotline}
            </a>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-3">
            {hotel.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white bg-white/80 p-4 shadow-sm"
              >
                <p className="text-2xl font-black text-[#0F2F3A]">
                  {item.number}
                </p>
                <p className="mt-1 text-xs font-semibold leading-5 text-gray-500 md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border-[10px] border-white bg-white shadow-2xl shadow-black/15">
            <img
              src={hotel.heroImage}
              alt={hotel.name}
              className="h-[430px] w-full object-cover md:h-[590px]"
            />
          </div>

          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/50 bg-white/95 p-5 shadow-xl backdrop-blur md:right-auto md:min-w-72">
            <p className="text-sm font-semibold text-gray-500">
              Hotline đặt phòng
            </p>
            <p className="mt-1 text-2xl font-black text-[#0F2F3A]">
              {hotel.hotline}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Hỗ trợ tư vấn phòng trống & giá tốt
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <div className="grid gap-3 rounded-[2rem] bg-white p-4 shadow-lg shadow-black/5 md:grid-cols-4">
          {hotel.highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-[#FAF7F0] px-5 py-4 text-sm font-extrabold text-[#0F2F3A]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}