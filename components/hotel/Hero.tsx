import { hotel, zaloLink } from "@/data/hotel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8]">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#8B1E2D]">
            Khách sạn & căn hộ tại Liên Chiểu
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-950 md:text-6xl">
            Lưu trú tiện nghi, gần biển Nguyễn Tất Thành
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
            {hotel.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={zaloLink}
              target="_blank"
              className="rounded-full bg-[#8B1E2D] px-7 py-4 text-center text-base font-bold text-white shadow-lg hover:bg-[#721827]"
            >
              Đặt phòng qua Zalo
            </a>

            <a
              href="#rooms"
              className="rounded-full border border-gray-300 bg-white px-7 py-4 text-center text-base font-bold text-gray-800 hover:border-[#8B1E2D] hover:text-[#8B1E2D]"
            >
              Xem hạng phòng
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {hotel.highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-red-100 bg-white p-4 text-sm font-semibold text-gray-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
            <img
              src={hotel.heroImage}
              alt={hotel.name}
              className="h-[420px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div className="absolute bottom-5 left-5 rounded-3xl bg-white/95 p-5 shadow-xl">
            <p className="text-sm text-gray-500">Hotline đặt phòng</p>
            <p className="text-xl font-extrabold text-[#8B1E2D]">
              {hotel.hotline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
