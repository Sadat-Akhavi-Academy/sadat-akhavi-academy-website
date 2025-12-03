'use client';

import React from 'react';
import Link from 'next/link';
import ProductBadge from './ProductBadge';
import { ProductData } from '@/data/products';

interface DualImageCardProps {
  product: ProductData;
}

const DualImageCard: React.FC<DualImageCardProps> = ({ product }) => {
  return (
    <div className="carousel-product-item">
      <div className="product-card">
        <Link href={`/products/${product.slug}`} className="product-card-link">
          <div className="product-card-image dual-image">
            <ProductBadge product={product} />
            <div className="dual-image-wrapper">
              <div className="image-left">
                <img 
                  src={product.mainImage} 
                  alt={`${product.title} - Left`}
                />
              </div>
              <div className="image-right">
                <img 
                  src={product.secondaryImage} 
                  alt={`${product.title} - Right`}
                />
              </div>
            </div>
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

export default DualImageCard;
