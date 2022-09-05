import search from "assets/NavIcons/search.png";
import offer from "assets/NavIcons/offer.png";
import help from "assets/NavIcons/help.png";
import user from "assets/NavIcons/user.png";

import home from "assets/AddressDrawer/home.png";
import work from "assets/AddressDrawer/work.png";

import slider1 from "assets/CarouselSliders/slider1.webp";
import slider2 from "assets/CarouselSliders/slider2.webp";
import slider3 from "assets/CarouselSliders/slider3.webp";
import slider4 from "assets/CarouselSliders/slider4.webp";
import slider5 from "assets/CarouselSliders/slider5.webp";
import slider6 from "assets/CarouselSliders/slider6.webp";
import slider7 from "assets/CarouselSliders/slider7.webp";

export const navList = [
  { _id: "search", label: "Search", icon: search, link: "/search" },
  { _id: "offers", label: "Offers", icon: offer, link: "/offers" },
  { _id: "help", label: "Help", icon: help, link: "/support" },
  { _id: "my_account", label: "Account", icon: user, link: "/my-account" },
];

export const savedAddresses = [
  {
    _id: 0,
    icon: home,
    type: "Home",
    address:
      "Room No. 302, Sunrise PG for gents, Bengaluru, Karnataka 560035, India",
  },
  {
    _id: 1,
    icon: work,
    type: "Work",
    address:
      "401,4th floor, 4th floor, SAKET CALLIPOLIS, Marathahalli - Sarjapur Rd, near Wipro, Rainbow Drive, Bengaluru, Karnataka 560035, India",
  },
];

export const carouselList = [
  { _id: "slider1", image: slider1, slug: "slider1" },
  { _id: "slider2", image: slider2, slug: "slider2" },
  { _id: "slider3", image: slider3, slug: "slider3" },
  { _id: "slider4", image: slider4, slug: "slider4" },
  { _id: "slider5", image: slider5, slug: "slider5" },
  { _id: "slider6", image: slider6, slug: "slider6" },
  { _id: "slider7", image: slider7, slug: "slider7" },
];

export const filterOptions = [
  { _id: "relevance", label: "Relevance", className: "relevance" },
  {
    _id: "delivery_time",
    label: "Delivery Time",
    className: "delivery_time",
  },
  { _id: "rating", label: "Rating", className: "rating" },
  { _id: "costlth", label: "Cost:Low To High", className: "costlth" },
  { _id: "costhtl", label: "Cost:High To Low", className: "costhtl" },
];

export const restaurantData = [
  {
    _id: 1,
    name: "A",
    ribbon: "Promoted",
    ribbon_styles: { backgroundColor: "#3a3c41" },
    image: slider1,
    tags: ["Pizzas", "Pastas", "Fast Food", "Italian", "Desserts"],
    rating: 3.5,
    delivery_time: "53 mins",
    cost: "₹400 FOR TWO",
    offer_available: true,
    offer: "60% off",
    coupon_code: "TRYNEW",
  },
  {
    _id: 2,
    name: "B",
    ribbon: "Exclusive",
    ribbon_styles: { backgroundColor: "#fa4a5b" },
    image: slider2,
    tags: ["Pizzas", "Fast Food", "Italian", "Desserts"],
    rating: 4.5,
    delivery_time: "43 mins",
    cost: "₹450 FOR TWO",
    offer_available: true,
    offer: "60% off",
    coupon_code: "TRYNEW",
  },
  {
    _id: 3,
    name: "C",
    image: slider3,
    tags: ["Italian"],
    rating: 3.8,
    delivery_time: "45 mins",
    cost: "₹250 FOR TWO",
    offer_available: true,
    offer: "60% off",
    coupon_code: "TRYNEW",
  },
  {
    _id: 4,
    name: "D",
    ribbon: "Promoted",
    ribbon_styles: { backgroundColor: "#3a3c41" },
    image: slider4,
    tags: ["Pizzas", "Pastas", "Fast Food", "Italian", "Desserts"],
    rating: 3.5,
    delivery_time: "53 mins",
    cost: "₹150 FOR TWO",
    offer_available: true,
    offer: "60% off",
    coupon_code: "TRYNEW",
  },
  {
    _id: 5,
    name: "E  ",
    image: slider5,
    tags: ["Pizzas", "Pastas", "Fast Food", "Desserts"],
    rating: 3.2,
    delivery_time: "36 mins",
    cost: "₹300 FOR TWO",
    offer_available: false,
  },
];
