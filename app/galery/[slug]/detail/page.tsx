import { notFound } from 'next/navigation';
import PortfolioDetail from '@/app/components/Galery/GaleryDetail';
import {PortfolioCategory,portfolioItems} from "@/config/Galery"

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params untuk export static (SSG)
export async function generateStaticParams() {
  return portfolioItems.map(item => ({
    slug: item.title.toLowerCase().replace(/\s+/g, '-'), // contoh slugify simple
  }));
}

export default function PortfolioPage({ params }: PageProps) {
  const { slug } = params;

  // Cari data berdasarkan slug (sesuaikan slugify jika perlu)
  const portfolio = portfolioItems.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!portfolio) {
    notFound();
  }

  return (
    <PortfolioDetail
      title={portfolio.title}
      category={portfolio.category}
      client={portfolio.client ?? 'Unknown Client'}
      date={portfolio.date ?? 'Unknown Date'}
      url={portfolio.url ?? '#'}
      description={portfolio.description ?? ''}
      images={portfolio.images}
    />
  );
}
