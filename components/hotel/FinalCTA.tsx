import { hotel, phoneLink, zaloLink } from "@/data/hotel";

export default function FinalCTA() {
  return (
    <section className="bg-[#0F2F3A] px-4 py-16 text-white md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
          Đặt phòng nhanh
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          Cần phòng tại Liên Chiểu, Đà Nẵng?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
          Liên hệ Le House để kiểm tra phòng trống, nhận giá tốt và được tư vấn
          cơ sở phù hợp với lịch trình của bạn.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={zaloLink}
            target="_blank"
            className="rounded-full bg-white px-8 py-4 font-black text-[#0F2F3A] hover:bg-[#FAF7F0]"
          >
            Nhắn Zalo đặt phòng
          </a>

          <a
            href={phoneLink}
            className="rounded-full border border-white/30 px-8 py-4 font-black text-white hover:bg-white/10"
          >
            Gọi {hotel.hotline}
          </a>
        </div>
      </div>
    </section>
  );
}