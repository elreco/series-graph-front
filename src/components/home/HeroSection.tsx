import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/10 via-transparent to-[#d4ff00]/5"></div>
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 229, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(212, 255, 0, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 229, 255, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          {/* Logo with Animation - Background image fills container */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            <motion.div 
              className="relative w-full max-w-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#00e5ff] opacity-20 blur-2xl"></div>
              {/* Border container with background image */}
              <div 
                className="relative h-[200px] w-full rounded-[2.5rem] border-4 border-[#00e5ff] bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] bg-cover bg-center bg-no-repeat p-4 shadow-2xl shadow-[#00e5ff]/50"
                style={{
                  backgroundImage: `url(https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763157666444-75000060-f001-47f8-8b29-4f83ca1ef6a4-1.png)`,
                  backgroundSize: 'contain',
                }}
              >
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="mb-6 font-display text-xl leading-tight text-[#00e5ff] sm:text-2xl lg:text-3xl">
              Visualize Every Episode
            </p>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Track ratings, discover trends, and make smarter viewing decisions with beautiful data visualizations
            </p>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                size="lg" 
                className="flex h-auto w-full items-center gap-2 overflow-visible bg-[#00e5ff] px-6 py-3.5 font-semibold leading-none text-black hover:bg-[#00e5ff]/90 hover:text-white sm:w-auto"
              >
                <a 
                  href="https://apps.apple.com/us/app/series-graph/id6748727502" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaApple className="h-5 w-5 flex-shrink-0" />
                  <span className="whitespace-nowrap leading-normal">Download on App Store</span>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                disabled
                variant="outline" 
                className="flex h-auto w-full cursor-not-allowed items-center gap-2 overflow-visible border-2 border-[#00e5ff]/20 bg-[#00e5ff]/5 px-6 py-3.5 font-semibold leading-none text-[#00e5ff]/50 sm:w-auto"
              >
                <FaGooglePlay className="h-5 w-5 flex-shrink-0" />
                <span className="whitespace-nowrap leading-normal">Coming Soon</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}