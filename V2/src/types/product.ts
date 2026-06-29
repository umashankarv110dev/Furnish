export interface Product {
  category: string;
  id: string;
  name: string;
  image: any;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
  isFavorite?: boolean;
  description: string;
}