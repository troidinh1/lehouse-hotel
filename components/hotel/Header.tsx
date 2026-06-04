import { hotel, phoneLink } from "@/data/hotel";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[999] border-b border-black/5 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F2F3A] text-sm font-extrabold text-[#C9A45C] shadow-sm">
            LH
          </div>

          <div className="leading-tight">
            <p className="text-base font-extrabold tracking-tight text-[#111827]">
              {hotel.shortName}
            </p>
            <p className="hidden text-xs font-medium text-[#6B7280] sm:block">
              Hotel & Studio
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-black/5 bg-[#F4EFE4]/80 p-1 text-sm font-bold text-[#5F6673] md:flex">
          <a
            href="/#rooms"
            className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[#0F2F3A] hover:shadow-sm"
          >
            Hạng phòng
          </a>

          <a
            href="/#rooms"
            className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[#0F2F3A] hover:shadow-sm"
          >
            Đặt phòng
          </a>

          <a
            href="/#amenities"
            className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[#0F2F3A] hover:shadow-sm"
          >
            Tiện nghi
          </a>

          <a
            href="/#location"
            className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[#0F2F3A] hover:shadow-sm"
          >
            Vị trí
          </a>

          <a
            href="/#gallery"
            className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[#0F2F3A] hover:shadow-sm"
          >
            Hình ảnh
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneLink}
            className="hidden rounded-full border border-[#0F2F3A]/20 px-5 py-2.5 text-sm font-bold text-[#0F2F3A] transition hover:bg-[#F4EFE4] sm:block"
          >
            Liên hệ
          </a>

          <a
            href="/#rooms"
            className="rounded-full bg-[#0F2F3A] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#0F2F3A]/15 transition hover:-translate-y-0.5 hover:bg-[#09232C]"
          >
            Đặt phòng
          </a>
        </div>
      </div>
    </header>
  );
}