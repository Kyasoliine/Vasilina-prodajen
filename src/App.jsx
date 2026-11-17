import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Sparkles,
  Heart,
  Star,
  Plus,
  Minus,
  Trash2,
  X,
  CheckCircle2,
  CreditCard,
  Truck,
  ShieldCheck,
  Send
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Нежная пенка для умывания «Розовая роса»',
    category: 'Для лица',
    priceRub: 1290,
    volume: '150 мл',
    badge: 'Хит продаж',
    shortDesc: 'Мягкое очищение без сухости с экстрактом дамасской розы и пантенолом.',
    fullDesc:
      'Воздушная пенка деликатно удаляет макияж и загрязнения, сохраняя естественный защитный барьер кожи. Подходит даже для самой чувствительной кожи.',
    ingredients: 'Aqua, Rosa Damascena Flower Water, Panthenol, Betaine, Coco-Glucoside.',
    color: '#FFE0E7',
    bottleType: 'pump'
  },
  {
    id: 2,
    name: 'Увлажняющий тонер-мист «Шёлковый лепесток»',
    category: 'Для лица',
    priceRub: 1450,
    volume: '120 мл',
    badge: 'Новинка',
    shortDesc: 'Мгновенное увлажнение и сияние с гиалуроновой кислотой и ниацинамидом.',
    fullDesc:
      'Освежающий тонер восстанавливает pH-баланс после умывания, сужает поры и подготавливает кожу к нанесению сыворотки и крема.',
    ingredients: 'Aqua, Niacinamide, Sodium Hyaluronate, Allantoin, Glycerin.',
    color: '#FFD1DC',
    bottleType: 'spray'
  },
  {
    id: 3,
    name: 'Сыворотка с пептидами «Сияние утра»',
    category: 'Сыворотки и маски',
    priceRub: 2190,
    volume: '30 мл',
    badge: 'Выбор визажистов',
    shortDesc: 'Повышает упругость, выравнивает тон и придает эффект «стеклянной кожи».',
    fullDesc:
      'Концентрированная формула с комплексом пептидов и витамином С борется со следами усталости и делает кожу гладкой и бархатистой.',
    ingredients: 'Aqua, Palmitoyl Tripeptide-1, Ascorbyl Glucoside, Squalane.',
    color: '#FFC2D1',
    bottleType: 'dropper'
  },
  {
    id: 4,
    name: 'Ночная маска-желе «Сладкий сон»',
    category: 'Сыворотки и маски',
    priceRub: 1790,
    volume: '50 мл',
    badge: null,
    shortDesc: 'Глубокое восстановление за ночь с центеллой азиатской и церамидами.',
    fullDesc:
      'Лёгкая тающая текстура быстро впитывается, не оставляя следов на подушке. Утром кожа выглядит отдохнувшей, напитанной и свежей.',
    ingredients: 'Aqua, Centella Asiatica Extract, Ceramide NP, Trehalose.',
    color: '#FFE5EC',
    bottleType: 'jar'
  },
  {
    id: 5,
    name: 'Крем-сорбет для лица «Облако нежности»',
    category: 'Для лица',
    priceRub: 1690,
    volume: '50 мл',
    badge: 'Бестселлер',
    shortDesc: 'Невесомый увлажняющий крем со скваланом и маслом ши без жирного блеска.',
    fullDesc:
      'Идеальная база под макияж и ежедневный базовый уход. Устраняет шелушения и дарит комфорт на 24 часа.',
    ingredients: 'Aqua, Squalane, Butyrospermum Parkii Butter, Tocopherol.',
    color: '#FFF0F3',
    bottleType: 'jar'
  },
  {
    id: 6,
    name: 'Бальзам-блеск для губ «Клубничный мусс»',
    category: 'Для тела и губ',
    priceRub: 790,
    volume: '12 мл',
    badge: 'Любимчик',
    shortDesc: 'Питает, заживляет и придает нежный полупрозрачный розовый оттенок.',
    fullDesc:
      'Формула с маслом жожоба, витамином Е и пептидами делает губы мягкими и визуально более объёмными без липкости.',
    ingredients: 'Simmondsia Chinensis Seed Oil, Shea Butter, Tocopheryl Acetate.',
    color: '#FF8FA3',
    bottleType: 'tube'
  },
  {
    id: 7,
    name: 'Шиммер-молочко для тела «Розовый жемчуг»',
    category: 'Для тела и губ',
    priceRub: 1890,
    volume: '200 мл',
    badge: null,
    shortDesc: 'Шелковистая кожа с деликатным жемчужным сиянием и ароматом пиона.',
    fullDesc:
      'Увлажняет кожу тела после душа и оставляет тончайшую вуаль мельчайшего шиммера, который красиво переливается на солнце.',
    ingredients: 'Aqua, Prunus Amygdalus Dulcis Oil, Mica, Panthenol, Parfum.',
    color: '#FFD6E0',
    bottleType: 'pump'
  },
  {
    id: 8,
    name: 'Патчи для глаз «Хрустальный лепесток»',
    category: 'Сыворотки и маски',
    priceRub: 1350,
    volume: '60 шт',
    badge: '-15%',
    shortDesc: 'Снимают отёки и освежают взгляд за 15 минут с кофеином и коллагеном.',
    fullDesc:
      'Гидрогелевые патчи с розовой пудрой плотно прилегают, не сползают и мгновенно разглаживают мелкие морщинки.',
    ingredients: 'Aqua, Glycerin, Hydrolyzed Collagen, Caffeine, Pearl Powder.',
    color: '#FFC2D1',
    bottleType: 'jar'
  }
];

const INITIAL_REVIEWS = [
  {
    id: 1,
    author: 'Алина К.',
    rating: 5,
    product: 'Пенка «Розовая роса»',
    date: '12 ноября 2026',
    text: 'Самая нежная пенка из всех, что я пробовала! Вообще не стягивает кожу после умывания, а запах розы просто волшебный.'
  },
  {
    id: 2,
    author: 'Мария Д.',
    rating: 5,
    product: 'Сыворотка «Сияние утра»',
    date: '8 ноября 2026',
    text: 'Пользуюсь две недели — тон лица стал намного ровнее, появилось здоровое сияние. И баночки невероятно эстетично смотрятся на полочке!'
  },
  {
    id: 3,
    author: 'София Т.',
    rating: 5,
    product: 'Бальзам «Клубничный мусс»',
    date: '3 ноября 2026',
    text: 'Не липкий, очень красиво блестит на губах и реально спасает от обветривания. Заказала сразу второй в сумочку.'
  }
];

function ProductIllustration({ color, type }) {
  return (
    <div
      className="w-full h-48 rounded-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
      style={{ background: `linear-gradient(135deg, #FFFFFF 0%, ${color} 100%)` }}
    >
      <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-white/40 blur-md" />
      <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-pink-200/30 blur-sm" />
      {type === 'dropper' && (
        <svg viewBox="0 0 120 140" className="w-28 h-32 drop-shadow-md animate-float">
          <rect x="49" y="14" width="22" height="16" rx="8" fill="#FB6F92" />
          <rect x="44" y="28" width="32" height="12" rx="3" fill="#FFF" stroke="#FFC2D1" strokeWidth="2" />
          <rect x="36" y="40" width="48" height="82" rx="14" fill="#FFF" stroke="#FFB3C6" strokeWidth="2.5" />
          <rect x="41" y="54" width="38" height="62" rx="10" fill={color} opacity="0.7" />
          <rect x="46" y="68" width="28" height="32" rx="4" fill="#FFF" opacity="0.9" />
          <circle cx="60" cy="84" r="5" fill="#FB6F92" />
        </svg>
      )}
      {type === 'jar' && (
        <svg viewBox="0 0 120 140" className="w-28 h-32 drop-shadow-md animate-float">
          <rect x="28" y="44" width="64" height="16" rx="6" fill="#FF8FA3" />
          <rect x="24" y="58" width="72" height="58" rx="18" fill="#FFF" stroke="#FFB3C6" strokeWidth="2.5" />
          <rect x="30" y="66" width="60" height="44" rx="13" fill={color} opacity="0.65" />
          <rect x="38" y="76" width="44" height="22" rx="6" fill="#FFF" opacity="0.92" />
          <path d="M53 87 Q60 80 67 87 Q60 94 53 87 Z" fill="#FB6F92" />
        </svg>
      )}
      {type === 'pump' && (
        <svg viewBox="0 0 120 140" className="w-28 h-32 drop-shadow-md animate-float">
          <path d="M56 16 H74 L78 22 H56 Z" fill="#FB6F92" />
          <rect x="57" y="22" width="6" height="12" fill="#FFC2D1" />
          <rect x="46" y="34" width="28" height="12" rx="4" fill="#FF8FA3" />
          <rect x="38" y="46" width="44" height="78" rx="16" fill="#FFF" stroke="#FFB3C6" strokeWidth="2.5" />
          <rect x="43" y="58" width="34" height="60" rx="12" fill={color} opacity="0.7" />
          <rect x="47" y="72" width="26" height="30" rx="5" fill="#FFF" opacity="0.92" />
        </svg>
      )}
      {type === 'spray' && (
        <svg viewBox="0 0 120 140" className="w-28 h-32 drop-shadow-md animate-float">
          <rect x="50" y="18" width="20" height="18" rx="5" fill="#FFF" stroke="#FFC2D1" strokeWidth="2" />
          <rect x="46" y="36" width="28" height="10" rx="3" fill="#FB6F92" />
          <rect x="40" y="46" width="40" height="78" rx="14" fill="#FFF" stroke="#FFB3C6" strokeWidth="2.5" />
          <rect x="45" y="56" width="30" height="62" rx="10" fill={color} opacity="0.65" />
          <circle cx="60" cy="85" r="11" fill="#FFF" opacity="0.9" />
          <circle cx="60" cy="85" r="4" fill="#FB6F92" />
        </svg>
      )}
      {type === 'tube' && (
        <svg viewBox="0 0 120 140" className="w-28 h-32 drop-shadow-md animate-float">
          <path d="M40 24 H80 L74 96 H46 Z" fill="#FFF" stroke="#FFB3C6" strokeWidth="2.5" />
          <path d="M45 34 H75 L70 90 H50 Z" fill={color} opacity="0.75" />
          <rect x="48" y="96" width="24" height="22" rx="5" fill="#FB6F92" />
          <circle cx="60" cy="60" r="8" fill="#FFF" opacity="0.9" />
        </svg>
      )}
    </div>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [currency, setCurrency] = useState('RUB');
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('vasilina_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [favorites, setFavorites] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('vasilina_reviews_v1');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  const [newReview, setNewReview] = useState({
    author: '',
    product: PRODUCTS[0].name,
    rating: 5,
    text: ''
  });

  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    payment: 'card'
  });

  useEffect(() => {
    localStorage.setItem('vasilina_cart_v1', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('vasilina_reviews_v1', JSON.stringify(reviews));
  }, [reviews]);

  const formatPrice = (rub) => {
    if (currency === 'KZT') {
      const kzt = Math.round((rub * 5.4) / 10) * 10;
      return `${kzt.toLocaleString('ru-RU')} ₸`;
    }
    return `${rub.toLocaleString('ru-RU')} ₽`;
  };

  const categories = ['Все', 'Для лица', 'Сыворотки и маски', 'Для тела и губ'];

  const filteredProducts =
    selectedCategory === 'Все'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalRub = cart.reduce((sum, item) => sum + item.priceRub * item.qty, 0);
  const freeShippingThreshold = 3500;
  const shippingProgress = Math.min(100, Math.round((totalRub / freeShippingThreshold) * 100));

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
    setCart([]);
    setTimeout(() => {
      setOrderSuccess(false);
      setIsCheckoutOpen(false);
      setIsCartOpen(false);
    }, 3000);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.author.trim() || !newReview.text.trim()) return;
    const item = {
      id: Date.now(),
      author: newReview.author.trim(),
      product: newReview.product,
      rating: newReview.rating,
      date: 'Сегодня',
      text: newReview.text.trim()
    };
    setReviews([item, ...reviews]);
    setNewReview({ author: '', product: PRODUCTS[0].name, rating: 5, text: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9FA]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 py-3.5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 to-rose-300 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-slate-900 block leading-none">
                Василина продажен
              </span>
              <span className="text-[11px] uppercase tracking-widest text-pink-500 font-medium">
                Care & Beauty Studio
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#catalog" className="hover:text-pink-500 transition">
              Каталог
            </a>
            <a href="#benefits" className="hover:text-pink-500 transition">
              О косметике
            </a>
            <a href="#reviews" className="hover:text-pink-500 transition">
              Отзывы ({reviews.length})
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrency(currency === 'RUB' ? 'KZT' : 'RUB')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100 transition"
              title="Переключить валюту"
            >
              {currency === 'RUB' ? '₽ RUB' : '₸ KZT'}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-sm shadow-pink-200 transition active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Корзина</span>
              {totalItems > 0 && (
                <span className="bg-white text-pink-600 text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-[380px] bg-gradient-to-b from-pink-200/40 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 text-pink-600 text-xs font-medium mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Бережный уход с доказанной эффективностью</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-5">
              Нежность в каждой капле ухода от{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                Василины
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Воздушные пенки, пептидные сыворотки и тающие кремы в эстетичных флаконах.
              Создано для здорового сияния и комфорта вашей кожи каждый день.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#catalog"
                className="px-7 py-3.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium shadow-md shadow-pink-200 transition"
              >
                Перейти в каталог
              </a>
              <a
                href="#reviews"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-pink-50 text-slate-700 font-medium border border-pink-200 transition"
              >
                Читать отзывы
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section id="benefits" className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-pink-100 flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">Чистые составы</h3>
              <p className="text-xs text-slate-500 mt-0.5">Без сульфатов, парабенов и резких отдушек</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-pink-100 flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">Бесплатная доставка</h3>
              <p className="text-xs text-slate-500 mt-0.5">При заказе от {formatPrice(freeShippingThreshold)}</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-pink-100 flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">Подарок в заказе</h3>
              <p className="text-xs text-slate-500 mt-0.5">Миниатюра сыворотки к каждой посылке</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Каталог средств</h2>
            <p className="text-slate-500 text-sm mt-1">Выберите идеальный ритуал красоты для себя</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-pink-500 text-white shadow-sm shadow-pink-200'
                    : 'bg-white text-slate-600 border border-pink-100 hover:border-pink-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isFav = favorites.includes(product.id);
            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-pink-100 p-4 flex flex-col justify-between hover:shadow-lg hover:shadow-pink-100/60 transition duration-300"
              >
                <div>
                  <div className="relative mb-4">
                    <div
                      onClick={() => setActiveProduct(product)}
                      className="cursor-pointer"
                    >
                      <ProductIllustration color={product.color} type={product.bottleType} />
                    </div>
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-pink-600 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-pink-100">
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-pink-500 hover:scale-110 transition shadow-xs"
                      aria-label="В избранное"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-pink-500' : ''}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>{product.category}</span>
                    <span>{product.volume}</span>
                  </div>

                  <h3
                    onClick={() => setActiveProduct(product)}
                    className="font-semibold text-slate-900 text-base leading-snug mb-1.5 cursor-pointer hover:text-pink-600 transition"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">{product.shortDesc}</p>
                </div>

                <div className="pt-3 border-t border-pink-50 flex items-center justify-between gap-2">
                  <span className="text-lg font-bold text-slate-900">
                    {formatPrice(product.priceRub)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-1.5 bg-pink-50 hover:bg-pink-500 text-pink-600 hover:text-white px-3.5 py-2 rounded-full text-xs font-semibold transition active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>В корзину</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-white border-y border-pink-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">
              Отзывы покупательниц
            </h2>
            <p className="text-slate-500 text-sm">
              Делитесь впечатлениями об уходе от «Василина продажен»
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Review Form */}
            <div className="bg-[#FFF9FA] p-6 rounded-3xl border border-pink-100 h-fit">
              <h3 className="font-semibold text-slate-900 text-lg mb-4">Оставить отзыв</h3>
              <form onSubmit={handleReviewSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Например, Екатерина"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-pink-200 text-sm focus:outline-none focus:border-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Средство</label>
                  <select
                    value={newReview.product}
                    onChange={(e) => setNewReview({ ...newReview, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-pink-200 text-sm focus:outline-none focus:border-pink-400"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Оценка</label>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= newReview.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Ваш комментарий
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Расскажите, как вам текстура и результат..."
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-pink-200 text-sm focus:outline-none focus:border-pink-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl text-sm font-semibold transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Опубликовать отзыв</span>
                </button>
              </form>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-5 rounded-3xl bg-[#FFF9FA] border border-pink-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900 text-sm">{rev.author}</span>
                      <span className="text-[11px] text-slate-400">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-0.5 mb-2">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-pink-600 font-medium mb-2">{rev.product}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{rev.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFF9FA] py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="font-serif font-semibold text-slate-800">Василина продажен</span>
          </div>
          <p className="text-xs">© 2026 Все права защищены. Создано с нежностью к вашей коже.</p>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative border border-pink-100 shadow-2xl">
            <button
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-pink-50 text-slate-600 flex items-center justify-center hover:bg-pink-100"
            >
              <X className="w-5 h-5" />
            </button>

            <ProductIllustration color={activeProduct.color} type={activeProduct.bottleType} />

            <div className="mt-5">
              <div className="flex items-center gap-2 text-xs text-pink-500 font-medium mb-1">
                <span>{activeProduct.category}</span>
                <span>•</span>
                <span>{activeProduct.volume}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                {activeProduct.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {activeProduct.fullDesc}
              </p>

              <div className="bg-pink-50/70 p-3.5 rounded-2xl mb-5">
                <span className="text-xs font-semibold text-slate-700 block mb-1">
                  Ключевые компоненты:
                </span>
                <p className="text-xs text-slate-500">{activeProduct.ingredients}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-slate-900">
                  {formatPrice(activeProduct.priceRub)}
                </span>
                <button
                  onClick={() => {
                    addToCart(activeProduct);
                    setActiveProduct(null);
                    setIsCartOpen(true);
                  }}
                  className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold shadow-md shadow-pink-200 transition"
                >
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-pink-100">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-pink-500" />
                  <h3 className="font-serif text-xl font-bold text-slate-900">Ваша корзина</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-slate-600 hover:bg-pink-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Free shipping bar */}
              <div className="my-4 p-3.5 rounded-2xl bg-pink-50/80 border border-pink-100">
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-700">
                    {totalRub >= freeShippingThreshold
                      ? 'Бесплатная доставка активирована!'
                      : `До бесплатной доставки: ${formatPrice(freeShippingThreshold - totalRub)}`}
                  </span>
                  <span className="text-pink-600">{shippingProgress}%</span>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-300"
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-pink-50 text-pink-300 flex items-center justify-center mx-auto mb-3">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <p className="text-slate-500 text-sm">В корзине пока пусто</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#FFF9FA] border border-pink-100"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 truncate">{item.name}</h4>
                      <span className="text-xs text-pink-600 font-medium">
                        {formatPrice(item.priceRub * item.qty)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-7 h-7 rounded-full bg-white border border-pink-200 flex items-center justify-center text-slate-600 hover:bg-pink-50"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 rounded-full bg-white border border-pink-200 flex items-center justify-center text-slate-600 hover:bg-pink-50"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-pink-100 space-y-3">
                <div className="flex items-center justify-between text-base font-bold text-slate-900">
                  <span>Итого к оплате:</span>
                  <span>{formatPrice(totalRub)}</span>
                </div>
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-3.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm shadow-md shadow-pink-200 flex items-center justify-center gap-2 transition"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Перейти к оплате</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative border border-pink-100 shadow-2xl">
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            {orderSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                  Заказ успешно оплачен!
                </h3>
                <p className="text-sm text-slate-500">
                  Спасибо за покупку в «Василина продажен». Мы уже собираем вашу розовую коробочку!
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                  Оформление и оплата
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  К оплате: <strong className="text-pink-600">{formatPrice(totalRub)}</strong>
                </p>

                <form onSubmit={handleOrderSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Имя и фамилия получателя"
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:border-pink-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Телефон (+7 ...)"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:border-pink-400"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Город и адрес доставки"
                    value={orderForm.address}
                    onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 text-sm focus:outline-none focus:border-pink-400"
                  />

                  <div className="pt-1">
                    <span className="block text-xs font-medium text-slate-600 mb-1.5">
                      Способ оплаты
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setOrderForm({ ...orderForm, payment: 'card' })}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition ${
                          orderForm.payment === 'card'
                            ? 'border-pink-500 bg-pink-50 text-pink-600'
                            : 'border-pink-100 text-slate-600'
                        }`}
                      >
                        Картой онлайн
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderForm({ ...orderForm, payment: 'sbp' })}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition ${
                          orderForm.payment === 'sbp'
                            ? 'border-pink-500 bg-pink-50 text-pink-600'
                            : 'border-pink-100 text-slate-600'
                        }`}
                      >
                        СБП / Kaspi QR
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm shadow-md shadow-pink-200 transition"
                  >
                    Оплатить {formatPrice(totalRub)}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
