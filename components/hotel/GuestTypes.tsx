const guests = [
  {
    title: "Khách công tác",
    desc: "Không gian riêng tư, có Wi-Fi, bàn làm việc và vị trí thuận tiện để di chuyển trong khu vực Liên Chiểu.",
  },
  {
    title: "Cặp đôi",
    desc: "Phòng sạch, thoáng, riêng tư, phù hợp cho kỳ nghỉ ngắn ngày tại Đà Nẵng.",
  },
  {
    title: "Gia đình nhỏ",
    desc: "Có nhiều lựa chọn phòng, thuận tiện cho gia đình cần nơi lưu trú gọn gàng và dễ di chuyển.",
  },
  {
    title: "Khách lưu trú dài ngày",
    desc: "Không gian studio tiện nghi, phù hợp với khách cần ở nhiều ngày hoặc làm việc từ xa.",
  },
];

export default function GuestTypes() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
              Phù hợp với ai?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 md:text-5xl">
              Linh hoạt cho nhiều nhu cầu lưu trú
            </h2>
          </div>

          <p className="leading-8 text-gray-600">
            Le House Hotel & Studio phù hợp cho cả khách du lịch, công tác,
            cặp đôi, gia đình nhỏ hoặc khách cần lưu trú dài ngày tại Đà Nẵng.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {guests.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-black/5 bg-[#FAF7F0] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-black text-[#0F2F3A]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}