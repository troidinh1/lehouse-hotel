import { hotel } from "@/data/hotel";

export default function FAQ() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
            Câu hỏi thường gặp
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111827] md:text-5xl">
            Thông tin trước khi đặt phòng
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {hotel.faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-black/5 bg-[#FAF7F0] p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-black text-[#111827]">
                {item.question}
              </summary>
              <p className="mt-4 leading-8 text-[#6B7280]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}