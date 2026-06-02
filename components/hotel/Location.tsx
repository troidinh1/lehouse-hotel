import { hotel, zaloLink } from "@/data/hotel";

export default function Location() {
  return (
    <section id="location" className="bg-[#FAF7F0] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
              Vị trí
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111827] md:text-5xl">
              2 cơ sở tại Liên Chiểu, thuận tiện di chuyển
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-[#0F2F3A]/10 bg-[#FAF7F0] p-5">
                <p className="font-black text-[#111827]">Cơ sở 1</p>
                <p className="mt-2 text-[#6B7280]">{hotel.address1}</p>
              </div>

              <div className="rounded-3xl border border-[#0F2F3A]/10 bg-[#FAF7F0] p-5">
                <p className="font-black text-[#111827]">Cơ sở 2</p>
                <p className="mt-2 text-[#6B7280]">{hotel.address2}</p>
              </div>
            </div>
<a
  href="/booking"
  className="mt-7 inline-flex rounded-full bg-[#0F2F3A] px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#09232C]"
>
  Đặt phòng tại Le House
</a>
          </div>

          <div className="rounded-[2rem] bg-[#0F2F3A] p-7 text-white shadow-sm">
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
              Khu vực xung quanh
            </p>

            <h3 className="mt-3 text-3xl font-black">
              Gần các điểm tiện ích tại Đà Nẵng
            </h3>

            <ul className="mt-6 space-y-4 text-white/85">
              <li>• Biển Nguyễn Tất Thành</li>
              <li>• Khu vực Liên Chiểu</li>
              <li>• Quán ăn, cà phê, cửa hàng tiện lợi</li>
              <li>• Trung tâm thành phố Đà Nẵng</li>
              <li>• Phù hợp khách công tác, du lịch và lưu trú ngắn ngày</li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-3xl bg-white/10 p-6">
              <p className="text-sm font-semibold text-[#C9A45C]">
                  Lợi thế vị trí              </p>
              <p className="mt-2 text-lg font-bold">
                Phù hợp cho khách cần nơi nghỉ sạch sẽ, riêng tư, dễ di chuyển
                trong khu vực Liên Chiểu và các điểm lân cận.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}