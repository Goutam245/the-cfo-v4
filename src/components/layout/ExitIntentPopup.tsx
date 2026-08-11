import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

export const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exitShown")) {
      setShown(true);
      return;
    }
    const t = setTimeout(() => {
      if (!shown) {
        setOpen(true);
        setShown(true);
        sessionStorage.setItem("exitShown", "1");
      }
    }, 30000);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-[hsl(var(--navy)/0.6)] backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full bg-[hsl(var(--card-warm))] rounded-2xl p-8 border border-[hsl(var(--border-warm))] shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg inline-flex items-center justify-center text-[hsl(var(--body-text))] hover:bg-[hsl(var(--secondary-warm))]"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="icon-tile mb-4">
              <TrendingDown className="w-5 h-5" />
            </div>
            <p className="overline mb-2">Before you go</p>
            <h3 className="text-2xl font-extrabold text-[hsl(var(--navy))] tracking-tight mb-3">
              See how much you could save
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Compare a full-time CFO hire against TheCFO.Site fractional model.
              Most firms save $200K+ annually.
            </p>
            <Link
              to="/resources"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Explore our free resources for your business →
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
