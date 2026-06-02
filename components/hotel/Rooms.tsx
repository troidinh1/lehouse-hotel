import { hotel, zaloLink } from "@/data/hotel";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-[#FAF7F0] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
              Hạng phòng
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-gray-950 md:text-5xl">
              Không gian lưu trú phù hợp cho từng nhu cầu
            </h2>
          </div>

          <p className="max-w-md leading-8 text-gray-600">
            Giá phòng có thể thay đổi theo ngày, số lượng khách và thời điểm đặt.
            Vui lòng liên hệ trực tiếp để được tư vấn phòng trống và nhận mức giá tốt nhất.
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {hotel.rooms.map((room) => (
            <div
              key={room.name}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-[#0F2F3A] shadow-sm">
                  {room.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-950">
                  {room.name}
                </h3>

                <p className="mt-3 min-h-24 leading-7 text-gray-600">
                  {room.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-[#FAF7F0] px-3 py-1 text-xs font-bold text-[#0F2F3A]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href={zaloLink}
                  target="_blank"
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-[#0F2F3A] px-5 py-3 font-black text-white hover:bg-[#09232c]"
                >
                  Hỏi giá phòng này
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}