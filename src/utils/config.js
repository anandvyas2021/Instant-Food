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

import Orders from "assets/AccountsIcons/orders.png";
import Brand from "assets/AccountsIcons/brand.png";
import Favourites from "assets/AccountsIcons/favourites.png";
import Payments from "assets/AccountsIcons/payments.png";
import Addresses from "assets/AccountsIcons/addresses.png";
import Settings from "assets/AccountsIcons/settings.png";

import paytm from "assets/CouponIcons/paytm.webp";
import mobikwik from "assets/CouponIcons/mobikwik.webp";
import freecharge from "assets/CouponIcons/freecharge.webp";
import ubi from "assets/CouponIcons/ubi.webp";
import fbc from "assets/CouponIcons/fbc.webp";

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
    { _id: "relevance", label: "Relevance", slug: "relevance" },
    {
        _id: "delivery_time",
        label: "Delivery Time",
        slug: "delivery_time",
    },
    { _id: "rating", label: "Rating", slug: "rating" },
    { _id: "costlth", label: "Cost:Low To High", slug: "costlth" },
    { _id: "costhtl", label: "Cost:High To Low", slug: "costhtl" },
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

export const couponsData = [
    {
        _id: 0,
        image: paytm,
        title: "Get assured cashback between ₹25 to ₹100 using Paytm wallet",
        desc: "Assured cashback between ₹25 to ₹100 on Paytm wallet transactions above ₹399",
        code: "PAYTMSAVE",
    },
    {
        _id: 1,
        image: mobikwik,
        title: "Get up to ₹100 cashback using MobiKwik wallet",
        desc: "Cashback up to ₹100 on MobiKwik transactions above ₹249",
        code: "MBK100",
    },
    {
        _id: 2,
        image: freecharge,
        title: "Get flat ₹75 cashback using Freecharge",
        desc: "Applicable on Freecharge Pay Later or Wallet transactions above ₹249",
        code: "FCH75",
    },
    {
        _id: 3,
        image: fbc,
        title: "Get 20% discount using Federal Bank Credit Cards",
        desc: "Maximum discount up to ₹120 on orders above ₹250",
        code: "FEDERALCC",
    },
    {
        _id: 4,
        image: ubi,
        title: "Get 25% discount using Union Bank of India Cards",
        desc: "Maximum discount up to ₹100 on orders above ₹199",
        code: "UBI100",
    },
];

export const supportMenu = [
    {
        _id: "previous_orders",
        label: "Help with orders",
        slug: "previous-orders",
    },
    { _id: "general", label: "General issues", slug: "issues/general" },
    {
        _id: "partner_onboarding",
        label: "Partner Onboarding",
        slug: "issues/partner-onboarding",
    },
    { _id: "legal", label: "Legal, Terms & Conditions", slug: "issues/legal" },
    {
        _id: "faq",
        label: "FAQs",
        slug: "faq",
    },
    {
        _id: "instand_faq",
        label: "Instant One FAQs",
        slug: "issues/instant-one-faq",
    },
    {
        _id: "instand_money",
        label: "Instant Money FAQs",
        slug: "issues/instant-money-faq",
    },
    {
        _id: "instand_dineout",
        label: "Instant Dineout FAQs",
        slug: "issues/dineout",
    },
];

export const profileMenu = [
    { _id: "orders", icon: Orders, label: "Orders", slug: "orders" },
    { _id: "super", icon: Brand, label: "Super", slug: "super" },
    {
        _id: "favourites",
        icon: Favourites,
        label: "Favourites",
        slug: "favourites",
    },
    { _id: "payments", icon: Payments, label: "Payments", slug: "payments" },
    {
        _id: "manage_addresses",
        icon: Addresses,
        label: "Addresses",
        slug: "manage_addresses",
    },
    { _id: "settings", icon: Settings, label: "Settings", slug: "settings" },
];

export const offersTabpanes = [
    { _id: 0, label: "Restaurant offers", slug: "restaurant" },
    { _id: 1, label: "Payment offers/Coupons", slug: "payment" },
];
