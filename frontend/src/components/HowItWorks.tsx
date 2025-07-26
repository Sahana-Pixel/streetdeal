import { motion } from "framer-motion";
import BackgroundWrapper from "./BackgroundWrapper";

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Create/Join Vendor Group",
      description: "Vendors in same area form buying groups",
      icon: "👥",
      details: [
        "Share needs (e.g. 100kg tomatoes weekly)",
        "Group buying = better deals"
      ]
    },
    {
      title: "2. Suppliers Bid",
      description: "Suppliers compete with best offers",
      icon: "💰",
      details: [
        "Includes: Price, Quality, Hygiene, Delivery"
      ]
    },
    {
      title: "3. Best Bid Wins",
      description: "Platform selects optimal offer",
      icon: "🏆",
      details: [
        "Vendors pay → Supplier delivers",
        "Backup system if issues",
        "Rating system builds trust"
      ]
    }
  ];

  return (
    <BackgroundWrapper className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold mb-8 text-center text-white"
        >
          How It Works
        </motion.h1>

        <div className="relative">
          {/* Vertical connecting line only */}
<div className="absolute left-9 top-5 bottom-5 w-[3px] bg-gradient-to-b from-blue-100/30 via-blue-400/20 to-transparent z-0"></div>
          
          <div className="space-y-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
                }}
              >
                <div className="flex gap-4 items-start">
                  <div 
                    className="text-2xl p-3 bg-blue-500/20 rounded-lg backdrop-blur-sm"
                    style={{
                      boxShadow: "inset 0 2px 4px rgba(255,255,255,0.1)"
                    }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">{step.title}</h2>
                    <p className="text-blue-100 text-sm mb-2">{step.description}</p>
                    <ul className="text-blue-100/80 text-sm space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-blue-300">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
         
        </motion.div>
      </div>
    </BackgroundWrapper>
  );
};

export default HowItWorks;