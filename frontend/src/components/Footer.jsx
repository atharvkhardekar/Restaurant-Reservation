import React from "react";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";

const Footer = () => {
  return (
    <footer style={{ padding: "2rem 0" }}>
      <div className="container">
        {/* Top Section */}
        <div className="banner" style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <div className="left" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>AK's FOOD4U</div>
          <div className="right" style={{ textAlign: "right" }}>
            <p>
              <HiOutlineLocationMarker style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
              Jalna, Maharashtra
            </p>
            <p>
              <HiOutlineClock style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
              Open: 9:00 AM - 11:00 PM
            </p>
          </div>
        </div>

        {/* Social Media and Contact Links */}
        <div className="banner" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p>Connect with Us:</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <a
              href="https://x.com/AtharvaK09"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", fontSize: "1.5rem" }}
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/khardekar_atharv_09/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", fontSize: "1.5rem" }}
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:khardekaratharv@gmail.com"
              style={{ color: "inherit", fontSize: "1.5rem" }}
              title="Gmail"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="banner" style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
          <div className="left">
            <p>Developed By <strong>Atharv Khardekar</strong></p>
          </div>
          <div className="right" style={{ textAlign: "right" }}>
            <p>© {new Date().getFullYear()} All Rights Reserved By Atharv Khardekar.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
