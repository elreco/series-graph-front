import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import UserPrivacy from './components/UserPrivacy';
import Support from './components/Support';
import DeepLinkRedirect from './components/DeepLinkRedirect';
import './globals.css';
function RedirectToMainDomain() {
  const location = useLocation();
  useEffect(() => {
    // Check if we're on coderocket.app domain
    if (window.location.hostname.includes('coderocket.app')) {
      // Preserve the current path and search params
      const newUrl = `https://www.watchpeak.app${location.pathname}${location.search}${location.hash}`;
      window.location.replace(newUrl);
    }
  }, [location]);
  return null;
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
          <Route path="/movie/:id" element={<DeepLinkRedirect />} />
          <Route path="/user/:id" element={<DeepLinkRedirect />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;