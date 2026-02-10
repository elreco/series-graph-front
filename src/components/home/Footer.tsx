import { FaInstagram } from 'react-icons/fa';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img 
                src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763155339627-75000060-f001-47f8-8b29-4f83ca1ef6a4-0.png" 
                alt="Watch Peak" 
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold text-white">Watch Peak</span>
            </div>
            <p className="text-sm text-gray-400">
              The ultimate companion for TV series enthusiasts
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="transition-colors hover:text-[#00e5ff]">Features</a></li>
              <li><a href="#screenshots" className="transition-colors hover:text-[#00e5ff]">Screenshots</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/support" className="transition-colors hover:text-[#00e5ff]">Contact</a></li>
              <li><a href="/privacy-policy" className="transition-colors hover:text-[#00e5ff]">Privacy</a></li>
              <li><a href="/user-privacy" className="transition-colors hover:text-[#00e5ff]">Privacy Choices</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Follow</h3>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/seriesgraph_app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-[#00e5ff]/10 hover:text-[#00e5ff]"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Watch Peak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}