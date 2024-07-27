export interface Products {
  results: string;
  metadata: Metadata;
  data: Product[];
}

export interface Product {
  sold: number;
  images: string[];
  subcategory: SubCategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: {
    _id: string;
    name: string;
    slug: string;
    category: string;
  };
  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Categories {
  results: string;
  metadata: CatMetadata;
  data: Category[];
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface CatMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}
