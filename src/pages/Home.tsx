import { Link } from "react-router-dom";
import { CheckCircle2, Star, ArrowRight, Paintbrush, ShieldCheck, Clock, Hammer, Wrench, Ruler } from "lucide-react";
import { motion } from "motion/react";
import { TestimonialMarquee } from "../components/TestimonialMarquee";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language.startsWith('fr');
  const googleReviewLink = "https://share.google/u4zSker0UmexGzxLX";

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gray-900 text-white pb-32 overflow-hidden min-h-[85vh] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-6 text-sm font-medium backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2 fill-current" /> {t('home.hero.topRated')}
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              {t('home.hero.title1')}<br/> <span className="text-blue-400">{t('home.hero.title2')}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              {t('home.hero.subtitle')}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                to="/contact"
                className="theme-gradient text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-900/30 text-center flex items-center justify-center group"
              >
                {t('home.hero.getQuote')} <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/#services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center flex items-center justify-center"
              >
                {t('home.hero.ourServices')}
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-50 text-sm font-medium backdrop-blur-md shadow-[inset_0_0_10px_rgba(59,130,246,0.2)]">
              <Clock className="w-4 h-4 mr-2 text-blue-300" /> {t('home.hero.trust')}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hero Features Cards Overlap */}
      <div className="relative z-20 -mt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 transform transition-transform hover:-translate-y-1">
            <div className="bg-[#eef0fe] p-4 flex items-center justify-center rounded-2xl mb-5 text-[#363B81]">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-gray-900">{t('home.features.ratingTitle')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('home.features.ratingDesc')}</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 transform transition-transform hover:-translate-y-1">
            <div className="bg-[#eef0fe] p-4 flex items-center justify-center rounded-2xl mb-5 text-[#363B81]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-gray-900">{t('home.features.experienceTitle')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('home.features.experienceDesc')}</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 transform transition-transform hover:-translate-y-1">
            <div className="bg-[#eef0fe] p-4 flex items-center justify-center rounded-2xl mb-5 text-[#363B81]">
              <Paintbrush className="w-8 h-8 flex-shrink-0" />
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-gray-900">{t('home.features.prep')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('home.features.prepDesc')}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Preview */}
      <section id="services" className="py-16 md:py-24 theme-gradient-br">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{t('home.services4.title', 'SERVICES')}</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto uppercase tracking-wide">
              {t('home.services4.subtitle', 'CONTACTEZ-NOUS POUR UNE ÉVALUATION GRATUITE')}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                id: 'maconnerie',
                icon: <Hammer className="w-12 h-12 text-[#363B81]" />,
                title: isFr ? 'Maçonnerie' : 'Masonry',
                items: isFr ? [
                  "Joints de brique et pierre",
                  "Murs de brique et pierre",
                  "Cheminées",
                  "Remplacement d'allèges",
                  "Remplacement de linteaux",
                  "Crépi de fondation",
                  "Réparation de fondation",
                  "Imperméabilisation de murs de brique",
                  "Ancrage de murs de brique et de pierre",
                  "Balcons de pierre",
                  "Murets de pierre",
                  "Colonnes de support en brique",
                  "Structure de maçonnerie",
                  "Pose de blocs de béton",
                  "Pose de solins d'étanchéité",
                  "Isolation de murs de brique",
                  "Stabilisation temporaire de murs de brique",
                  "Ventres de boeufs et lézardes"
                ] : [
                  "Brick and stone pointing",
                  "Brick and stone walls",
                  "Chimneys",
                  "Sill and lintel replacement",
                  "Parging and foundation repair",
                  "Brick wall waterproofing",
                  "Stone balconies and low walls"
                ]
              },
              {
                id: 'menuiserie',
                icon: <Wrench className="w-12 h-12 text-[#363B81]" />,
                title: isFr ? 'Menuiserie' : 'Carpentry',
                items: isFr ? [
                  "Pose de céramique",
                  "Pose de gypse et plâtrage",
                  "Pose de portes et fenêtres",
                  "Réparation de balcon de bois",
                  "Installation de balcon en fibre de verre",
                  "Rampes d'aluminium",
                  "Escalier et rampes de fer forgé",
                  "Réparation de corniches et solins",
                  "Réparation de toit et toitures neuves",
                  "Isolation",
                  "Cuisines",
                  "Sous-sols",
                  "Garages",
                  "Construction de divisions intérieures",
                  "Additions de maisons",
                  "Salles de bain",
                  "Bureaux commerciaux",
                  "Clôtures",
                  "Étanchéité de mur de fondations",
                  "Installation de puisard et pompe submersible",
                  "Agrandissements",
                  "Terrasses",
                  "Planchers chauffants",
                  "Formes et planchers de béton",
                  "Planchers de bois franc et flottants",
                  "Murs de fondations"
                ] : [
                  "Ceramic, drywall and plastering",
                  "Doors and windows installation",
                  "Balcony repair",
                  "Aluminum and wrought iron railings",
                  "Extensions and decks",
                  "Heated and hardwood floors"
                ]
              },
              {
                id: 'structure',
                icon: <Ruler className="w-12 h-12 text-[#363B81]" />,
                title: 'Structure',
                items: isFr ? [
                  "Murs porteurs de maçonnerie",
                  "Murs porteurs de charpente",
                  "Installation de poutres d'acier",
                  "Support temporaire de murs porteurs",
                  "Restructuration de toits",
                  "Solidification de poutres maîtresses",
                  "Travaux de concert avec un ingénieur",
                  "Doublage ou remplacement de solives"
                ] : [
                  "Masonry load-bearing walls",
                  "Framed load-bearing walls",
                  "Steel beam installation",
                  "Roof restructuring",
                  "Cooperative work with an engineer"
                ]
              },
              {
                id: 'finition',
                icon: <Paintbrush className="w-12 h-12 text-[#363B81]" />,
                title: isFr ? 'Finition' : 'Finishing',
                items: isFr ? [
                  "Peinture intérieure",
                  "Peinture de corniches",
                  "Peinture de fer forgé",
                  "Peinture de balcons",
                  "Plâtrage",
                  "Calfeutrage",
                  "Teinture extérieure",
                  "Imperméabilisation",
                  "Moulures",
                  "Entretien de toitures",
                  "Déneigement de toitures",
                  "Imperméabilisation de fondations",
                  "Revêtement de fondations",
                  "Capage de fenêtres"
                ] : [
                  "Interior and exterior painting",
                  "Plastering and caulking",
                  "Exterior staining",
                  "Waterproofing and moldings",
                  "Window capping"
                ]
              }
            ].map((service) => (
              <motion.div key={service.id} variants={fadeInUp} className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl flex flex-col group hover:bg-white/15 transition-colors">
                <div className="p-8 flex-grow flex flex-col">
                  <div className="bg-white w-20 h-20 flex-shrink-0 rounded-2xl flex items-center justify-center mb-6 shadow-md transform transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/20 pb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-6 flex-grow services-scroll max-h-56 pr-2">
                    {Array.isArray(service.items) && service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-blue-50 text-[13px] md:text-sm leading-snug">
                        <span className="text-blue-400 mr-2 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.tag && (
                    <p className="text-xs text-blue-300 italic mt-auto pt-4 border-t border-white/10">{service.tag}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">{t('home.process.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.process.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
          >
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-[1px] bg-gray-200"></div>
            
            {/* Step 1 */}
            <motion.div variants={fadeInUp} className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#363B81] flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-lg shadow-blue-900/20">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.process.step1')}</h3>
              <p className="text-gray-600">{t('home.process.step1Desc')}</p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div variants={fadeInUp} className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#363B81] flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-lg shadow-blue-900/20">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.process.step2')}</h3>
              <p className="text-gray-600">{t('home.process.step2Desc')}</p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div variants={fadeInUp} className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#363B81] flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-lg shadow-blue-900/20">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.process.step3')}</h3>
              <p className="text-gray-600">{t('home.process.step3Desc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#0a0a0a] flex flex-col lg:flex-row">
        <div className="optimalext-about-visual lg:w-1/2 relative min-h-[300px] md:min-h-[400px] lg:min-h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" 
            alt="Professional Painter" 
            className="optimalext-about-image absolute inset-0 w-full h-full object-cover object-[68%_center] lg:object-center"
          />
        </div>
        <div className="lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{t('home.whyUs.title')} <span className="text-white font-light hidden md:inline">|</span></h2>
            <p className="text-lg md:text-xl text-gray-400 mb-6">{t('about.subtitle')}</p>
            
            <p className="text-gray-300 mb-4 leading-relaxed font-semibold">
              {t('about.description')}
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t('home.whyUs.desc')}
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#363B81] mr-4"></div>
                {t('home.whyUs.point1')}
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#363B81] mr-4"></div>
                {t('home.whyUs.point2')}
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#363B81] mr-4"></div>
                {t('home.whyUs.point3')}
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#363B81] mr-4"></div>
                {t('home.whyUs.point4')}
              </li>
            </ul>
            
            <p className="text-gray-300 mb-10">
              <span className="border-b border-white pb-1 font-bold">{t('home.whyUs.goalLabel')}</span> {t('home.whyUs.goalDesc')}
            </p>
            
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#363B81] text-white font-bold py-3 px-8 rounded-full hover:bg-[#363B81] transition-colors duration-200 shadow-lg"
              >
                {t('home.whyUs.getQuote')} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">{t('home.portfolio.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.portfolio.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12"
          >
            {[
              { id: 1, title: t('home.portfolio.previewItems.0.title', 'Rénovation Maçonnerie'), category: t('home.portfolio.previewItems.0.category', 'Maçonnerie'), image: "/renovation-generale_01_thumb.jpg" },
              { id: 2, title: t('home.portfolio.previewItems.1.title', 'Travaux de Charpente'), category: t('home.portfolio.previewItems.1.category', 'Menuiserie'), image: "/renovation-generale_02_thumb.jpg" },
              { id: 3, title: "Rénovation Commerciale", category: "Structure", image: "/renovation-generale_03_thumb.jpg" },
              { id: 4, title: "Structure et Escalier", category: "Finition", image: "/renovation-generale_04_thumb.jpg" }
            ].map((item) => (
              <motion.div key={item.id} variants={fadeInUp} className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/5] block cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-white font-bold text-xl leading-tight line-clamp-2">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center theme-gradient text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg"
            >
              {t('home.portfolio.seeMore')} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Marquee Section */}
      <section 
        className="py-12 md:py-16 overflow-hidden relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888081622-3a5fc58c27dc?w=1920&q=80&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#eab308]/90"></div> {/* Yellow/Amber blend overlay */}
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#eab308] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#eab308] to-transparent z-10 pointer-events-none"></div>
        <div className="text-center mb-8 relative z-20">
          <h2 className="text-white font-extrabold text-2xl md:text-4xl uppercase tracking-wider px-4 drop-shadow-md">
            NOUS SOMMES MEMBRES EN RÈGLE
          </h2>
        </div>
        <div className="cert-ticker-track flex items-center space-x-12 md:space-x-24 relative z-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex space-x-12 md:space-x-24 flex-shrink-0 items-center">
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl tracking-tighter drop-shadow-sm">RBQ</span>
                <span className="text-white text-[10px] md:text-xs font-bold w-48 text-center uppercase leading-tight mt-2">RÉGIE DU BÂTIMENT DU QUÉBEC</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl tracking-tighter italic drop-shadow-sm">ACQ</span>
                <span className="text-white text-[10px] md:text-xs font-bold w-48 text-center uppercase leading-tight mt-2">ASSOCIATION DES ENTREPRENEURS EN CONSTRUCTION DU QUÉBEC</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl tracking-tighter drop-shadow-sm">CSST</span>
                <span className="text-white text-[10px] md:text-xs font-bold w-48 text-center uppercase leading-tight mt-2">COMMISSION DE LA SANTÉ ET DE LA SÉCURITÉ AU TRAVAIL</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl md:text-5xl tracking-tighter drop-shadow-sm">CCQ</span>
                <span className="text-white text-[10px] md:text-xs font-bold w-48 text-center uppercase leading-tight mt-2">COMMISSION DE LA CONSTRUCTION DU QUÉBEC</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">{t('home.testimonials.title')}</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto mb-10"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-7 text-center shadow-xl shadow-black/20">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-yellow-300 mb-4">
                <Star className="w-7 h-7 fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t('home.testimonials.reviewCtaTitle')}</h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                {t('home.testimonials.reviewCtaText')}
              </p>
              <a
                href={googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white text-[#1f3f84] px-6 py-3 text-sm font-bold hover:bg-gray-100 transition-colors"
              >
                {t('home.testimonials.reviewCtaButton')} <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          <TestimonialMarquee />
        </div>
      </section>

    </div>
  );
}
