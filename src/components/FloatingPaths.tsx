import { motion } from 'framer-motion';

export default function FloatingPaths() {
  const paths = Array.from({ length: 36 }, (_, i) => {
    const spread = i * 12;
    const curveOffset = i * 8;
    return {
      id: i,
      d: `M${1400 + spread} ${800 + curveOffset} Q${600 - i * 15} ${400 + i * 5}, ${-400 - spread} ${-200 - curveOffset}`,
      width: 0.4 + i * 0.04,
      opacity: 0.05 + i * 0.012,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Floating Paths Background</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: path.opacity }}
            transition={{
              pathLength: { duration: 10 + path.id * 0.3, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
              opacity: { duration: 1.5, delay: path.id * 0.05 },
            }}
          />
        ))}
      </svg>
    </div>
  );
}
