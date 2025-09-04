import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, RotateCcw } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SectionHeading } from '@/components/SectionHeading';
import { GradientButton } from '@/components/GradientButton';
import { openWhatsApp } from '@/utils/wa';

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  disclaimer?: string;
  category: string;
  isFlipped: boolean;
  onFlip: () => void;
}

const PricingCard = ({ 
  title, 
  price, 
  duration, 
  features, 
  disclaimer, 
  category,
  isFlipped,
  onFlip 
}: PricingCardProps) => {
  return (
    <motion.div
      className="relative h-80 perspective-1000 cursor-pointer"
      onClick={onFlip}
      whileHover={{ scale: 1.05 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isFlipped ? 'back' : 'front'}
          initial={{ rotateY: isFlipped ? -180 : 0 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: isFlipped ? 180 : -180 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {!isFlipped ? (
            // Front of card
            <div className="w-full h-full bg-background-alt rounded-3xl p-8 border border-border hover:border-brand-orange transition-colors flex flex-col justify-center items-center text-center shadow-card">
              <h3 className="text-2xl font-bold text-heading mb-4">{title}</h3>
              <div className="text-4xl font-black text-gradient mb-2">{price}</div>
              <div className="text-body-light mb-6">{duration}</div>
              <div className="text-sm text-brand-orange font-semibold bg-brand-orange/10 px-3 py-1 rounded-full">
                Click to view details
              </div>
              <RotateCcw className="w-5 h-5 text-body-light mt-4 animate-pulse" />
            </div>
          ) : (
            // Back of card
            <div className="w-full h-full bg-gradient-brand rounded-3xl p-6 text-white flex flex-col justify-between shadow-brand-lg">
              <div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <ul className="space-y-2 mb-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {disclaimer && (
                  <p className="text-xs text-white/80 italic">{disclaimer}</p>
                )}
              </div>
              
              <GradientButton
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  openWhatsApp(title);
                }}
              >
                Book on WhatsApp
              </GradientButton>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cleaning', name: 'Cleaning' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'grooming', name: 'Grooming' },
    { id: 'appliance', name: 'Appliance' }
  ];

  const pricingData = [
    {
      id: 'kitchen-cleaning',
      title: 'Kitchen Cleaning',
      price: '₹499',
      duration: 'onwards',
      category: 'cleaning',
      features: [
        'Bathroom scrubbing',
        'Floor mopping & vacuuming',
        'Eco-friendly products',
        '100% satisfaction guarantee'
      ],
      disclaimer: 'Price may vary based on home size'
    },
    {
      id: 'regular-cleaning',
      title: 'Regular Cleaning',
      price: '₹299',
      duration: '1-2 hours', 
      category: 'cleaning',
      features: [
        'Weekly/Monthly cleaning',
        'Dusting & organizing',
        'Floor cleaning',
        'Bathroom basic clean',
        'Trash removal',
        'Regular maintenance'
      ]
    },
    {
      id: 'plumbing-basic',
      title: 'Basic Plumbing',
      price: '₹299',
      duration: '30min-1hr',
      category: 'plumbing', 
      features: [
        'Leak detection & repair',
        'Tap installation',
        'Drain unclogging',
        'Basic pipe repair',
        'Water pressure check'
      ]
    },
    {
      id: 'plumbing-emergency',
      title: 'Emergency Plumbing',
      price: '₹599',
      duration: '24/7 service',
      category: 'plumbing',
      features: [
        'Immediate response',
        'Major leak repair',
        'Pipe burst fixing',
        'Emergency drain cleaning',
        '24/7 availability',
        'Priority service'
      ]
    },
    {
      id: 'electrical-basic',
      title: 'Basic Electrical',
      price: '₹199',
      duration: '30-60 mins',
      category: 'electrical',
      features: [
        'Switch installation',
        'Socket repair',
        'Bulb replacement',
        'Basic wiring check',
        'Safety inspection'
      ]
    },
    {
      id: 'electrical-advanced',
      title: 'Advanced Electrical',
      price: '₹899', 
      duration: '2-4 hours',
      category: 'electrical',
      features: [
        'Complete rewiring',
        'Circuit installation', 
        'Panel upgrades',
        'Safety systems setup',
        'Certified electrician',
        'Warranty included'
      ]
    },
    {
      id: 'grooming-basic',
      title: 'Basic Grooming',
      price: '₹399',
      duration: '45 mins',
      category: 'grooming',
      features: [
        'Haircut & styling',
        'Beard trimming',
        'Basic facial',
        'Professional tools',
        'Home service'
      ]
    },
    {
      id: 'grooming-premium', 
      title: 'Premium Grooming',
      price: '₹799',
      duration: '1-2 hours',
      category: 'grooming',
      features: [
        'Complete makeover',
        'Advanced facial treatment',
        'Hair spa & styling',
        'Beard design & care',
        'Premium products',
        'Consultation included'
      ]
    },
    {
      id: 'ac-service',
      title: 'AC Service & Repair',
      price: '₹599',
      duration: '1-2 hours',
      category: 'appliance',
      features: [
        'Complete AC cleaning',
        'Gas refilling',
        'Filter replacement',
        'Performance check',
        '6 month warranty'
      ]
    }
  ];

  const filteredPricing = activeCategory === 'all' 
    ? pricingData 
    : pricingData.filter(item => item.category === activeCategory);

  const toggleCardFlip = (cardId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Handlix | Transparent & Affordable Home Service Rates</title>
        <meta name="description" content="View transparent pricing for all Handlix home services in Aligarh. No hidden charges. Cleaning, plumbing, electrical, grooming, and appliance repair rates." />
        <meta name="keywords" content="home service prices Aligarh, cleaning rates, plumber charges, electrician cost, grooming prices" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              title="Transparent & Affordable Pricing"
              description="No hidden charges. Quality service at fair rates with complete transparency."
              gradientWords={["Transparent", "Affordable"]}
              className="mb-12"
            />

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-brand text-white shadow-brand'
                      : 'bg-background-alt text-body hover:bg-gradient-brand hover:text-white border border-border'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Pricing Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPricing.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <PricingCard
                      {...item}
                      isFlipped={flippedCards.has(item.id)}
                      onFlip={() => toggleCardFlip(item.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background-alt">
          <div className="container-custom">
            <SectionHeading
              title="Pricing FAQs"
              gradientWords={["FAQs"]}
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: "Are there any hidden charges?",
                  a: "No, we believe in complete transparency. The price you see is what you pay, with no hidden charges."
                },
                {
                  q: "Can I get a custom quote?",
                  a: "Yes! For large projects or custom requirements, contact us for a personalized quote."
                },
                {
                  q: "Do you offer discounts for regular services?",
                  a: "Yes, we offer attractive discounts for weekly and monthly service packages."
                },
                {
                  q: "What if I'm not satisfied with the service?",
                  a: "We offer a 100% satisfaction guarantee. If you're not happy, we'll make it right at no extra cost."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-6 rounded-2xl border border-border"
                >
                  <h3 className="font-bold text-heading mb-3">{faq.q}</h3>
                  <p className="text-body-light">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Pricing;