import betty from "../assets/Latest-offering/betty.webp";
import jughead from "../assets/Latest-offering/jughead.jpg";
import veronica from "../assets/Latest-offering/veronica.webp";
import logo1 from "../assets/nestle.png";
import logo2 from "../assets/cadbury.png";
import logo3 from "../assets/amazon.png";
import logo4 from "../assets/subway.png";

const NavLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "orders",
    title: "Orders",
  },
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "myAccount",
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

export { NavLinks, Category, FooterDropDown, offeringCart, trustedCompanyLogo };
