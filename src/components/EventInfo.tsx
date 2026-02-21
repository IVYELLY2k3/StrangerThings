import { motion } from 'framer-motion';
import { Calendar, Clock, Users, IndianRupee, Trophy } from 'lucide-react';

export default function EventInfo() {
  const details = [
    { icon: Calendar, label: 'DATE_LOG', value: '26/02/26' },
    { icon: Clock, label: 'TIME_SYNC', value: '10:00 AM' },
    { icon: Users, label: 'OPERATIVES', value: '4 MEMBERS' },
    { icon: IndianRupee, label: 'ACCESS_FEE', value: '₹50 / AGENT' },
    { icon: Trophy, label: 'BOUNTY', value: '₹10,000' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-black relative">
      {/* Scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,0,0,0.02),rgba(255,0,0,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />

      <div className="max-w-4xl w-full z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-left mb-8 border-b-2 border-red-900/50 pb-2"
        >
          <h2 className="text-2xl md:text-5xl font-mono font-bold text-red-600 tracking-tighter">
            {'>'} MISSION_LOG_2026
          </h2>
          <p className="text-gray-400 font-mono mt-1 tracking-widest text-xs md:text-base">
            // TERMINAL_ACCESS_GRANTED
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 border border-red-900/30 p-3 bg-black/80 hover:bg-red-900/10 transition-colors"
            >
              <div className="text-red-700 group-hover:text-red-500 transition-colors">
                <detail.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>

              <div className="flex-1 font-mono">
                <p className="text-red-900 text-xs tracking-widest mb-1 group-hover:text-red-700 transition-colors">
                  [{detail.label}]
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-300 text-xl md:text-2xl font-bold tracking-wide group-hover:text-white group-hover:shadow-[0_0_10px_rgba(220,38,38,0.5)] transition-all">
                    {detail.value}
                  </p>
                  <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="w-2 h-4 bg-red-600 opacity-50 hidden group-hover:block"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-red-500 text-xs md:text-sm tracking-widest font-mono"
        >
          SCROLL TO CONTINUE
        </motion.div>
      </motion.div>
    </div>
  );
}
