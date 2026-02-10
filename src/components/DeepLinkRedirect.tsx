import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export default function DeepLinkRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Try to open the app with a custom URL scheme
    const appScheme = `seriesgraph:/${location.pathname}${location.search}`;
    // Create a hidden iframe to attempt opening the app
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appScheme;
    document.body.appendChild(iframe);
    // Set a timeout to redirect to home if app doesn't open
    const redirectTimer = setTimeout(() => {
      // Clean up iframe
      document.body.removeChild(iframe);
      // Redirect to home page
      navigate('/', { replace: true });
    }, 2000); // Wait 2 seconds before redirecting
    // Try to detect if user left the page (app opened)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User likely switched to the app, clear the redirect timer
        clearTimeout(redirectTimer);
        document.body.removeChild(iframe);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    // Cleanup
    return () => {
      clearTimeout(redirectTimer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    };
  }, [navigate, location]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B0B1D] px-4 py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <img
            src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763155339627-75000060-f001-47f8-8b29-4f83ca1ef6a4-0.png"
            alt="Watch Peak"
            className="h-16 w-16 animate-pulse"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Opening Watch Peak...</h1>
          <p className="text-gray-400">
            If the app doesn't open, you'll be redirected automatically.
          </p>
        </div>
        <div className="mt-4">
          <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-800">
            <div className="h-full w-full animate-[loading_2s_ease-in-out] bg-[#00e5ff]"></div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}