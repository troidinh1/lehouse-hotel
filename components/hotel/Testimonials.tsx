import { hotel } from "@/data/hotel";

export default function Testimonials() {
  return (
    <section className="bg-[#FFFDF8] px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-bold uppercase tracking-widest text-[#8B1E2D]">
            Khách hàng nói gì?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-950 md:text-4xl">
            Cảm nhận từ khách lưu trú
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {hotel.testimonials.map((item) => (
            <div
              key={item.content}
              className="rounded-[2rem] bg-white p-7 shadow-sm"
            >
              <div className="mb-5 text-4xl text-[#8B1E2D]">“</div>
              <p className="leading-8 text-gray-700">{item.content}</p>
              <p className="mt-6 font-bold text-gray-950">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
