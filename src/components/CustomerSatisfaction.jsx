import React from 'react';
import { motion } from 'motion/react';
import { ThumbsUp } from 'lucide-react';

function CustomerSatisfaction() {
  return (
    <section className="py-20 bg-[#FFFFF2]">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#0446F2] w-20 h-20 rounded-full flex items-center justify-center">
              <ThumbsUp className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-[#0446F2] mb-6">Customer Satisfaction</h2>
          <div className="w-24 h-1 bg-[#FF9136] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Gurudatta Foodtek Solutions, customer satisfaction is not just a goal—it's our commitment. We understand that every client has unique requirements, and we go above and beyond to ensure that our solutions perfectly align with their needs. From the initial consultation to after-sales support, our dedicated team works tirelessly to deliver exceptional service and build lasting partnerships. Our success is measured by the success of our clients, and we take pride in the long-term relationships we've built in the industry. With responsive support, expert guidance, and unwavering quality, we ensure that every customer receives the best possible experience and maximum value from their investment in our machinery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default CustomerSatisfaction;