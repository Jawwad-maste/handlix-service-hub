import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Star, Users, Clock, Shield, Sparkles, Scissors, Wrench, Zap, Home, Dog } from 'lucide-react';
import { Link } from 'react-router-dom';

// Components
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SectionHeading } from '@/components/SectionHeading';
import { GradientButton } from '@/components/GradientButton';
import { ServiceCard } from '@/components/ServiceCard';
import { GridMotion } from '@/components/ui/grid-motion';
import { openWhatsApp } from '@/utils/wa';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [selectedService, setSelectedService] = useState('cleaning');

  const serviceCategories = [
    { id: 'cleaning', name: 'Home Cleaning', icon: <Home className="w-6 h-6" /> },
    { id: 'plumbing', name: 'Plumbing', icon: <Wrench className="w-6 h-6" /> },
    { id: 'electrical', name: 'Electrical', icon: <Zap className="w-6 h-6" /> },
    { id: 'grooming', name: 'Grooming', icon: <Scissors className="w-6 h-6" /> },
    { id: 'pet', name: 'Pet Care', icon: <Dog className="w-6 h-6" /> },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Professionals",
      description: "Background-verified experts with years of experience in their field."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Doorstep Service", 
      description: "We come to you at your preferred time and location across Aligarh."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges. Quality service at fair rates."
    }
  ];

  const featuredServices = [
    {
      title: "Deep Home Cleaning",
      description: "Complete home sanitization with eco-friendly products. Kitchen, bathroom, and living areas.",
      price: "From ₹499",
      duration: "2-4 hours",
      rating: 4.8,
      category: "home-cleaning",
      icon: <Home className="w-12 h-12" />,
      featured: true
    },
    {
      title: "Plumbing Repair", 
      description: "Fix leaks, unclog drains, install fixtures. Emergency and scheduled services available.",
      price: "From ₹299",
      duration: "1-2 hours",
      rating: 4.9,
      category: "plumbing",
      icon: <Wrench className="w-12 h-12" />
    },
    {
      title: "Electrical Services",
      description: "Wiring, switch installation, fan repair, and electrical troubleshooting by certified electricians.",
      price: "From ₹199",
      duration: "30min-2hrs",
      rating: 4.7,
      category: "electrical", 
      icon: <Zap className="w-12 h-12" />
    },
    {
      title: "Personal Grooming",
      description: "Haircut, shave, facial, and grooming services in the comfort of your home.",
      price: "From ₹399",
      duration: "45min-1hr",
      rating: 4.9,
      category: "grooming",
      icon: <Scissors className="w-12 h-12" />
    },
    {
      title: "Pet Grooming",
      description: "Bath, nail trimming, hair cutting for your furry friends with gentle care.",
      price: "From ₹599",
      duration: "1-2 hours", 
      rating: 4.8,
      category: "pet-grooming",
      icon: <Dog className="w-12 h-12" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Handlix - Home Services in Aligarh | Cleaning, Plumbing, Electrical & More</title>
        <meta name="description" content="Book trusted professionals for home services in Aligarh. Cleaning, plumbing, electrical, appliance repair, grooming & pet care at your doorstep. Instant WhatsApp booking." />
        <meta name="keywords" content="home services Aligarh, plumber Aligarh, electrician, cleaning service, grooming, pet grooming, appliance repair" />
        <link rel="canonical" href="https://handlix.com" />
      </Helmet>

      {/* Loading Overlay */}
      {showLoading && (
        <LoadingOverlay 
          onComplete={() => setShowLoading(false)}
          variant="letters"
        />
      )}

      {!showLoading && (
        <>
          <Header />
          
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20 md:pt-0">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8 text-center lg:text-left order-2 lg:order-1"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-heading leading-tight">
                    <span className="text-gradient">Handling</span> Life's{' '}
                    <span className="text-gradient">Essentials</span>{' '}
                    Effortlessly
                  </h1>
                  
                  <p className="text-xl text-body-light max-w-2xl mx-auto lg:mx-0">
                    Book trusted professionals for home services, repairs, grooming, and more — right at your doorstep in Aligarh.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <GradientButton
                      variant="whatsapp"
                      size="lg"
                      onClick={() => openWhatsApp("General Booking")}
                      className="text-lg px-8"
                    >
                      Book Now on WhatsApp
                    </GradientButton>
                    
                    <GradientButton
                      variant="outline" 
                      size="lg"
                      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-lg px-8"
                    >
                      Explore Services
                    </GradientButton>
                  </div>

                  {/* Trust Indicators */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center lg:justify-start space-x-8 pt-4"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-black text-gradient">1000+</div>
                      <div className="text-sm text-body-light">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-gradient">4.8★</div>
                      <div className="text-sm text-body-light">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-gradient">24/7</div>
                      <div className="text-sm text-body-light">Support</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right: GridMotion - Hidden on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative hidden md:block order-1 lg:order-2"
                >
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden">
                    <GridMotion 
                      items={[
                        '🏠 Home Cleaning', '🔧 Plumbing', '⚡ Electrical', '🛠️ Appliance Repair',
                        '✂️ Grooming', '🐕 Pet Care', '🧹 Deep Clean', '🚿 Bathroom',
                        '💡 Lighting', '🔌 Wiring', '🪒 Shaving', '💇 Haircut',
                        '🐱 Cat Grooming', '🏠 Kitchen', '🛁 Pipe Repair', '⚡ Fan Repair',
                        '🧴 Facial', '🐕 Dog Bath', '🪟 Window Clean', '🚰 Tap Fix',
                        '💡 Switch Install', '💇‍♀️ Hair Style', '🐾 Nail Trim', '🧽 Floor Clean',
                        '🔧 Leak Fix', '⚡ AC Repair', '🪒 Beard Trim', '🐕 Pet Wash'
                      ]}
                      gradientColor="hsl(var(--brand-orange))"
                      className="opacity-80"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-1 h-8 bg-gradient-brand rounded-full"></div>
            </motion.div>
          </section>

          {/* Tell us what you need */}
          <section className="section-padding bg-background-alt">
            <div className="container-custom">
              <SectionHeading
                title="Tell us what you need"
                subtitle="Step 1"
                description="Select a service category to see our popular offerings"
                gradientWords={["need"]}
                className="mb-12"
              />

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {serviceCategories.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id === 'cleaning' ? 'home-cleaning' : service.id === 'pet' ? 'pet-grooming' : service.id}`}
                  >
                    <motion.button
                      onClick={() => setSelectedService(service.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        selectedService === service.id
                          ? 'bg-gradient-brand text-white shadow-brand'
                          : 'bg-background text-body hover:bg-gradient-brand hover:text-white border border-border'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </motion.button>
                  </Link>
                ))}
              </div>

              {/* Selected Service Options */}
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {/* Service options would be dynamically loaded here */}
                <div className="bg-background rounded-xl p-6 border border-border hover:border-brand-orange transition-colors">
                  <h3 className="font-bold text-heading mb-2">Basic Service</h3>
                  <p className="text-body-light mb-4">Essential service package</p>
                  <GradientButton 
                    size="sm" 
                    variant="whatsapp"
                    onClick={() => openWhatsApp(`Basic ${selectedService} Service`)}
                  >
                    Book Now
                  </GradientButton>
                </div>
                
                <div className="bg-background rounded-xl p-6 border-2 border-brand-orange">
                  <div className="bg-gradient-brand text-white text-xs font-bold px-2 py-1 rounded-full w-fit mb-3">POPULAR</div>
                  <h3 className="font-bold text-heading mb-2">Premium Service</h3>
                  <p className="text-body-light mb-4">Comprehensive service package</p>
                  <GradientButton 
                    size="sm"
                    variant="whatsapp" 
                    onClick={() => openWhatsApp(`Premium ${selectedService} Service`)}
                  >
                    Book Now
                  </GradientButton>
                </div>
                
                <div className="bg-background rounded-xl p-6 border border-border hover:border-brand-orange transition-colors">
                  <h3 className="font-bold text-heading mb-2">Emergency Service</h3>
                  <p className="text-body-light mb-4">Urgent service available 24/7</p>
                  <GradientButton 
                    size="sm"
                    variant="whatsapp" 
                    onClick={() => openWhatsApp(`Emergency ${selectedService} Service`)}
                  >
                    Book Now
                  </GradientButton>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="section-padding">
            <div className="container-custom">
              <SectionHeading
                title="Why Choose Handlix"
                subtitle="Step 2"
                description="We're committed to providing the best home service experience in Aligarh"
                gradientWords={["Handlix"]}
                className="mb-16"
              />

              <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-heading mb-4">{item.title}</h3>
                    <p className="text-body-light text-lg leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Services */}
          <section id="services" className="section-padding bg-background-alt">
            <div className="container-custom">
              <SectionHeading
                title="Featured Services"
                subtitle="Step 3"
                description="Our most popular services loved by customers across Aligarh"
                gradientWords={["Featured"]}
                className="mb-16"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="section-padding bg-gradient-brand text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse-glow" />
            </div>
            
            <div className="container-custom text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-black">
                  Need a service today?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Book instantly on WhatsApp and get connected with trusted professionals in minutes!
                </p>
                <GradientButton
                  variant="outline"
                  size="lg"
                  onClick={() => openWhatsApp("Urgent Service Request")}
                  className="bg-white text-brand-orange border-white hover:bg-white/90 text-xl px-12"
                >
                  Book Now
                </GradientButton>
              </motion.div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="section-padding">
            <div className="container-custom">
              <SectionHeading
                title="What Our Customers Say"
                gradientWords={["Customers"]}
                className="mb-16"
              />

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Priya Sharma",
                    service: "Home Cleaning", 
                    rating: 5,
                    comment: "Excellent service! The team was professional and thorough. My house has never been cleaner."
                  },
                  {
                    name: "Rajesh Kumar",
                    service: "Plumbing",
                    rating: 5, 
                    comment: "Quick response for emergency plumbing. Fixed the issue in no time and at a fair price."
                  },
                  {
                    name: "Anjali Gupta", 
                    service: "Grooming",
                    rating: 4,
                    comment: "Convenient home grooming service. The stylist was skilled and very professional."
                  }
                ].map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-background-alt p-8 rounded-2xl border border-border"
                  >
                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-body-light mb-4 italic">"{review.comment}"</p>
                    <div>
                      <div className="font-semibold text-heading">{review.name}</div>
                      <div className="text-sm text-body-light">{review.service}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
          <WhatsAppFloat />
        </>
      )}
    </>
  );
};

export default Index;
