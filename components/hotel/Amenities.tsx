import { hotel } from "@/data/hotel";

const icons = ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
            Tiện nghi
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111827] md:text-5xl">
            Đầy đủ tiện ích cho một kỳ nghỉ thoải mái
          </h2>
          <p className="mt-5 leading-8 text-[#5F6673]">
            Le House tập trung vào trải nghiệm lưu trú gọn gàng, sạch sẽ và tiện
            lợi. Phù hợp với khách cần nơi nghỉ riêng tư, dễ di chuyển và dễ đặt
            phòng.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {hotel.amenities.map((item, index) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-black/5 bg-[#F4EFE4] p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F2F3A] text-base font-black text-[#C9A45C]">
                {icons[index]}
              </div>
              <p className="font-black text-[#111827]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}