export const hotel = {
  name: "Le House Hotel & Studio",
  shortName: "Le House",
  slogan: "Khách sạn & căn hộ tiện nghi tại Liên Chiểu, Đà Nẵng",
  description:
    "Le House Hotel & Studio mang đến không gian lưu trú sạch sẽ, thoáng sáng, phù hợp cho khách du lịch, công tác, cặp đôi và gia đình nhỏ khi đến Đà Nẵng.",

  hotline: "0931 451 267",
  zalo: "0931451267",
  facebook: "https://www.facebook.com/lehouse.khachsan/",

  address1: "134–136 Lê Văn Thịnh, Liên Chiểu, Đà Nẵng",
  address2: "97 Phú Lộc 22, Hòa Minh, Liên Chiểu, Đà Nẵng",

  heroImage: "/images/lehouse/hero.jpg",

  highlights: [
    "Gần biển Nguyễn Tất Thành",
    "2 cơ sở tại Liên Chiểu",
    "Phòng studio sạch đẹp",
    "Phù hợp công tác & du lịch",
  ],

  rooms: [
    {
      name: "Phòng đơn tiêu chuẩn",
      desc: "Không gian gọn gàng, sạch sẽ, phù hợp cho 1–2 khách nghỉ ngắn ngày hoặc đi công tác.",
      image: "/images/lehouse/room-1.jpg",
      price: "Liên hệ giá tốt",
    },
    {
      name: "Phòng đôi tiện nghi",
      desc: "Phù hợp cho cặp đôi, bạn bè hoặc gia đình nhỏ cần không gian nghỉ ngơi thoải mái.",
      image: "/images/lehouse/room-2.jpg",
      price: "Liên hệ giá tốt",
    },
    {
      name: "Studio lưu trú dài ngày",
      desc: "Không gian rộng hơn, có khu sinh hoạt nhỏ, phù hợp cho khách cần ở nhiều ngày tại Đà Nẵng.",
      image: "/images/lehouse/room-3.jpg",
      price: "Liên hệ giá tốt",
    },
  ],

  amenities: [
    "Wi-Fi miễn phí",
    "Máy lạnh",
    "TV",
    "Phòng tắm riêng",
    "Bàn làm việc",
    "Chỗ đậu xe",
    "Lễ tân hỗ trợ",
    "Gần khu ăn uống",
  ],

  gallery: [
    "/images/lehouse/gallery-1.jpg",
    "/images/lehouse/gallery-2.jpg",
    "/images/lehouse/gallery-3.jpg",
    "/images/lehouse/gallery-4.jpg",
    "/images/lehouse/gallery-5.jpg",
    "/images/lehouse/gallery-6.jpg",
  ],

  testimonials: [
    {
      name: "Khách lưu trú",
      content:
        "Phòng sạch, vị trí thuận tiện, phù hợp cho chuyến đi công tác ngắn ngày.",
    },
    {
      name: "Khách du lịch",
      content:
        "Không gian sáng, dễ đặt phòng, nhân viên hỗ trợ nhanh và thân thiện.",
    },
    {
      name: "Gia đình nhỏ",
      content:
        "Vị trí dễ di chuyển, gần biển và các tiện ích xung quanh khu Liên Chiểu.",
    },
  ],

  faqs: [
    {
      question: "Le House có gần biển không?",
      answer:
        "Có. Khách sạn nằm tại khu vực Liên Chiểu, thuận tiện di chuyển ra biển Nguyễn Tất Thành.",
    },
    {
      question: "Khách sạn có phù hợp đi công tác không?",
      answer:
        "Có. Phòng có Wi-Fi, máy lạnh, bàn làm việc và không gian nghỉ ngơi riêng tư.",
    },
    {
      question: "Có phòng cho gia đình không?",
      answer:
        "Có thể liên hệ trước qua hotline hoặc Zalo để được tư vấn loại phòng phù hợp số lượng khách.",
    },
    {
      question: "Đặt phòng bằng cách nào?",
      answer:
        "Khách có thể gọi hotline hoặc nhắn Zalo để kiểm tra phòng trống và nhận giá tốt.",
    },
  ],
};

export const zaloLink = `https://zalo.me/${hotel.zalo}`;
export const phoneLink = `tel:${hotel.hotline.replace(/\s/g, "")}`;