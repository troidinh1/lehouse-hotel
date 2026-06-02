import { hotel } from "@/data/hotel";

export default function Testimonials() {
  return (
    <section className="bg-[#FAF7F0] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
            Khách hàng nói gì?
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111827] md:text-5xl">
            Cảm nhận từ khách lưu trú
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {hotel.testimonials.map((item) => (
            <div
              key={item.content}
              className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5"
            >
              <div className="mb-5 text-5xl font-black text-[#C9A45C]">“</div>
              <p className="leading-8 text-[#6B7280]">{item.content}</p>
              <p className="mt-6 font-black text-[#111827]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}