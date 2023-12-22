import betty from "../assets/Latest-offering/betty.webp";
import jughead from "../assets/Latest-offering/jughead.jpg";
import veronica from "../assets/Latest-offering/veronica.webp";
import logo1 from "../assets/nestle.png";
import logo2 from "../assets/cadbury.png";
import logo3 from "../assets/amazon.png";
import logo4 from "../assets/subway.png";
import { IoStarOutline, IoStarHalfOutline, IoStarSharp } from "react-icons/io5";
import man2 from "../assets/Customers/man2.jpeg";
import man from "../assets/Customers/man.jpeg";
import women from "../assets/Customers/woman.jpeg";
import order from "../assets/orders/orderDone.png";
import truck from "../assets/orders/orderTracking/truck.png";
import done from "../assets/orders/orderTracking/tick.png";
import order2 from "../assets/orders/orderDone2.png";

const NavLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/orders",
    title: "Orders",
  },
  {
    id: "/menu",
    title: "Menu",
  },
  {
    id: "/myAccount",
    title: "My Account",
  },
];
const Category = [
  { class: "bg-bestseller", title: "Bestseller" },
  { class: "bg-drinks", title: "Drinks" },
  { class: "bg-food", title: "Food" },
  { class: "bg-cofeeAtHome", title: "Coffee At Home" },
];
const FooterDropDown = [
  {
    id: "footer-down-0",
    DropDownId: "drop-down-0",
    mainTitle: "About us",
    dropDownLinks: [{ Link: "Feedback" }],
  },
  {
    id: "footer-down-1",
    DropDownId: "drop-down-1",
    mainTitle: "Explore More",
    dropDownLinks: [
      { Link: "Locate Us" },
      { Link: "Feedback" },
      { Link: "Terms & Conditions" },
      { Link: "Delete Account" },
    ],
  },
  {
    id: "footer-down-2",
    DropDownId: "drop-down-2",
    mainTitle: "Feedback",
    dropDownLinks: [{ Link: "Feedback" }],
  },
];

const offeringCart = [
  {
    productImg: jughead,
    productName: `Jughead's Iced Gingerbread Latte`,
    productPrice: "₹ 456.75",
    ProductKcal: "259Kcal",
  },
  {
    productImg: betty,
    productName: `Betty's Chestnut Mont Blanc Latte`,
    productPrice: "₹ 414.75",
    ProductKcal: "233Kcal",
  },
  {
    productImg: veronica,
    productName: `Veronica's Toffee Nut Crunch Latte`,
    productPrice: "₹ 414.75",
    ProductKcal: "225Kcal",
  },
];
const trustedCompanyLogo = [
  { logo: logo1 },
  { logo: logo2 },
  { logo: logo3 },
  { logo: logo4 },
];
const CustomerDetails = [
  {
    id: 0,
    name: "natalia",
    pfp: women,

    comment: `"Absolutely love the coffee from Cafeína! It's rich, smooth, and delivered promptly. My new favorite spot for a caffeine fix!"`,
  },
  {
    id: 1,

    name: "jhon",
    pfp: man,

    comment: `"Absolutely love the coffee from Cafeína! It's rich, smooth, and delivered promptly. My new favorite spot for a caffeine fix!"`,
  },
  {
    id: 3,

    name: "martis",
    pfp: man2,

    comment: `"Absolutely love the coffee from Cafeína! It's rich, smooth, and delivered promptly. My new favorite spot for a caffeine fix!"`,
  },
];
const stars = [
  <IoStarSharp />,
  <IoStarSharp />,
  <IoStarSharp />,
  <IoStarHalfOutline />,
  <IoStarOutline />,
];
const completedOrders = [
  { oName: "Latte", oImg: order ,date: '29 sep 2023'},
  { oName: "Cappuccino", oImg: order2 , date: '1 dec 2023'},
  { oName: "Cappuccino", oImg: order2 , date: '15 oct 2023'},
];
const orderProcess = [
  { Picon: done  , Process: "Order Reviced" },
  { Picon: done  , Process: "Order Confirmed" },
  { Picon: done  , Process: "Order Packed" },
  { Picon: truck , Process: "On The Way" },
];
export {
  NavLinks,
  Category,
  FooterDropDown,
  offeringCart,
  trustedCompanyLogo,
  CustomerDetails,
  stars,
  completedOrders,
  orderProcess,
};
