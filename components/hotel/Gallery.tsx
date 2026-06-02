import { hotel } from "@/data/hotel";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
            Hình ảnh
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111827] md:text-5xl">
            Không gian lưu trú tại Le House
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#6B7280]">
            Hình ảnh phòng nghỉ, không gian lưu trú và các tiện ích tại Le House
            Hotel & Studio.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {hotel.gallery.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-3xl bg-[#FAF7F0] shadow-sm ring-1 ring-black/5 ${
                index === 0 || index === 5 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Le House gallery ${index + 1}`}
                className="h-full min-h-56 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}