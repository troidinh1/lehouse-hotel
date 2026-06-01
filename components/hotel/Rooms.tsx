import { hotel, zaloLink } from "@/data/hotel";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-[#FFFDF8] px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-widest text-[#8B1E2D]">
              Hạng phòng
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-950 md:text-4xl">
              Chọn phòng phù hợp với chuyến đi của bạn
            </h2>
          </div>

          <p className="max-w-md text-gray-600">
            Giá phòng có thể thay đổi theo ngày, số lượng khách và thời điểm
            đặt. Vui lòng liên hệ để nhận giá tốt nhất.
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {hotel.rooms.map((room) => (
            <div
              key={room.name}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <p className="mb-3 inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-[#8B1E2D]">
                  {room.price}
                </p>

                <h3 className="text-2xl font-extrabold text-gray-950">
                  {room.name}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{room.desc}</p>

                <a
                  href={zaloLink}
                  target="_blank"
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-[#8B1E2D] px-5 py-3 font-bold text-white hover:bg-[#721827]"
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
