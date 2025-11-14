import React from 'react';
import { motion } from 'motion/react';

function QualityProducts() {
  const products = [
    {
      name: 'Custard Apple Deseeding',
      image: 'https://images.unsplash.com/photo-1601952806112-cd12869e1d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0YXJkJTIwYXBwbGUlMjBkZXNlZWRpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2Mjc4NzQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Advanced deseeding technology for custard apple processing'
    },
    {
      name: 'Canning Retorts',
      image: 'https://images.unsplash.com/photo-1760282162326-0460fb0e2c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uaW5nJTIwcmV0b3J0JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjI3ODc0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'High-efficiency canning retort systems for food preservation'
    },
    {
      name: 'Processing Lines',
      image: 'https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGxpbmUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2Mjc4NzQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complete automated processing line solutions'
    },
  ];

  return (
    <section className="py-20 bg-[#FFFFF2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-[#0446F2] mb-4">Our Quality Products</h2>
          <div className="w-24 h-1 bg-[#FF9136] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of premium food processing equipment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0446F2]/80 to-transparent flex items-end">
                  <h3 className="text-2xl text-white p-6">{product.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QualityProducts;
