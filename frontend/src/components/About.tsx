import { motion } from "framer-motion";
import BackgroundWrapper from "./BackgroundWrapper";

const About = () => {
  const sections = [
    {
      title: "Who We Are",
      content: "We are a team passionate about helping local street vendors thrive by connecting them with reliable suppliers through technology.",
      icon: "👥"
    },
    {
      title: "Why We Started This",
      content: "We noticed many small vendors were overpaying or facing delivery issues. We built this to solve that.",
      icon: "💡"
    },
    {
      title: "What We Do",
      content: "We let vendors create group orders. Suppliers place bids. The best one wins. Everyone saves time and money.",
      icon: "🛠️"
    },
    {
      title: "Our Mission & Vision",
      content: (
        <>
          <p className="mb-3"><span className="font-bold">Mission:</span> Empower local vendors with better access to supplies.</p>
          <p><span className="font-bold">Vision:</span> Create a transparent, reliable, and affordable supply network for every vendor.</p>
        </>
      ),
      icon: "🌍"
    }
  ];

  return (
    <BackgroundWrapper className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent"
        >
          About StreetDeal
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl p-3 bg-blue-500/20 rounded-lg">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
                  <div className="text-blue-100/90">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Join Our Movement</h3>
          <p className="text-blue-200 max-w-2xl mx-auto mb-8">
            Together we can build a stronger local economy where every vendor has access to quality supplies at fair prices.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="/vendor/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Become a Vendor
            </motion.a>
            <motion.a
              href="/supplier/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-400 hover:border-blue-300 text-blue-400 hover:text-blue-300 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Become a Supplier
            </motion.a>
          </div>
        </motion.div>
      </div>
    </BackgroundWrapper>
  );
};

export default About;