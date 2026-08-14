import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Luxury Wooden Sofa",
    image: require("../../assets/images/products/dressers.jpg"),
    price: 24999,
    originalPrice: 31999,
    rating: 4.8,
    reviews: 125,
    discount: 20,
    description:
      "Premium wooden sofa crafted with high-quality teak wood and soft cushions for maximum comfort.",
    category: "Sofa",
  },

  {
    id: "2",
    name: "Modern Chair",
    image: require("../../assets/images/products/chairs.jpg"),
    price: 5999,
    originalPrice: 7499,
    rating: 4.7,
    reviews: 75,
    discount: 15,
    description:
      "Modern chair designed for comfort and style, perfect for any living space.",
    category: "Sofa", 
  },

  {
    id: "3",
    name: "Elegant Dining Table",
    image: require("../../assets/images/products/diningtable.jpg"),
    price: 15999,
    originalPrice: 19999,
    rating: 4.7,
    reviews: 90,
    discount: 20,
    description:
      "Elegant dining table crafted with premium materials for a sophisticated dining experience.", 
    category: "Dining",
  },

  {
    id: "4",
    name: "Cozy Bed Frame",
    image: require("../../assets/images/products/beds.jpg"),
    price: 19999,
    originalPrice: 24999,
    rating: 4.9,
    reviews: 150,
    discount: 20,
    description:
      "Cozy bed frame designed for comfort and style, perfect for any bedroom.", 
    category: "Bed",
  },

  {
    id: "5",
    name: "Kids Study Table",
    image: require("../../assets/images/products/studytable.jpg"),
    price: 4999,
    originalPrice: 6999,
    rating: 4.6,
    reviews: 60,
    discount: 30,
    category: "Table",
    description:
      "Kids study table designed for learning and play, perfect for any child's room.",
  },

  {
    id: "6",
    name: "Stylish Wardrobe",
    image: require("../../assets/images/products/wardrobe.jpg"),
    price: 17999,
    originalPrice: 21999,
    rating: 4.8,
    reviews: 110,
    discount: 20,
    category: "Wardrobe",
    description:
      "Stylish wardrobe crafted with high-quality materials for a modern and functional storage solution.",

  }


];