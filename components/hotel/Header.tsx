import { hotel, phoneLink, zaloLink } from "@/data/hotel";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8B1E2D] text-lg font-bold text-white">
            LH
          </div>

          <div>
            <p className="text-base font-bold text-gray-900">
              {hotel.shortName}
            </p>
            <p className="text-xs text-gray-500">Hotel & Studio</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#rooms" className="hover:text-[#8B1E2D]">
            Hạng phòng
          </a>
          <a href="#amenities" className="hover:text-[#8B1E2D]">
            Tiện nghi
          </a>
          <a href="#location" className="hover:text-[#8B1E2D]">
            Vị trí
          </a>
          <a href="#gallery" className="hover:text-[#8B1E2D]">
            Hình ảnh
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneLink}
            className="hidden rounded-full border border-[#8B1E2D] px-4 py-2 text-sm font-semibold text-[#8B1E2D] hover:bg-red-50 sm:block"
          >
            Gọi ngay
          </a>

          <a
            href={zaloLink}
            target="_blank"
            className="rounded-full bg-[#8B1E2D] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#721827]"
          >
            Đặt phòng
          </a>
        </div>
      </div>
    </header>
  );
}
