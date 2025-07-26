import { motion } from "framer-motion";
import { Truck, Handshake, DollarSign, Smartphone, ShoppingCart } from "lucide-react";
import BackgroundWrapper from "./BackgroundWrapper";

const Home = () => {
  return (
    // <div className="min-[120vh]-screen">
    <BackgroundWrapper>
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-30 py-10 md:py-28 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-500 via-white to-blue-200 bg-clip-text text-transparent">
                  Connecting Street Vendors with Trusted Suppliers
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-blue-100/90"
              >
                Create group orders. Get better prices. Hassle-free deliveries.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <motion.a
                  href="/vendor/signup"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base font-bold"
                >
                  <span>👉</span> Join as Vendor
                </motion.a>
                
                <motion.a
                  href="/supplier/signup"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 border-2 border-blue-400 hover:border-blue-300 text-blue-400 hover:text-blue-300 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base font-bold"
                >
                  <span>🤝</span> Join as Supplier
                </motion.a>
              </motion.div>

              {/* Why Choose Us Section - Single Line Cards */}
              <div className="pt-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl font-bold mb-5 text-white/90"
                >
                  ⭐ Why Choose Us?
                </motion.h2>

                <div className="flex flex-wrap gap-3">
                  {/* Card 1 */}
                  

                  {/* Card 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 flex items-center gap-2"
                  >
                    <div className="bg-blue-400/20 p-2 rounded-lg shadow-inner">
                      <Handshake className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-white">Trusted Network</span>
                  </motion.div>

                  {/* Card 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 flex items-center gap-2"
                  >
                    <div className="bg-blue-400/20 p-2 rounded-lg shadow-inner">
                      <DollarSign className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-white">Lower Prices</span>
                  </motion.div>

                  {/* Card 4 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 flex items-center gap-2"
                  >
                    <div className="bg-blue-400/20 p-2 rounded-lg shadow-inner">
                      <Smartphone className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-white">Mobile Friendly</span>
                  </motion.div>
                </div>
              </div>
            </div>
            
           {/* Right Side - Image with Glow Effect */}
            <div className="lg:w-1/2 flex flex-col items-center gap-4">
              {/* Caption Above Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Your Local Marketplace</h3>
                <p className="text-blue-200 text-sm md:text-base">Connecting communities through commerce</p>
              </motion.div>

              {/* Glowing Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                transition={{ 
                  duration: 0.8,
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden border-2 border-blue-400/40"
              >
                {/* Your image from public folder */}
                <img 
                  src="/street.jpg" 
                  alt="Street vendors marketplace"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/30 to-blue-900/60"></div>
                
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_10px_rgba(59,130,246,0.3)]"></div>
                </div>
                
                {/* Floating Icons */}
                <motion.div 
                  className="absolute top-4 right-4"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <ShoppingCart className="h-8 w-8 text-white drop-shadow-lg" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 left-4"
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.5
                  }}
                >
                  <Truck className="h-8 w-8 text-white drop-shadow-lg" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
</BackgroundWrapper>  );
};

export default Home;