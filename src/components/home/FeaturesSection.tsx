import { motion } from 'framer-motion';
import { BarChart3, Heart, TrendingUp, Sparkles } from 'lucide-react';
export default function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Episode Heatmaps",
      description: "Visualize ratings with colorful, interactive heatmaps"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real-time Ratings",
      description: "Get instant IMDb and TMDB ratings"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Follow Shows",
      description: "Track your favorite series and movies"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Discover Content",
      description: "Find trending and top-rated shows"
    }
  ];
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-400">
            Powerful features for TV enthusiasts
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex h-full"
            >
              <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all hover:from-white/10 hover:to-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/0 to-[#00e5ff]/0 opacity-0 transition-opacity group-hover:from-[#00e5ff]/10 group-hover:to-transparent group-hover:opacity-100"></div>
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-4 inline-flex rounded-xl bg-[#00e5ff]/10 p-3 text-[#00e5ff] self-start">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}