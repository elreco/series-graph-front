import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
export default function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div 
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Start?
        </h2>
        <p className="mb-10 text-lg text-gray-400">
          Join thousands making smarter viewing decisions
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              asChild
              size="lg" 
              className="flex h-auto w-full items-center gap-2 overflow-visible bg-[#00e5ff] px-8 py-4 text-lg font-semibold leading-none text-black hover:bg-[#00e5ff]/90 hover:text-white sm:w-auto"
            >
              <a 
                href="https://apps.apple.com/us/app/series-graph/id6748727502" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaApple className="h-6 w-6 flex-shrink-0" />
                <span className="whitespace-nowrap leading-normal">Download on App Store</span>
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
    </section>
  );
}