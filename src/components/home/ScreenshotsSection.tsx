import { motion } from 'framer-motion';
export default function ScreenshotsSection() {
  const screenshots = [
    {
      url: "https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763155062196-75000060-f001-47f8-8b29-4f83ca1ef6a4-1.png",
      title: "Discover",
    },
    {
      url: "https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763155061792-75000060-f001-47f8-8b29-4f83ca1ef6a4-0.png",
      title: "Analyze",
    },
    {
      url: "https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763155062566-75000060-f001-47f8-8b29-4f83ca1ef6a4-2.png",
      title: "Explore",
    },
    {
      url: "https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763156725317-75000060-f001-47f8-8b29-4f83ca1ef6a4-0.png",
      title: "Ratings",
    },
    {
      url: "https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763157665934-75000060-f001-47f8-8b29-4f83ca1ef6a4-0.png",
      title: "Share",
    },
    {
      url: "https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763156725582-75000060-f001-47f8-8b29-4f83ca1ef6a4-1.png",
      title: "Details",
    }
  ];
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            See It In Action
          </h2>
          <p className="text-lg text-gray-400">
            Beautiful, intuitive interface
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative mx-auto w-full max-w-[280px]"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-[4rem] bg-gradient-to-br from-[#00e5ff]/20 to-[#d4ff00]/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
              {/* iPhone 15 Pro Max Mockup */}
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative overflow-hidden rounded-[3.5rem] bg-[#1c1c1e] p-[3px] shadow-2xl">
                  {/* Inner bezel */}
                  <div className="relative overflow-hidden rounded-[3.3rem] bg-black">
                    {/* Dynamic Island */}
                    <div className="absolute left-1/2 top-0 z-10 flex h-[37px] w-[126px] -translate-x-1/2 items-center justify-center">
                      <div className="h-[30px] w-[118px] rounded-[18px] bg-black"></div>
                    </div>
                    {/* Screen Content */}
                    <div className="relative h-[600px] w-full overflow-hidden rounded-[3.3rem]">
                      <img
                        src={screenshot.url}
                        alt={screenshot.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-white opacity-40"></div>
                  </div>
                </div>
                {/* Title Badge */}
                <motion.div 
                  className="mt-4 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block rounded-full bg-[#00e5ff]/10 px-4 py-2 text-sm font-medium text-[#00e5ff]">
                    {screenshot.title}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}