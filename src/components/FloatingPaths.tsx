import { motion } from 'framer-motion';

export default function FloatingPaths() {
  const paths = Array.from({ length: 36 }, (_, i) => {
    const baseRadius = 600 + i * 30;
    return {
      id: i,
      d: `M-${baseRadius} -${baseRadius / 3} C-${baseRadius * 0.5} ${baseRadius * 0.2}, ${baseRadius * 0.5} -${baseRadius * 0.2}, ${baseRadius} ${baseRadius / 3}`,
      width: 0.5 + i * 0.03,
      opacity: 0.1 + i * 0.01,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
        viewBox="-1200 -600 2400 1200"
        fill="none"
      >
        <title>Floating Paths Background</title>
        {paths.map((path) => (
          <motion.path
            key={`pos-${path.id}`}
            d={path.d}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: path.opacity }}
            transition={{
              pathLength: { duration: 15 + path.id * 0.5, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
              opacity: { duration: 2, delay: path.id * 0.1 },
            }}
          />
        ))}
        {paths.map((path) => (
          <motion.path
            key={`neg-${path.id}`}
            d={path.d}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={path.width}
            strokeOpacity={path.opacity * 0.5}
            fill="none"
            transform="scale(-1, 1)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: path.opacity * 0.5 }}
            transition={{
              pathLength: { duration: 18 + path.id * 0.5, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
              opacity: { duration: 2, delay: path.id * 0.1 },
            }}
          />
        ))}
      </svg>
    </div>
  );
}
