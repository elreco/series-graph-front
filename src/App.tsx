import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import UserPrivacy from './components/UserPrivacy';
import Support from './components/Support';
import DeepLinkRedirect from './components/DeepLinkRedirect';
import './globals.css';
function RedirectToMainDomain() {
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    // Check if we're on coderocket.app domain
    if (window.location.hostname.includes('coderocket.app')) {
      setShouldRedirect(true);
      // Start countdown
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      // Redirect after 3 seconds
      const redirectTimer = setTimeout(() => {
        const newUrl = `https://www.watchpeak.app${location.pathname}${location.search}${location.hash}`;
        window.location.replace(newUrl);
      }, 3000);
      return () => {
        clearInterval(countdownInterval);
        clearTimeout(redirectTimer);
      };
    }
  }, [location]);
  if (!shouldRedirect) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center bg-[#0B0B1D] px-4">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Logo with glow effect */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-[#00e5ff] opacity-20 blur-2xl animate-pulse"></div>
          <img
            src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763155339627-75000060-f001-47f8-8b29-4f83ca1ef6a4-0.png"
            alt="Watch Peak"
            className="relative h-24 w-24 sm:h-32 sm:w-32"
          />
        </div>
        {/* Message */}
        <div className="space-y-4">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            We've Moved!
          </h1>
          <p className="text-lg text-gray-300 sm:text-xl">
            Watch Peak is now at
          </p>
          <div className="rounded-lg bg-[#00e5ff]/10 px-6 py-3">
            <p className="font-semibold text-[#00e5ff] text-xl sm:text-2xl">
              www.watchpeak.app
            </p>
          </div>
          <p className="text-sm text-gray-400 sm:text-base">
            Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
          </p>
        </div>
        {/* Progress bar */}
        <div className="w-full max-w-xs">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
            <div 
              className="h-full bg-gradient-to-r from-[#00e5ff] to-[#d4ff00] transition-all duration-1000 ease-linear"
              style={{ 
                width: `${((3 - countdown) / 3) * 100}%` 
              }}
            ></div>
          </div>
        </div>
        {/* Manual redirect button */}
        <button
          onClick={() => {
            const newUrl = `https://www.watchpeak.app${location.pathname}${location.search}${location.hash}`;
            window.location.replace(newUrl);
          }}
          className="mt-4 rounded-lg border-2 border-[#00e5ff] bg-transparent px-6 py-3 font-semibold text-[#00e5ff] transition-all hover:bg-[#00e5ff]/10"
        >
          Go Now
        </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <RedirectToMainDomain />
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/user-privacy" element={<UserPrivacy />} />
          <Route path="/support" element={<Support />} />
          {/* Deep Link Routes - Redirect to home if app not installed */}
          <Route path="/app" element={<DeepLinkRedirect />} />
          <Route path="/show/:id" element={<DeepLinkRedirect />} />
          <route path="/movie/:id" element={<DeepLinkRedirect />} />
          <Route path="/user/:id" element={<DeepLinkRedirect />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;