import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Luxury Wooden Sofa",
    image: require("../../assets/images/products/Sofas.png"),
    price: 24999,
    originalPrice: 31999,
    rating: 4.8,
    reviews: 125,
    discount: 20,
    description:
      "Premium wooden sofa crafted with high-quality teak wood and soft cushions for maximum comfort.",
  },

  {
    id: "2",
    name: "Modern Chair",
    image: require("../../assets/images/products/Chairs.png"),
    price: 5999,
    originalPrice: 7499,
    rating: 4.7,
    reviews: 75,
    discount: 15,
    description:
      "Modern chair designed for comfort and style, perfect for any living space.",
  },

  {
    id: "3",
    name: "Elegant Dining Table",
    image: require("../../assets/images/products/Dining_Sets.png"),
    price: 15999,
    originalPrice: 19999,
    rating: 4.7,
    reviews: 90,
    discount: 20,
    description:
      "Elegant dining table crafted with premium materials for a sophisticated dining experience.", 
  },

  {
    id: "4",
    name: "Cozy Bed Frame",
    image: require("../../assets/images/products/Beds.png"),
    price: 19999,
    originalPrice: 24999,
    rating: 4.9,
    reviews: 150,
    discount: 20,
    description:
      "Cozy bed frame designed for comfort and style, perfect for any bedroom.", 
  },

  {
    id: "5",
    name: "Kids Study Table",
    image: require("../../assets/images/products/Study_Table.png"),
    price: 4999,
    originalPrice: 6999,
    rating: 4.6,
    reviews: 60,
    discount: 30,
    description:
      "Kids study table designed for learning and play, perfect for any child's room.",
  },


];