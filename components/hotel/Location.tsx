import { hotel, zaloLink } from "@/data/hotel";

export default function Location() {
  return (
    <section id="location" className="bg-[#FFFDF8] px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <p className="font-bold uppercase tracking-widest text-[#8B1E2D]">
              Vị trí
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-950 md:text-4xl">
              2 cơ sở tại Liên Chiểu, thuận tiện di chuyển
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-red-100 bg-red-50 p-5">
                <p className="font-bold text-gray-950">Cơ sở 1</p>
                <p className="mt-2 text-gray-700">{hotel.address1}</p>
              </div>

              <div className="rounded-3xl border border-red-100 bg-red-50 p-5">
                <p className="font-bold text-gray-950">Cơ sở 2</p>
                <p className="mt-2 text-gray-700">{hotel.address2}</p>
              </div>
            </div>

            <a
              href={zaloLink}
              target="_blank"
              className="mt-7 inline-flex rounded-full bg-[#8B1E2D] px-7 py-4 font-bold text-white hover:bg-[#721827]"
            >
              Nhắn Zalo hỏi đường
            </a>
          </div>

          <div className="rounded-[2rem] bg-[#8B1E2D] p-7 text-white shadow-sm">
            <h3 className="text-2xl font-extrabold">Gần các điểm tiện ích</h3>

            <ul className="mt-6 space-y-4 text-white/90">
              <li>• Biển Nguyễn Tất Thành</li>
              <li>• Khu vực Liên Chiểu</li>
              <li>• Quán ăn, cà phê, cửa hàng tiện lợi</li>
              <li>• Trung tâm thành phố Đà Nẵng</li>
              <li>• Phù hợp khách công tác, du lịch và lưu trú ngắn ngày</li>
            </ul>

          <div className="mt-8 overflow-hidden rounded-3xl bg-white/10 p-6">
  <p className="text-sm text-white/70">Khu vực lưu trú</p>
  <p className="mt-2 text-lg font-bold">
    Phù hợp cho khách cần nơi nghỉ sạch sẽ, riêng tư, dễ di chuyển trong khu vực Liên Chiểu và các điểm lân cận.
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
