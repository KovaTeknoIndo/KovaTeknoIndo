import { notFound } from 'next/navigation';
import { portfolioItems } from '@/lib/Galery';
import PortfolioDetail from '@/app/components/Galery/GaleryDetail';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default function PortfolioPage({params}:any){
  const portfolio = portfolioItems.find((item) => item.slug == params.slug);
  console.log('portfolioItems:', portfolio);

  if (!portfolio) return notFound();

  return (
    <PortfolioDetail
      category={portfolio.category}
      type={portfolio.type}
      title={portfolio.title}
      url={portfolio.url}
      page={portfolio.page}
      description={portfolio.description}
      images={portfolio.images}
    />
  );
}
