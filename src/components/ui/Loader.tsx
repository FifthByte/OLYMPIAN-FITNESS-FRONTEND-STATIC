import { motion } from "framer-motion";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

export default function Loader({ size = "md", text = "FORGING...", fullScreen = false }: LoaderProps) {
  // Determine sizing classes
  const sizeMap = {
    sm: { container: "h-12 w-12", svg: "w-8 h-8", text: "text-[10px]" },
    md: { container: "h-24 w-24", svg: "w-16 h-16", text: "text-xs" },
    lg: { container: "h-36 w-36", svg: "w-24 h-24", text: "text-sm" },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className="flex flex-col h-screen items-center justify-center gap-5">
      <div className={`relative flex items-center justify-center ${currentSize.container}`}>
        {/* Glow behind the dumbbell */}
        <div className="absolute h-2/3 w-2/3 rounded-full bg-primary/20 blur-xl animate-pulse" />

        {/* Circular spinning gradient ring */}
        <svg className="absolute inset-0 h-full w-full animate-[spin_3s_linear_infinite]" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#loaderGrad)"
            strokeWidth="2.5"
            strokeDasharray="60 180"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--gold)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Pulsing dumbbell performing a "rep" */}
        <motion.div
          animate={{
            y: [4, -12, 4],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 flex items-center justify-center text-foreground"
        >
          <svg
            viewBox="0 0 100 100"
            className={`${currentSize.svg}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* The metal bar */}
            <path d="M 30,50 H 70" strokeWidth="5.5" stroke="var(--foreground)" />
            
            {/* Left inner collar */}
            <path d="M 30,40 V 60" strokeWidth="3.5" stroke="var(--gold)" />
            {/* Left Plate 1 (Gold/Accent) */}
            <rect x="21" y="31" width="6" height="38" rx="2.5" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1" />
            {/* Left Plate 2 (Electric Blue/Primary) */}
            <rect x="11" y="22" width="7" height="56" rx="3.5" fill="var(--primary)" stroke="var(--primary)" strokeWidth="1" />

            {/* Right inner collar */}
            <path d="M 70,40 V 60" strokeWidth="3.5" stroke="var(--gold)" />
            {/* Right Plate 1 (Gold/Accent) */}
            <rect x="73" y="31" width="6" height="38" rx="2.5" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1" />
            {/* Right Plate 2 (Electric Blue/Primary) */}
            <rect x="82" y="22" width="7" height="56" rx="3.5" fill="var(--primary)" stroke="var(--primary)" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Floor shadow under the dumbbell that scales with height */}
        <motion.div
          animate={{
            scaleX: [1, 0.6, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-2 h-1 w-10 rounded-full bg-black/40 blur-[2px]"
        />
      </div>

      {/* Loading Text */}
      {text && (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className={`font-display font-bold tracking-[0.3em] text-muted-foreground uppercase ${currentSize.text}`}
        >
          {text}
        </motion.div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-200 grid place-items-center bg-background noise">
        {content}
      </div>
    );
  }

  return content;
}