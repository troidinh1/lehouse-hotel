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
    title: "Dễ liên hệ đặt phòng",
    desc: "Khách có thể nhắn Zalo hoặc gọi hotline để kiểm tra phòng trống nhanh.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-bold uppercase tracking-widest text-[#8B1E2D]">
            Vì sao chọn Le House?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-950 md:text-4xl">
            Một nơi ở gọn gàng, tiện nghi và dễ di chuyển tại Đà Nẵng
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-100 bg-[#FFFDF8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8B1E2D] text-lg font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
