export const hotel = {
  name: "Le House Hotel & Studio",
  shortName: "Le House",
  slogan: "Khách sạn & căn hộ tiện nghi tại Liên Chiểu, Đà Nẵng",
  description:
    "Không gian lưu trú hiện đại, sạch sẽ và thoải mái dành cho khách du lịch, công tác, cặp đôi và gia đình nhỏ khi đến Đà Nẵng.",

  hotline: "0931 451 267",
  zalo: "0931451267",
  facebook: "https://www.facebook.com/lehouse.khachsan/",

  address1: "134–136 Lê Văn Thịnh, Liên Chiểu, Đà Nẵng",
  address2: "97 Phú Lộc 22, Hòa Minh, Liên Chiểu, Đà Nẵng",

  heroImage: "/images/lehouse/hero.jpg",

  highlights: [
    "Gần biển Nguyễn Tất Thành",
    "2 cơ sở tại Liên Chiểu",
    "Phòng sạch, thoáng, tiện nghi",
    "Phù hợp du lịch & công tác",
  ],

  stats: [
    {
      number: "2",
      label: "Cơ sở lưu trú",
    },
    {
      number: "24/7",
      label: "Hỗ trợ khách hàng",
    },
    {
      number: "400m+",
      label: "Gần khu biển",
    },
  ],

  rooms: [
    {
      name: "Phòng tiêu chuẩn",
      desc: "Không gian gọn gàng, sạch sẽ, đầy đủ tiện nghi cơ bản, phù hợp cho 1–2 khách nghỉ ngắn ngày hoặc đi công tác.",
      image: "/images/lehouse/room-1.jpg",
      price: "Liên hệ giá tốt",
      features: ["1–2 khách", "Wi-Fi", "Máy lạnh", "Phòng tắm riêng"],
    },
    {
      name: "Phòng đôi tiện nghi",
      desc: "Không gian rộng rãi hơn, phù hợp cho cặp đôi, bạn bè hoặc gia đình nhỏ cần nơi nghỉ thoải mái tại Đà Nẵng.",
      image: "/images/lehouse/room-2.jpg",
      price: "Liên hệ giá tốt",
      features: ["2–3 khách", "Giường đôi", "TV", "Không gian thoáng"],
    },
    {
      name: "Studio lưu trú",
      desc: "Không gian studio tiện nghi, phù hợp với khách cần lưu trú nhiều ngày, làm việc, nghỉ ngơi hoặc đi công tác dài ngày.",
      image: "/images/lehouse/room-3.jpg",
      price: "Liên hệ giá tốt",
      features: ["Studio", "Bàn làm việc", "Lưu trú dài ngày", "Riêng tư"],
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
      name: "Khách công tác",
      content:
        "Phòng sạch, yên tĩnh, vị trí thuận tiện để di chuyển trong khu vực Liên Chiểu.",
    },
    {
      name: "Khách du lịch",
      content:
        "Không gian phòng thoáng, dễ đặt phòng, nhân viên hỗ trợ nhanh và thân thiện.",
    },
    {
      name: "Gia đình nhỏ",
      content:
        "Vị trí dễ tìm, gần các tiện ích xung quanh, phù hợp cho chuyến đi ngắn ngày tại Đà Nẵng.",
    },
  ],

  faqs: [
    {
      question: "Le House có gần biển không?",
      answer:
        "Có. Le House nằm tại khu vực Liên Chiểu, thuận tiện di chuyển ra biển Nguyễn Tất Thành và các điểm tiện ích xung quanh.",
    },
    {
      question: "Khách sạn có phù hợp đi công tác không?",
      answer:
        "Có. Phòng có Wi-Fi, máy lạnh, bàn làm việc và không gian nghỉ ngơi riêng tư.",
    },
    {
      question: "Le House có mấy cơ sở?",
      answer:
        "Le House có 2 cơ sở tại khu vực Liên Chiểu, gồm 134–136 Lê Văn Thịnh và 97 Phú Lộc 22.",
    },
    {
      question: "Đặt phòng bằng cách nào?",
      answer:
        "Khách có thể gọi hotline hoặc nhắn Zalo để kiểm tra phòng trống, nhận báo giá và được tư vấn cơ sở phù hợp.",
    },
  ],
};

export const zaloLink = `https://zalo.me/${hotel.zalo}`;
export const phoneLink = `tel:${hotel.hotline.replace(/\s/g, "")}`;