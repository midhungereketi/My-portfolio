import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4 relative inline-block">
          {title}
          <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary via-tertiary to-quaternary rounded-full" />
        </h2>
        {subtitle && (
          <p className="text-textMuted mt-4 max-w-2xl mx-auto font-inter text-lg">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};
