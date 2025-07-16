// src/components/CookieConsent.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-50 border border-gray-200 dark:border-gray-700"
      >
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Accept All
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
          >
            Decline
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}