// Definisikan tipe item portfolio
export type Category = 'landing page' | 'portfolio' | 'admin panel';
export type Type = 'basic' | 'standart' | 'premium';
export const allCategories: Category[] = ['landing page', 'portfolio', 'admin panel'];
export const allType: Type[] = ['basic', 'standart', 'premium'];
export interface PortfolioItem {
  category: Category;
  type:Type;
  title: string;
  tagline?:string;
  slug?: any;
  url?: any;
  images: string[];
  page?:string;
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
      category: "landing page",
      type: "premium",
      title: "Ace",
      tagline:"Web cepat dan tepat",
      url: "https://ace.kovatekno.my.id",
      images: [
        "/images/galery/ace-1.png",
        "/images/galery/ace-2.png",
      ],
      page: "5",
      description: "Ace landing page"
    },
    {
      category: "landing page",
      type: "basic",
      title: "Chevory",
      tagline:"Web cepat dan tepat",
      url: "https://chevory.kovatekno.my.id",
      images: [
        "/images/galery/chevory-1.png",
        "/images/galery/chevory-2.png",
      ],
      page: "1",
      description: "Chevory landing page"
    },
    {
      category: "landing page",
      type: "basic",
      title: "Klinin",
      tagline:"Web cepat dan tepat",
      url: "https://klinin.kovatekno.my.id",
      images: [
        "/images/galery/klinin-1.png",
        "/images/galery/klinin-2.png",
      ],
      page: "1",
      description: "Klinin landing page"
    },
    {
      category: "landing page",
      type: "basic",
      title: "Landing",
      tagline:"Web cepat dan tepat",
      url: "https://landing.kovatekno.my.id",
      images: [
        "/images/galery/landing-1.png",
        "/images/galery/landing-2.png",
      ],
      page: "5",
      description: "Ace landing page"
    },
    {
      category: "landing page",
      type: "basic",
      title: "e-Learning",
      tagline:"Web cepat dan tepat",
      url: "https://e-learning.kovatekno.my.id",
      images: [
        "/images/galery/learning-1.png",
        "/images/galery/learning-2.png",
      ],
      page: "1",
      description: "Ace landing page"
    },
]
export const portfolioItems: PortfolioItem[] = rawItems.map((item) => ({
    ...item,
    slug: slugify(item.title),
  }));
