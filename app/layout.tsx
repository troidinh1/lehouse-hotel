import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le House Hotel & Studio | Khách sạn tại Liên Chiểu, Đà Nẵng",
  description:
    "Le House Hotel & Studio - khách sạn và căn hộ tiện nghi tại Liên Chiểu, Đà Nẵng. Phòng sạch đẹp, gần biển Nguyễn Tất Thành, phù hợp du lịch và công tác.",
  keywords: [
    "Le House Hotel",
    "khách sạn Liên Chiểu",
    "khách sạn Đà Nẵng",
    "hotel studio Đà Nẵng",
    "khách sạn gần biển Nguyễn Tất Thành",
  ],
  openGraph: {
    title: "Le House Hotel & Studio",
    description:
      "Khách sạn & căn hộ tiện nghi tại Liên Chiểu, Đà Nẵng. Gần biển, phòng sạch, dễ đặt phòng.",
    url: "https://lehouse-hotel.vercel.app",
    siteName: "Le House Hotel & Studio",
    images: [
      {
        url: "/images/lehouse/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Le House Hotel & Studio",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}