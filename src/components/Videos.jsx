import React from 'react';
import { motion } from 'motion/react';
import { Play, Video } from 'lucide-react';
import { Card } from './ui/Card';

function Videos() {
  const videos = [
    {
      title: 'Tomato Processing Line in Action',
      thumbnail: 'https://images.unsplash.com/photo-1562664514-7b70de45a61b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwcm9jZXNzaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjI3MDM4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '5:30'
    },
    {
      title: 'Canning Retort System Overview',
      thumbnail: 'https://images.unsplash.com/photo-1760282162326-0460fb0e2c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uaW5nJTIwbWFjaGluZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYyNzAzODA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4:15'
    },
    {
      title: 'Frozen Food Processing Technology',
      thumbnail: 'https://images.unsplash.com/photo-1629782184934-c54d054daf69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm96ZW4lMjBmb29kJTIwcHJvY2Vzc2luZ3xlbnwxfHx8fDE3NjI3MDM4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6:45'
    },
    {
      title: 'Pet Food Manufacturing Process',
      thumbnail: 'https://images.unsplash.com/photo-1736729600582-aa55f95ed4d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBmb29kJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjI3MDM4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '7:20'
    },
    {
      title: 'Complete Production Line Installation',
      thumbnail: 'https://images.unsplash.com/photo-1680595848057-66631ee6fd1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzYyNzAzODA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '8:00'
    },
    {
      title: 'Quality Control and Testing',
      thumbnail: 'https://images.unsplash.com/photo-1759873360996-3f165ebc8aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI3MDM4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3:50'
    }
  ];

  return (
    <section id="videos" className="py-20 bg-[#FFFFF2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-[#0446F2] mb-4">Video Gallery</h2>
          <div className="w-24 h-1 bg-[#FF9136] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our machinery in action and see the quality of our processing lines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 bg-[#FF9136] rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="text-white ml-1" size={28} fill="white" />
                    </motion.div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <Video className="text-[#0446F2] flex-shrink-0 mt-1" size={20} />
                    <h3 className="text-lg text-gray-800 group-hover:text-[#0446F2] transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;