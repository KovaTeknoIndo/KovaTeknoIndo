// Definisikan tipe item portfolio
export type PortfolioCategory = 'app' | 'product' | 'branding' | 'books';

export interface PortfolioItem {
  category: PortfolioCategory;
  title: string;
  // slug: string;
  url: string;
  images: string[];
}

// Data portfolio
export const portfolioItems: PortfolioItem[] = [
  {
    category: "app",
    title: "App 1",
    // slug: "app-1",
    url: "https://klinin.kovatekno.my.id",
    images: [
      "/assets/img/portfolio/app-1.jpg",
      "/assets/img/portfolio/app-2.jpg",
      "/assets/img/portfolio/app-3.jpg",
    ]
  },
  {
    category: "product",
    title: "Product 1",
    // slug: "product-1",
    url: "https://klinin.kovatekno.my.id",
    images: [
      "/assets/img/portfolio/product-1.jpg",
      "/assets/img/portfolio/product-2.jpg",
      "/assets/img/portfolio/product-3.jpg",
    ]
  },
  {
    category: "branding",
    title: "Branding 1",
    // slug: "branding-1",
    url: "https://klinin.kovatekno.my.id",
    images: [
      "/assets/img/portfolio/branding-1.jpg",
      "/assets/img/portfolio/branding-2.jpg",
      "/assets/img/portfolio/branding-3.jpg",
    ]
  },
  {
    category: "books",
    title: "Books 1",
    // slug: "books-1",
    url: "https://klinin.kovatekno.my.id",
    images: [
      "/assets/img/portfolio/books-1.jpg",
      "/assets/img/portfolio/books-2.jpg",
      "/assets/img/portfolio/books-3.jpg",
    ]
  },
];
