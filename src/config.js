import search from "assets/NavIcons/search.png";
import offer from "assets/NavIcons/offer.png";
import help from "assets/NavIcons/help.png";
import user from "assets/NavIcons/user.png";

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
  { _id: "delivery_time", label: "Delivery Time", className: "delivery_time" },
  { _id: "rating", label: "Rating", className: "rating" },
  { _id: "costlth", label: "Cost:Low To High", className: "costlth" },
  { _id: "costhtl", label: "Cost:High To Low", className: "costhtl" },
];
