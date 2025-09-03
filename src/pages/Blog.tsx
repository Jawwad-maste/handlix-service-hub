import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SectionHeading } from '@/components/SectionHeading';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Ultimate Home Cleaning Checklist for Indian Homes',
      excerpt: 'A comprehensive guide to keeping your home spotless with our professional cleaning tips and tricks.',
      author: 'Handlix Team',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Cleaning Tips',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      featured: true
    },
    {
      id: '2',
      title: 'Common Plumbing Problems and When to Call a Professional',
      excerpt: 'Learn to identify plumbing issues early and understand when DIY fixes work vs when you need expert help.',
      author: 'Rajesh Kumar',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'Plumbing',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '3',
      title: 'Electrical Safety Tips for Every Homeowner',
      excerpt: 'Essential electrical safety practices to protect your family and property from electrical hazards.',
      author: 'Amit Singh',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Electrical',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '4',
      title: 'Grooming at Home: Professional Tips for Men',
      excerpt: 'Master the art of home grooming with techniques used by professional stylists and barbers.',
      author: 'Vikram Mehta',
      date: '2025-01-08',
      readTime: '4 min read',
      category: 'Grooming',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '5',
      title: 'Pet Grooming: Keeping Your Furry Friends Happy & Healthy',
      excerpt: 'Complete guide to pet grooming, from basic hygiene to advanced care techniques for dogs and cats.',
      author: 'Priya Sharma',
      date: '2025-01-05',
      readTime: '8 min read',
      category: 'Pet Care',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '6',
      title: 'Seasonal Home Maintenance: Preparing for Monsoons',
      excerpt: 'Protect your home during monsoon season with our comprehensive maintenance checklist.',
      author: 'Handlix Team',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Home Maintenance',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const categories = [
    'All Posts',
    'Cleaning Tips', 
    'Plumbing',
    'Electrical',
    'Grooming',
    'Pet Care',
    'Home Maintenance'
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Handlix | Home Service Tips & Guides</title>
        <meta name="description" content="Expert tips and guides for home maintenance, cleaning, plumbing, electrical work, grooming, and pet care. Learn from Handlix professionals." />
        <meta name="keywords" content="home maintenance tips, cleaning guide, plumbing tips, electrical safety, grooming tips, pet care" />
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
                Expert Tips & Guides for<br />Your Home
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Learn from our professionals with comprehensive guides, tips, and insights for home maintenance, cleaning, repairs, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <section key={post.id} className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-background-alt rounded-3xl overflow-hidden shadow-card max-w-6xl mx-auto"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-brand-orange font-semibold mb-3">{post.category}</div>
                    <h2 className="text-3xl lg:text-4xl font-black text-heading mb-4 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-body-light text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-body-light mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{formatDate(post.date)}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-brand-orange font-semibold hover:text-brand-pink transition-colors focus-ring rounded"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* All Posts */}
        <section className="section-padding bg-background-alt">
          <div className="container-custom">
            <SectionHeading
              title="Latest Articles"
              description="Stay updated with the latest tips, guides, and insights from our experts"
              gradientWords={["Latest"]}
              className="mb-12"
            />

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-background text-body hover:bg-gradient-brand hover:text-white rounded-full border border-border transition-all duration-300 focus-ring"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-brand-lg transition-all duration-300 card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-heading mb-3 leading-tight hover:text-brand-orange transition-colors">
                      <Link to={`/blog/${post.id}`} className="focus-ring rounded">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-body-light mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-body-light">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-brand-orange font-medium hover:text-brand-pink transition-colors focus-ring rounded"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-brand rounded-3xl p-12 text-white text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-24 h-24 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-5 right-5 w-32 h-32 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black">
                  Get Expert Tips Delivered
                </h2>
                <p className="text-xl text-white/90">
                  Subscribe to our newsletter for weekly home maintenance tips, seasonal guides, and exclusive service offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-brand-orange font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                    Subscribe
                  </button>
                </div>
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

export default Blog;