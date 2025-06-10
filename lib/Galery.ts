// Definisikan tipe item portfolio
export type PortfolioCategory = 'app' | 'product' | 'branding' | 'books';

export interface PortfolioItem {
  category: PortfolioCategory;
  title: string;
  slug?: string;
  url?: any;
  images: string[];
  client?: string;
  date?: string;
  description?: string;
}

const slugify = (text: string) => 
    text
      .toString()
      .normalize("NFKD") // untuk karakter non-ASCII
      .replace(/[\u0300-\u036f]/g, "") // hapus diakritik
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");

// Data portfolio
const rawItems: Omit<PortfolioItem, "slug">[] = [
    {
        category: "app",
        title: "App 1",
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
        url: "https://klinin.kovatekno.my.id",
        images: [
          "/assets/img/portfolio/books-1.jpg",
          "/assets/img/portfolio/books-2.jpg",
          "/assets/img/portfolio/books-3.jpg",
        ]
      },
]
export const portfolioItems: PortfolioItem[] = rawItems.map((item) => ({
    ...item,
    slug: slugify(item.title),
  }));
