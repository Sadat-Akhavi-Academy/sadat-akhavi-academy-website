import { Metadata } from 'next'
import ProductPage from '@/components/ProductPage'
import { getProductBySlug, getAllProductSlugs } from '@/data/products'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static paths for all products at build time
export async function generateStaticParams() {
  const slugs = getAllProductSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata dynamically based on product data
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found | Sadat Akhavi Academy',
    }
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.metaKeywords,
    openGraph: {
      type: 'website',
      url: product.ogUrl,
      title: product.metaTitle,
      description: product.metaDescription,
      images: product.ogImage,
      siteName: 'Sadat Akhavi Academy',
    },
  }
}

// Main page component - renders product using data
export default function ProductPageRoute({ params }: PageProps) {
  const product = getProductBySlug(params.slug)

  // Show 404 if product not found
  if (!product) {
    notFound()
  }

  return (
    <ProductPage
      title={product.title}
      slug={product.slug}
      productCode={product.productCode}
      mainImage={product.mainImage}
      description={product.description}
      introVideoId={product.introVideoId}
      assemblyVideoId={product.assemblyVideoId}
      guideDocUrl={product.guideDocUrl}
      printingDocUrl={product.printingDocUrl}
      troubleshootingVideoId={product.troubleshootingVideoId}
      deepDiveVideoId={product.deepDiveVideoId}
      softwareUrl={product.softwareUrl}
      gallery={product.gallery}
      skills={product.skills}
      relatedProductCodes={product.relatedKits?.map(kit => kit.productCode)}
      metadata={{
        ogImage: product.ogImage,
        keywords: product.metaKeywords,
      }}
    />
  )
}
