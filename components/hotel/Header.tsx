import { hotel, phoneLink, zaloLink } from "@/data/hotel";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-3">
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

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#6B7280] md:flex">
          <a href="#rooms" className="hover:text-[#0F2F3A]">
            Hạng phòng
          </a>
          <a href="#amenities" className="hover:text-[#0F2F3A]">
            Tiện nghi
          </a>
          <a href="#location" className="hover:text-[#0F2F3A]">
            Vị trí
          </a>
          <a href="#gallery" className="hover:text-[#0F2F3A]">
            Hình ảnh
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneLink}
            className="hidden rounded-full border border-[#0F2F3A]/20 px-4 py-2 text-sm font-bold text-[#0F2F3A] hover:bg-[#FAF7F0] sm:block"
          >
            {hotel.hotline}
          </a>

          <a
            href={zaloLink}
            target="_blank"
            className="rounded-full bg-[#0F2F3A] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#09232C]"
          >
            Đặt phòng
          </a>
        </div>
      </div>
    </header>
  );
}