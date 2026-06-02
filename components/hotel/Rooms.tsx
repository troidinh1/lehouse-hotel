import { hotel, bookingRooms } from "@/data/hotel";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-[#F4EFE4] px-4 py-14 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
              Hạng phòng
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#111827] md:text-5xl">
              Không gian lưu trú phù hợp cho từng nhu cầu
            </h2>
          </div>

          <p className="max-w-lg text-[15px] leading-7 text-[#5F6673] md:justify-self-end md:text-base md:leading-8">
            Giá phòng có thể thay đổi theo ngày, số lượng khách và thời điểm
            đặt. Liên hệ trực tiếp để được tư vấn phòng trống và nhận mức giá
            tốt nhất.
          </p>
        </div>

        <div className="mt-8 grid gap-7 md:mt-12 md:grid-cols-3">
          {hotel.rooms.map((room, index) => {
            const bookingRoom = bookingRooms[index];

            return (
              <div
                key={room.name}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:h-80"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-[#0F2F3A] shadow-sm">
                    {room.price}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="text-2xl font-black text-[#111827]">
                    {room.name}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#5F6673] md:text-base">
                    {room.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-[#F4EFE4] px-3 py-1 text-xs font-black text-[#0F2F3A]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/booking?room=${bookingRoom?.id || "standard"}`}
                    className="mt-6 inline-flex w-full justify-center rounded-full bg-[#0F2F3A] px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#09232C] md:mt-auto"
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