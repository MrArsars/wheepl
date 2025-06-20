'use client'
import React, { useState, useEffect } from 'react';
import { Heart, Eye, Shield, Truck } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  colors: string[];
  colorNames: string[];
  sizes: (number | string)[];
  description: string;
  features: string[];
  materials: string;
  isNew: boolean;
};

const SneakersShop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All', count: 12 },
    { id: 'running', name: 'Running', count: 4 },
    { id: 'lifestyle', name: 'Lifestyle', count: 5 },
    { id: 'basketball', name: 'Basketball', count: 3 }
  ];

  const products = [
    {
      id: 1,
      name: 'AirMax Revolution',
      category: 'running',
      price: 189,
      originalPrice: 229,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=800&fit=crop'
      ],
      rating: 4.8,
      reviews: 324,
      colors: ['#000000', '#666666', '#CCCCCC'],
      colorNames: ['Black', 'Charcoal', 'Light Gray'],
      sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      description: 'The AirMax Revolution combines cutting-edge technology with timeless design. Featuring responsive cushioning and breathable materials, these sneakers are perfect for both performance and style.',
      features: ['Air Max cushioning technology', 'Breathable mesh upper', 'Durable rubber outsole', 'Lightweight design'],
      materials: 'Upper: Synthetic leather and mesh / Midsole: Foam with Air Max unit / Outsole: Rubber',
      isNew: true
    },
    {
      id: 2,
      name: 'Urban Street Pro',
      category: 'lifestyle',
      price: 149,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=800&fit=crop'
      ],
      rating: 4.6,
      reviews: 256,
      colors: ['#333333', '#777777', '#DDDDDD'],
      colorNames: ['Dark Gray', 'Medium Gray', 'Light Gray'],
      sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      description: 'Urban Street Pro sneakers are designed for the modern city dweller. With premium materials and contemporary styling, they seamlessly blend comfort with urban aesthetics.',
      features: ['Premium leather construction', 'Padded collar and tongue', 'Non-slip rubber sole', 'Classic low-top silhouette'],
      materials: 'Upper: Premium leather / Lining: Soft textile / Sole: Vulcanized rubber',
      isNew: false
    },
    {
      id: 3,
      name: 'Court King Elite',
      category: 'basketball',
      price: 199,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=800&fit=crop'
      ],
      rating: 4.9,
      reviews: 189,
      colors: ['#111111', '#555555', '#AAAAAA'],
      colorNames: ['Black', 'Dark Gray', 'Silver'],
      sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
      description: 'Engineered for peak performance on the court, the Court King Elite delivers exceptional support and responsiveness. Professional-grade construction meets modern style.',
      features: ['High-top ankle support', 'Zoom Air cushioning', 'Traction pattern outsole', 'Reinforced toe cap'],
      materials: 'Upper: Synthetic leather and textile / Midsole: Phylon with Zoom Air / Outsole: Solid rubber',
      isNew: true
    },
    {
      id: 4,
      name: 'Speed Demon X1',
      category: 'running',
      price: 169,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop'
      ],
      rating: 4.7,
      reviews: 412,
      colors: ['#222222', '#888888', '#EEEEEE'],
      colorNames: ['Black', 'Gray', 'White'],
      sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      description: 'Built for speed and endurance, the Speed Demon X1 features advanced running technology. Lightweight construction with maximum energy return for your best performance.',
      features: ['Lightweight foam midsole', 'Engineered mesh upper', 'Carbon fiber plate', 'Responsive cushioning'],
      materials: 'Upper: Engineered mesh / Midsole: EVA foam with carbon plate / Outsole: Blown rubber',
      isNew: false
    },
    {
      id: 5,
      name: 'Comfort Cloud',
      category: 'lifestyle',
      price: 129,
      originalPrice: 159,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=800&fit=crop'
      ],
      rating: 4.5,
      reviews: 298,
      colors: ['#444444', '#999999', '#F5F5F5'],
      colorNames: ['Charcoal', 'Gray', 'Off-White'],
      sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
      description: 'Experience all-day comfort with the Comfort Cloud. Designed with premium cushioning and soft materials for the ultimate walking experience.',
      features: ['Memory foam insole', 'Soft knit upper', 'Flexible sole', 'Slip-on design'],
      materials: 'Upper: Knit textile / Insole: Memory foam / Outsole: EVA compound',
      isNew: false
    },
    {
      id: 6,
      name: 'Slam Dunk Pro',
      category: 'basketball',
      price: 219,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop'
      ],
      rating: 4.8,
      reviews: 167,
      colors: ['#000000', '#666666', '#BBBBBB'],
      colorNames: ['Black', 'Charcoal', 'Light Gray'],
      sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
      description: 'The Slam Dunk Pro is engineered for serious basketball players. Premium construction and advanced cushioning technology for maximum court performance.',
      features: ['Premium leather upper', 'Air cushioning system', 'Herringbone traction', 'Ankle support collar'],
      materials: 'Upper: Full-grain leather / Midsole: Air-Sole unit / Outsole: Solid rubber with traction pattern',
      isNew: true
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    setSelectedSize(null);
    setSelectedColor(0);
    setCurrentImageIndex(0);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  };

  if (currentPage === 'product' && selectedProduct) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        {/* Navigation */}
        <nav className={`relative z-50 p-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-3xl font-light tracking-widest">SNKR</span>
            </button>

            <button
              onClick={handleBackToHome}
              className="text-sm tracking-wide text-gray-600 hover:text-black transition-colors duration-300"
            >
              ← BACK TO COLLECTION
            </button>
          </div>
        </nav>

        {/* Product Details */}
        <div className={`max-w-7xl mx-auto px-8 py-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={selectedProduct.images[currentImageIndex]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {selectedProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square bg-gray-50 overflow-hidden border-2 transition-all duration-300 ${currentImageIndex === index ? 'border-black' : 'border-transparent hover:border-gray-300'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedProduct.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {selectedProduct.isNew && (
                <div className="inline-block bg-black text-white text-xs font-light px-3 py-1 tracking-wide">
                  NEW ARRIVAL
                </div>
              )}

              <div>
                <h1 className="text-4xl font-light tracking-wide mb-4">{selectedProduct.name}</h1>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-light">${selectedProduct.price}</span>
                  {selectedProduct.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">${selectedProduct.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4 pb-6 border-b border-gray-100">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(selectedProduct.rating)
                        ? 'bg-black'
                        : 'bg-gray-200'
                        }`}
                    ></div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">({selectedProduct.reviews} reviews)</span>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Color Selection */}
              <div className="space-y-4">
                <h3 className="text-sm font-light tracking-widest text-gray-900">COLOR</h3>
                <div className="flex space-x-4">
                  {selectedProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`relative w-8 h-8 rounded-full border-2 transition-all duration-300 ${selectedColor === index ? 'border-black scale-110' : 'border-gray-200 hover:border-gray-400'
                        }`}
                      style={{ backgroundColor: color }}
                    >
                      {selectedColor === index && (
                        <div className="absolute inset-0 rounded-full border-2 border-white" style={{ backgroundColor: color }}></div>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{selectedProduct.colorNames[selectedColor]}</p>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <h3 className="text-sm font-light tracking-widest text-gray-900">SIZE</h3>
                <div className="grid grid-cols-6 gap-3">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm font-light border transition-all duration-300 ${selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-900 border-gray-200 hover:border-gray-400'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="pt-8">
                <button
                  disabled={!selectedSize}
                  className={`w-full py-4 text-sm font-light tracking-widest transition-all duration-300 ${selectedSize
                    ? 'bg-black text-white hover:bg-gray-900'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  {selectedSize ? 'ADD TO CART' : 'SELECT SIZE'}
                </button>
              </div>

              {/* Product Features */}
              <div className="pt-8 space-y-6">
                <div>
                  <h3 className="text-sm font-light tracking-widest text-gray-900 mb-4">FEATURES</h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-light tracking-widest text-gray-900 mb-4">MATERIALS</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedProduct.materials}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-50 p-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-3xl font-light tracking-widest">SNKR</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-sm tracking-wide hover:text-black transition-colors duration-300 text-gray-600">HOME</a>
            <a href="#" className="text-sm tracking-wide hover:text-black transition-colors duration-300 text-gray-600">COLLECTION</a>
            <a href="#" className="text-sm tracking-wide hover:text-black transition-colors duration-300 text-gray-600">ABOUT</a>
            <a href="#" className="text-sm tracking-wide hover:text-black transition-colors duration-300 text-gray-600">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 px-8 py-32 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-thin mb-8 leading-none tracking-tight">
            MINIMAL
            <br />
            <span className="font-light">ELEGANCE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-16 max-w-2xl mx-auto font-light">
            Curated selection of premium sneakers designed for the modern minimalist
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group relative px-12 py-4 bg-black text-white font-light text-sm tracking-widest overflow-hidden transition-all duration-500 hover:bg-gray-900">
              EXPLORE COLLECTION
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>

            <div className="flex items-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Authentic Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Free Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className={`relative z-10 px-8 py-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="flex border-b border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-4 text-sm tracking-wide font-light transition-all duration-300 relative ${selectedCategory === category.id
                    ? 'text-black'
                    : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs">({category.count})</span>
                  {selectedCategory === category.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`relative z-10 px-8 py-16 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => handleProductClick(product)}
              >
                <div className="relative mb-6 overflow-hidden">
                  {product.isNew && (
                    <div className="absolute top-6 left-6 z-20 bg-black text-white text-xs font-light px-3 py-1 tracking-wide">
                      NEW
                    </div>
                  )}

                  <div className="absolute top-6 right-6 z-20 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white shadow-lg hover:bg-gray-50 transition-colors duration-300">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-white shadow-lg hover:bg-gray-50 transition-colors duration-300">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <div className="aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${hoveredProduct === product.id ? 'scale-105' : 'scale-100'
                        }`}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    {product.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-3 h-3 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>

                  <h3 className="text-lg font-light tracking-wide group-hover:text-gray-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 ${i < Math.floor(product.rating)
                            ? 'bg-black'
                            : 'bg-gray-200'
                            }`}
                        ></div>
                      ))}
                    </div>
                    <span>({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl font-light">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    <button
                      onClick={() => handleProductClick(product)}
                      className="text-xs tracking-widest text-gray-400 hover:text-black transition-colors duration-300 border-b border-transparent hover:border-black"
                    >
                      VIEW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`relative z-10 px-8 py-24 bg-gray-50 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mx-auto mb-6 group-hover:border-black transition-colors duration-300">
                <Shield className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-light tracking-widest mb-3 text-gray-900">AUTHENTIC</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Every piece verified for quality and authenticity</p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mx-auto mb-6 group-hover:border-black transition-colors duration-300">
                <Truck className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-light tracking-widest mb-3 text-gray-900">DELIVERY</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Complimentary shipping on orders above $100</p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mx-auto mb-6 group-hover:border-black transition-colors duration-300">
                <div className="w-5 h-5 border border-gray-600 group-hover:border-black transition-colors duration-300"></div>
              </div>
              <h3 className="text-sm font-light tracking-widest mb-3 text-gray-900">CURATED</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Handpicked selection of premium footwear</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 px-8 py-16 border-t border-gray-100 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-light tracking-widest text-gray-900">SNKR</span>
          </div>
          <p className="text-sm text-gray-400 mb-8 font-light">
            Premium footwear for the discerning individual
          </p>
          <div className="flex justify-center space-x-8 text-xs text-gray-400 tracking-wide">
            <a href="#" className="hover:text-gray-600 transition-colors duration-300">PRIVACY</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-300">TERMS</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-300">SUPPORT</a>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default SneakersShop;