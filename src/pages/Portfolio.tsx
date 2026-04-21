import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const { t } = useTranslation();

  const portfolioItems = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    image: `/renovation-generale_${String(i + 1).padStart(2, '0')}_thumb.jpg`,
    title: t(`portfolioPage.items.${i % 7}.title`, "Rénovation"),
    category: t(`portfolioPage.items.${i % 7}.category`, "Construction")
  }));

  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6"
          >
            {t("portfolioPage.title")}
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8"
          >
            {t("portfolioPage.subtitle")}
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {portfolioItems.map((item) => (
            <motion.div 
              key={item.id} 
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/5] block cursor-pointer hardware-accelerate"
            >
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-white font-bold text-xl leading-tight line-clamp-2">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
