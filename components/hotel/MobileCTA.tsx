import { phoneLink, zaloLink } from "@/data/hotel";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white p-3 shadow-2xl md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={phoneLink}
          className="rounded-2xl border border-[#0F2F3A]/20 px-4 py-3 text-center text-sm font-black text-[#0F2F3A]"
        >
          Gọi ngay
        </a>

        <a
          href={zaloLink}
          target="_blank"
          className="rounded-2xl bg-[#0F2F3A] px-4 py-3 text-center text-sm font-black text-white"
        >
          Đặt phòng
        </a>
      </div>
    </div>
  );
}