'use client';

import React from 'react';
import Link from 'next/link';
import ProductBadge from './ProductBadge';
import { ProductData } from '@/data/products';

interface SingleImageCardProps {
  product: ProductData;
}

const SingleImageCard: React.FC<SingleImageCardProps> = ({ product }) => {
  return (
    <div className="carousel-product-item">
      <div className="product-card">
        <Link href={`/products/${product.slug}`} className="product-card-link">
          <div className="product-card-image">
            <ProductBadge product={product} />
            <img 
              src={product.mainImage} 
              alt={product.title}
            />
          </div>
          <div className="product-card-content">
            <h3 className="product-card-title">{product.title}</h3>
            <p className="product-card-description">
              {product.homeSummary}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleImageCard;
