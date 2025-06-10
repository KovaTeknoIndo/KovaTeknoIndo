import { notFound } from 'next/navigation';
import PortfolioDetail from '@/app/components/Galery/GaleryDetail';
import { portfolioItems } from '@/config/Galery';

// Fungsi bantu untuk buat slug
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


// ✅ Static parameter generation
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: slugify(item.title),
  }));
}

// ✅ Pastikan function ini tidak async
const PortfolioPage = ({ params }: { params: { slug: string } }) => {

  const slug = params.slug;

  const portfolio = portfolioItems.find(
    (item) => slugify(item.title) === slug
  );

  if (!portfolio) return notFound();

  return (
    <PortfolioDetail
      title={portfolio.title}
      category={portfolio.category}
      client={portfolio.client || 'Unknown Client'}
      date={portfolio.date || 'Unknown Date'}
      url={portfolio.url || '#'}
      description={portfolio.description || ''}
      images={portfolio.images}
    />
  );
}
export default PortfolioPage;