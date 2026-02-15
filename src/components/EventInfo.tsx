import { motion } from 'framer-motion';
import { Calendar, Clock, Users, IndianRupee, Trophy } from 'lucide-react';

export default function EventInfo() {
  const details = [
    { icon: Calendar, label: 'DATE', value: '26/02/26' },
    { icon: Clock, label: 'TIME', value: '10:00 AM' },
    { icon: Users, label: 'TEAM', value: '4 MEMBERS' },
    { icon: IndianRupee, label: 'ENTRY', value: '₹50 PER PERSON' },
    { icon: Trophy, label: 'PRIZE', value: '₹10,000' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-red-600 mb-4"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              textShadow: '0 0 20px rgba(255, 26, 26, 0.6)'
            }}
          >
            MISSION BRIEFING
          </h2>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 border-l-4 border-red-600 pl-6 py-4 bg-black/40 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 20px rgba(255, 26, 26, 0.2)'
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <detail.icon className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
              </motion.div>

              <div className="flex-1">
                <p className="text-red-400 text-xs md:text-sm tracking-widest mb-1 font-mono">
                  {detail.label}
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-white text-xl md:text-3xl font-semibold tracking-wide"
                  style={{ fontFamily: "'Courier Prime', monospace" }}
                >
                  {detail.value}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
