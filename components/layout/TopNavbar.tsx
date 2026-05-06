import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";




function TopNavbar() {
  return (
    <>
      <div className="bg-orange-700 text-white py-1 px-4">
        <div className="flex justify-between items-center text-sm">

          {/* left end */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            <a
              href="https://www.google.com/maps?q=Itahari-17,+Sunsari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Itahari-17, Sunsari</span>
            </a>

            <a
              href="mailto:standardschool2051@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">standardschool2051@gmail.com</span>
            </a>

            <a
              href="tel:025590085"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">025-590085</span>
            </a>
          </div>

          {/* right end */}
          <div className="flex items-center gap-2 md:gap-2 lg:gap-3">
            <a
              href="https://www.facebook.com/100046922456345/about/?_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@standard.boarding?_r=1&_t=ZS-95gRDyVHNX5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {/* TikTok SVG , since lucide doesn't have it */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
              >
                <path d="M16 3c.3 2.5 1.8 4 4 4v3c-1.5 0-2.9-.4-4-1v6.5a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v3.1a2.5 2.5 0 1 0 2.5 2.5V3h2z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default TopNavbar;
