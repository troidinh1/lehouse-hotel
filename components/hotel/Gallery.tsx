import { hotel } from "@/data/hotel";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-[#8B1E2D]">
            Hình ảnh
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-950 md:text-4xl">
            Không gian lưu trú tại Le House
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
            Một số hình ảnh phòng và không gian khách sạn. Khi làm bản chính
            thức, chỉ cần thay ảnh thật của khách sạn vào đúng thư mục.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {hotel.gallery.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-3xl shadow-sm ${
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
