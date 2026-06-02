import { hotel, phoneLink } from "@/data/hotel";

export default function FinalCTA() {
  return (
    <section className="bg-[#0F2F3A] px-4 py-16 text-white md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-black uppercase tracking-[0.25em] text-[#C9A45C]">
          Đặt phòng nhanh
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          Sẵn sàng lưu trú tại Le House?
        </h2>

       <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
  Chọn ngày lưu trú, xem giá theo qua đêm hoặc cả ngày, sau đó chọn hạng phòng
  phù hợp để hoàn tất đặt phòng trực tiếp trên website.
</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/booking"
            className="rounded-full bg-white px-8 py-4 font-black text-[#0F2F3A] transition hover:-translate-y-0.5 hover:bg-[#F4EFE4]"
          >
            Kiểm tra phòng trống
          </a>

          <a
            href={phoneLink}
            className="rounded-full border border-white/30 px-8 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Gọi {hotel.hotline}
          </a>
        </div>
      </div>
    </section>
  );
}