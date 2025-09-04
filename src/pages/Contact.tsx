import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SectionHeading } from '@/components/SectionHeading';
import { GradientButton } from '@/components/GradientButton';
import { openWhatsApp } from '@/utils/wa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, redirect to WhatsApp with the form data
    const message = `Hi Handlix! I'd like to get in touch.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919528522358?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: ["Aligarh, Uttar Pradesh", "India - 202001"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: ["+91 95285 22358", "Available 24/7"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us", 
      details: ["support@handlix.in", "We reply within 2 hours"],
      action: "Send Email"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Working Hours",
      details: ["24/7 Emergency Services", "Regular Hours: 8 AM - 8 PM"],
      action: "Book Service"
    }
  ];

  const services = [
    'Home Cleaning',
    'Plumbing', 
    'Electrical Work',
    'Appliance Repair',
    'Personal Grooming',
    'Pet Grooming',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Handlix | Get in Touch for Home Services in Aligarh</title>
        <meta name="description" content="Contact Handlix for professional home services in Aligarh. Call +91 95285 22358 or email support@handlix.in. 24/7 emergency services available." />
        <meta name="keywords" content="contact handlix, home services aligarh, emergency plumber, 24/7 service, handlix phone number" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-brand text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                Get in Touch with<br />Our Expert Team
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Need help or have questions? We're here to assist you 24/7. Contact us via phone, email, or WhatsApp for immediate support.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Contact Form */}
          <section className="section-padding bg-background">
            <div className="container-custom lg:pr-8">
              <SectionHeading
                title="Send us a Message"
                description="Fill out the form below and we'll get back to you as soon as possible"
                gradientWords={["Message"]}
                className="mb-8"
                centered={false}
              />

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-heading mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-background-alt"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-heading mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-background-alt"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-heading mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-background-alt"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-heading mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-background-alt"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-heading mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-background-alt resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <GradientButton
                  type="submit"
                  size="lg"
                  className="w-full"
                  icon={<Send className="w-5 h-5" />}
                >
                  Send Message via WhatsApp
                </GradientButton>

                <p className="text-sm text-body-light text-center">
                  * Required fields. We'll respond within 2 hours during business hours.
                </p>
              </motion.form>
            </div>
          </section>

          {/* Contact Info & Map */}
          <section className="section-padding bg-background-alt">
            <div className="container-custom lg:pl-8">
              {/* Quick Contact */}
              <div className="mb-12">
                <SectionHeading
                  title="Quick Contact"
                  description="Reach out to us directly for immediate assistance"
                  gradientWords={["Quick"]}
                  className="mb-8"
                  centered={false}
                />

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-6 bg-background rounded-2xl border border-border hover:border-brand-orange transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-heading mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-body-light">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-brand rounded-3xl p-8 text-white text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-3 right-3 w-20 h-20 bg-white rounded-full blur-2xl" />
                  <div className="absolute bottom-3 left-3 w-24 h-24 bg-white rounded-full blur-3xl" />
                </div>
                
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-black">Emergency Services</h3>
                  <p className="text-white/90">
                    Need immediate help? Our emergency services are available 24/7 for urgent plumbing, electrical, and other critical issues.
                  </p>
                  <GradientButton
                    variant="outline"
                    onClick={() => openWhatsApp("Emergency Service Required")}
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                    icon={<MessageSquare className="w-5 h-5" />}
                  >
                    Emergency WhatsApp
                  </GradientButton>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Service Areas */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              title="Service Areas in Aligarh"
              description="We provide our services across all major areas in Aligarh and surrounding regions"
              gradientWords={["Service", "Areas"]}
              className="mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background-alt rounded-2xl p-8 text-center"
            >
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-body">
                {[
                  'Civil Lines', 'University Area', 'Ramghat Road', 'Medical College',
                  'Delhi Gate', 'Sarai Malhi', 'Dodhpur', 'Quarsi',
                  'Jamalpur', 'Bannadevi', 'Bichhola', 'Sasni Gate',
                  'Manik Chowk', 'Gular Road', 'Nagla Mehtab', 'And More...'
                ].map((area, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 bg-background rounded-lg border border-border hover:border-brand-orange transition-colors"
                  >
                    {area}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-body-light">
                  Don't see your area listed? <span className="text-brand-orange font-semibold cursor-pointer" onClick={() => openWhatsApp("Service Area Inquiry")}>Contact us</span> to check if we serve your location.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Contact;