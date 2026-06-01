import { hotel } from "@/data/hotel";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white px-4 py-16 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="font-bold uppercase tracking-widest text-[#8B1E2D]">
            Tiện nghi
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-950 md:text-4xl">
            Đầy đủ tiện ích cho một kỳ nghỉ thoải mái
          </h2>
          <p className="mt-5 leading-8 text-gray-600">
            Le House tập trung vào trải nghiệm lưu trú gọn gàng, sạch sẽ và tiện
            lợi. Phù hợp với khách cần nơi nghỉ riêng tư, dễ di chuyển và dễ đặt
            phòng.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {hotel.amenities.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-gray-100 bg-[#FFFDF8] p-5 text-center font-bold text-gray-800 shadow-sm"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-red-50" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
