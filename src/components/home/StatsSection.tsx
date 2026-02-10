import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
export default function StatsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div 
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#00e5ff]/10 to-[#d4ff00]/5 p-px">
          <div className="rounded-3xl bg-[#1a1f2e]/80 px-8 py-12 backdrop-blur-xl sm:px-12 sm:py-16">
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 font-display text-4xl font-bold leading-tight text-[#00e5ff] sm:text-5xl lg:text-6xl">
                  Download Now
                </div>
                <p className="mb-8 text-base text-gray-400 sm:text-lg">
                  Available on iOS and Android
                </p>
                {/* Download Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      asChild
                      size="lg" 
                      className="flex h-auto w-full items-center gap-2 overflow-visible bg-[#00e5ff] px-8 py-4 text-lg font-semibold leading-none text-black hover:bg-[#00e5ff]/90 hover:text-white sm:w-auto"
                    >
                      <a 
                        href="https://apps.apple.com/app/series-graph-movies-series/id6748727502" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaApple className="h-6 w-6 flex-shrink-0" />
                        <span className="whitespace-nowrap leading-normal">App Store</span>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      disabled
                      variant="outline"
                      className="flex h-auto w-full cursor-not-allowed items-center gap-2 overflow-visible border-2 border-[#00e5ff]/20 bg-[#00e5ff]/5 px-8 py-4 text-lg font-semibold leading-none text-[#00e5ff]/50 sm:w-auto"
                    >
                      <FaGooglePlay className="h-6 w-6 flex-shrink-0" />
                      <span className="whitespace-nowrap leading-normal">Coming Soon</span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}