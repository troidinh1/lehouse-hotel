const reasons = [
  {
    title: "Gần biển",
    desc: "Thuận tiện di chuyển ra biển Nguyễn Tất Thành và các khu vực xung quanh Liên Chiểu.",
  },
  {
    title: "Phòng sạch, thoáng",
    desc: "Không gian sáng, gọn gàng, phù hợp nghỉ ngắn ngày hoặc lưu trú công tác.",
  },
  {
    title: "Tiện nghi cơ bản đầy đủ",
    desc: "Wi-Fi, máy lạnh, TV, phòng tắm riêng và khu vực sinh hoạt thoải mái.",
  },
 {
  title: "Đặt phòng thuận tiện",
  desc: "Khách có thể xem giá, chọn hình thức lưu trú và đặt phòng trực tiếp trên website.",
},
];

export default function WhyChoose() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
            Vì sao chọn Le House?
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111827] md:text-5xl">
            Một nơi ở gọn gàng, tiện nghi và dễ di chuyển tại Đà Nẵng
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-black/5 bg-[#FAF7F0] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F2F3A] text-lg font-black text-[#C9A45C]">
                {index + 1}
              </div>
              <h3 className="text-xl font-black text-[#111827]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#6B7280]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}