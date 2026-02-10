import { motion } from 'framer-motion';
export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0B0B1D]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763155339627-75000060-f001-47f8-8b29-4f83ca1ef6a4-0.png" 
            alt="Watch Peak" 
            className="h-8 w-8"
          />
          <span className="font-display text-lg font-semibold text-white sm:text-xl">
            Watch Peak
          </span>
        </motion.div>
        {/* Product Hunt Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="https://www.producthunt.com/products/series-graph-2?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-series&#0045;graph&#0045;2" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1045074&theme=dark&period=daily&t=1765171519260" 
              alt="Watch Peak - See every series & movies true rating at a glance | Product Hunt" 
              className="h-[44px] w-[200px] sm:h-[54px] sm:w-[250px]"
              width="250" 
              height="54" 
            />
          </a>
        </motion.div>
      </div>
    </header>
  );
}