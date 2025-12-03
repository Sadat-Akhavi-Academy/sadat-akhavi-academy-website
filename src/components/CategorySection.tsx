'use client';

import React, { useRef, useState, useEffect } from 'react';
import ProductBadge from './ProductBadge';
import SingleImageCard from './SingleImageCard';
import DualImageCard from './DualImageCard';
import { ProductData } from '@/data/products';

interface CategorySectionProps {
  categoryName: string;
  products: ProductData[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categoryName, products }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        carousel.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      const newScrollLeft = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="category-section">
      <div className="category-header">
        <h2 className="category-title">{categoryName}</h2>
        <button 
          className="expand-toggle-button"
          onClick={toggleExpand}
          aria-label={isExpanded ? "Show less" : "Show more"}
        >
          <i className={`fa ${isExpanded ? 'fa-compress' : 'fa-expand'}`}></i>
          <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
        </button>
      </div>
      
      <div className="products-carousel-container">
        <button 
          className={`carousel-nav-button left ${!canScrollLeft ? 'disabled' : ''}`}
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          &#10094;
        </button>
        
        <div className={`products-carousel ${isExpanded ? 'expanded' : ''}`} ref={carouselRef}>
          {products.map((product) => {
            const hasDualImages = product.useDualImageCard && product.secondaryImage;
            
            return hasDualImages ? (
              <DualImageCard key={product.productCode} product={product} />
            ) : (
              <SingleImageCard key={product.productCode} product={product} />
            );
          })}
        </div>
        
        <button 
          className={`carousel-nav-button right ${!canScrollRight ? 'disabled' : ''}`}
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
