import { lazy } from "react";

// import chalus from "../assets/image/agency/chalus.webp";
// import aghdasieh from "../assets/image/agency/aghdasieh.webp";
// import ekbatan from "../assets/image/agency/ekbatan.webp";
// import vanak from "../assets/image/agency/vanak.webp";

// import Categ1 from "../assets/image/categ1.svg";
// import Categ2 from "../assets/image/categ2.svg";
// import Categ3 from "../assets/image/categ3.svg";
// import Categ4 from "../assets/image/categ4.svg";

// import sf1 from "../assets/image/sf1.svg";
// import sf2 from "../assets/image/sf2.svg";
// import sf3 from "../assets/image/sf3.svg";
// import sf4 from "../assets/image/sf4.svg";
// import ff1 from "../assets/image/ff1.svg";
// import ff2 from "../assets/image/ff2.svg";
// import ff3 from "../assets/image/ff3.svg";
// import ff4 from "../assets/image/ff4.svg";
// import of1 from "../assets/image/of1.svg";
// import of2 from "../assets/image/of2.svg";
// import of3 from "../assets/image/of3.svg";
// import of4 from "../assets/image/of4.svg";

import hosein from "../assets/image/hosein.jpg";

const SvgShoppingCart = lazy(() => import("../assets/svg/SvgShoppingCart"));

const agencyData = [
  {
    name: "شعبه اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    // imageSource: ekbatan,
    title: "ekbatan",
    // images: [
    //   {
    //     image: ekbatan,
    //   },
    //   {
    //     image: ekbatan,
    //   },
    // ],
    phoneNumber: "۳۳۵۳۵۳۵۴-۳۳۵۳۵۳۵۶",
    timeActivity: "همه‌روزه از ساعت ۱۲  الی ۲۳ ",
  },
  {
    name: "شعبه چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    // imageSource: chalus,
    title: "chalus",
    // images: [
    //   {
    //     image: chalus,
    //   },
    //   {
    //     image: chalus,
    //   },
    // ],
    phoneNumber: "۳۳۵۳۵۳۵۴-۳۳۵۳۵۳۵۶",
    timeActivity: "همه‌روزه از ساعت ۱۲  الی ۲۳ ",
  },
  {
    name: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    // imageSource: aghdasieh,
    title: "aghdasieh",
    // images: [
    //   {
    //     image: aghdasieh,
    //   },
    //   {
    //     image: aghdasieh,
    //   },
    // ],
    phoneNumber: "۳۳۵۳۵۳۵۴-۳۳۵۳۵۳۵۶",
    timeActivity: "همه‌روزه از ساعت ۱۲  الی ۲۳ ",
  },
  {
    name: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    // imageSource: vanak,
    title: "vanak",
    // images: [
    //   {
    //     image: vanak,
    //   },
    //   {
    //     image: vanak,
    //   },
    // ],
    phoneNumber: "۳۳۵۳۵۳۵۴-۳۳۵۳۵۳۵۶",
    timeActivity: "همه‌روزه از ساعت ۱۲  الی ۲۳ ",
  },
];

const foodCategory = [
  {
    id: 1,
    name: "غذای اصلی",
    // imageSrc: Categ1
  },
  {
    id: 2,
    name: "پیش غذا",
    // imageSrc: Categ2
  },
  {
    id: 3,
    name: "دسر",
    // imageSrc: Categ3
  },
  {
    id: 4,
    name: "نوشیدنی",
    // imageSrc: Categ4
  },
];

const menuSubLink = [
  {
    id: 1,
    title: "غذاهای ایرانی",
  },
  {
    id: 2,
    title: "غذاهای غیر ایرانی",
  },
  {
    id: 3,
    title: "پیتزاها",
  },
  {
    id: 4,
    title: "ساندویچ‌ها",
  },
  {
    id: 5,
    title: "پرفروش‌ترین",
  },
  {
    id: 6,
    title: "اقتصادی‌ترین",
  },
];

// const branchFood = [
//   {
//     tag: "so",
//     type: "irani",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "دلمه برگ کلم",
//     mainPrice: "220,000",
//     discountPrice: "209,000",
//     percentOfDiscount: 8,
//     isFavorite: false,
//     rate: 5,
//     numOfScore: 52,
//     imgUrl: sf1,
//   },
//   {
//     tag: "so",
//     type: "irani",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "بادمجان شکم‌پر",
//     mainPrice: "150,000",
//     discountPrice: "136,000",
//     percentOfDiscount: 18,
//     isFavorite: false,
//     rate: 4,
//     numOfScore: 32,
//     imgUrl: sf2,
//   },
//   {
//     tag: "so",
//     type: "irani",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "کالزونه اسفناج",
//     mainPrice: "190,000",
//     discountPrice: "177,000",
//     percentOfDiscount: 17,
//     isFavorite: false,
//     rate: 5,
//     numOfScore: 62,
//     imgUrl: sf3,
//   },
//   {
//     tag: "so",
//     type: "irani",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "پیتزا قارچ",
//     mainPrice: "215,000",
//     discountPrice: "175,000",
//     percentOfDiscount: 25,
//     isFavorite: false,
//     rate: 3,
//     numOfScore: 33,
//     imgUrl: sf4,
//   },
//   {
//     tag: "so",
//     type: "irani",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "سالاد",
//     mainPrice: "215,000",
//     discountPrice: "175,000",
//     percentOfDiscount: 25,
//     isFavorite: false,
//     rate: 3,
//     numOfScore: 33,
//     imgUrl: sf1,
//   },
//   {
//     tag: "ff",
//     type: "other",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "پنینی اسفناج",
//     mainPrice: "210,000",
//     discountPrice: "190,000",
//     percentOfDiscount: 15,
//     isFavorite: false,
//     rate: 3,
//     numOfScore: 20,
//     imgUrl: ff1,
//   },
//   {
//     tag: "ff",
//     type: "other",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "پیتزا پپرونی",
//     mainPrice: "100,000",
//     discountPrice: null,
//     percentOfDiscount: null,
//     isFavorite: false,
//     rate: 4,
//     numOfScore: 51,
//     imgUrl: ff2,
//   },
//   {
//     tag: "ff",
//     type: "other",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "راتاتویی",
//     mainPrice: "180,000",
//     discountPrice: "95,000",
//     percentOfDiscount: 45,
//     isFavorite: false,
//     rate: 4,
//     numOfScore: 43,
//     imgUrl: ff3,
//   },
//   {
//     tag: "ff",
//     type: "other",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "بورانی بادمجان",
//     mainPrice: "170,000",
//     discountPrice: "148,000",
//     percentOfDiscount: 22,
//     isFavorite: false,
//     rate: 5,
//     numOfScore: 75,
//     imgUrl: ff4,
//   },
//   {
//     tag: "ff",
//     type: "other",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "برگر",
//     mainPrice: "170,000",
//     discountPrice: "148,000",
//     percentOfDiscount: 22,
//     isFavorite: false,
//     rate: 5,
//     numOfScore: 75,
//     imgUrl: ff1,
//   },
//   {
//     tag: "of",
//     type: "pizza",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "سوشی",
//     mainPrice: "100,000",
//     discountPrice: "85,000",
//     percentOfDiscount: 15,
//     isFavorite: false,
//     rate: 4,
//     numOfScore: 70,
//     imgUrl: of1,
//   },
//   {
//     tag: "of",
//     type: "pizza",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "راتاتویی",
//     mainPrice: "180,000",
//     discountPrice: "95,000",
//     percentOfDiscount: 45,
//     isFavorite: false,
//     rate: 4,
//     numOfScore: 60,
//     imgUrl: of2,
//   },
//   {
//     tag: "of",
//     type: "pizza",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "پاکورا سبزیجات",
//     mainPrice: "125,000",
//     discountPrice: "110,000",
//     percentOfDiscount: 8,
//     isFavorite: false,
//     rate: 4,
//     numOfScore: 75,
//     imgUrl: of3,
//   },
//   {
//     tag: "of",
//     type: "pizza",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "لازانیا",
//     mainPrice: "150,000",
//     discountPrice: null,
//     percentOfDiscount: null,
//     isFavorite: false,
//     rate: 5,
//     numOfScore: 48,
//     imgUrl: of4,
//   },
//   {
//     tag: "of",
//     type: "pizza",
//     compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//     name: "مرغ سوخاری",
//     mainPrice: "150,000",
//     discountPrice: null,
//     percentOfDiscount: null,
//     isFavorite: false,
//     rate: 4,
//     numOfScore: 48,
//     imgUrl: of1,
//   },
// ];

const comments = [
  {
    name: "حسین مرادی",
    message:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم",
    rate: 4,
    date: "۰۱/۰۵/۱۴۰۲",
    avatar: hosein,
  },
  {
    name: "حسین مرادی",
    message:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم",
    rate: 3,
    date: "۰۱/۰۵/۱۴۰۲",
    avatar: hosein,
  },
  {
    name: "حسین مرادی",
    message:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم",
    rate: 5,
    date: "۰۱/۰۵/۱۴۰۲",
    avatar: hosein,
  },
  {
    name: "حسین مرادی",
    message:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم",
    rate: 5,
    date: "۰۱/۰۵/۱۴۰۲",
    avatar: hosein,
  },
  {
    name: "حسین مرادی",
    message:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم",
    rate: 5,
    date: "۰۱/۰۵/۱۴۰۲",
    avatar: hosein,
  },
  {
    name: "حسین مرادی",
    message:
      "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم",
    rate: 5,
    date: "۰۱/۰۵/۱۴۰۲",
    avatar: hosein,
  },
];

const cartProccessNavigator = [
  {
    id: 1,
    title: "سبد خرید",
    // icon: SvgShoppingCart,
  },
  {
    id: 2,
    title: "تکمیل اطلاعات",
    // icon: SvgShoppingCart,
  },
  {
    id: 3,
    title: "پرداخت",
    // icon: SvgShoppingCart,
  },
];

export {
  agencyData,
  foodCategory,
  // branchFood,
  comments,
  menuSubLink,
  cartProccessNavigator,
};
