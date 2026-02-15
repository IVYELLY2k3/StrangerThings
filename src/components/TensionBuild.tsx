import { motion } from 'framer-motion';

export default function TensionBuild() {
  const lines = [
    "Not everyone makes it.",
    "Not every clue is obvious.",
    "Not every team survives.",
  ];

  const trustLines = [
    "You don't need to watch Stranger Things.",
    "You just need a team you trust.",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: index * 0.8, duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl text-gray-200 text-center font-light leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {line}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          viewport={{ once: true }}
          className="pt-16 space-y-6"
        >
          {trustLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 + index * 0.6, duration: 1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl lg:text-3xl text-red-400 text-center font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
