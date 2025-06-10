import { notFound } from 'next/navigation';
import { portfolioItems } from '@/lib/Galery';
import PortfolioDetail from '@/app/components/Galery/GaleryDetail';


export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export default function PortfolioPage({params}:any){
  const portfolio = portfolioItems.find((item) => item.slug === params.slug);

  if (!portfolio) return notFound();

  return (
    <PortfolioDetail
      title={portfolio.title}
      category={portfolio.category}
      client="Unknown Client"
      date="Unknown Date"
      url={portfolio.url}
      description=""
      images={portfolio.images}
    />
  );
}
