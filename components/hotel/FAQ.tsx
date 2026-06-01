import { hotel } from "@/data/hotel";

export default function FAQ() {
  return (
    <section className="bg-white px-4 py-16 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-[#8B1E2D]">
            Câu hỏi thường gặp
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-950 md:text-4xl">
            Thông tin trước khi đặt phòng
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {hotel.faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-gray-100 bg-[#FFFDF8] p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-bold text-gray-950">
                {item.question}
              </summary>
              <p className="mt-4 leading-8 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
