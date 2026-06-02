import { hotel } from "@/data/hotel";

export default function Footer() {
  return (
    <footer className="bg-gray-950 px-4 py-10 text-white md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-extrabold">{hotel.name}</h3>
          <p className="mt-4 leading-7 text-gray-400">{hotel.slogan}</p>
        </div>

        <div>
          <p className="font-bold">Liên hệ</p>
          <div className="mt-4 space-y-2 text-gray-400">
            <p>Hotline: {hotel.hotline}</p>
            <p>Facebook: Le House Hotel</p>
          </div>
        </div>

        <div>
          <p className="font-bold">Địa chỉ</p>
          <div className="mt-4 space-y-2 text-gray-400">
            <p>{hotel.address1}</p>
            <p>{hotel.address2}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} {hotel.name}. All rights reserved.
      </div>
    </footer>
  );
}
