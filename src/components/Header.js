import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Styles/Header.css";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Hook to detect current page

  return (
    <header className="header">
      {/* Left: Logo */}
      <div>
    <span>Logo</span>
  </div>

      {/* Center: Nav Links */}
      <nav className="nav-links">
        <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
        <Link to="/about" className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
        <Link to="/parties" className={`nav-item ${location.pathname === "/parties" ? "active" : ""}`}>Events</Link>
        <Link to="/corporate" className={`nav-item ${location.pathname === "/corporate" ? "active" : ""}`}>Corporate</Link>
        <Link to="/weddings" className={`nav-item ${location.pathname === "/weddings" ? "active" : ""}`}>Weddings</Link>
      </nav>

      {/* Right: Icons and Menu */}
      <div className="header-right">
        <div className="header-icons">
          <a href="mailto:luxurywellnessbynicola@gmail.com" className="header-icon-link" title="Email Nicola">
            <MailOutlineIcon fontSize="medium" />
          </a>
          <a
            href="https://www.instagram.com/luxurywellnessbynicola?igsh=MWlxYzFxazczdGtlNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon-link"
            title="Instagram"
          >
            <InstagramIcon fontSize="medium" />
          </a>
        </div>

        <IconButton onClick={() => setOpen(true)} className="menu-icon">
          <MenuIcon />
        </IconButton>
      </div>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-64 p-4">
          <IconButton onClick={() => setOpen(false)} className="mb-4">
            <CloseIcon />
          </IconButton>
          <List>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Events", path: "/parties" },
              { name: "Corporate", path: "/corporate" },
              { name: "Weddings", path: "/weddings" },
            ].map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className={`drawer-link ${location.pathname === item.path ? "active" : ""
                  }`}
                onClick={() => setOpen(false)}
              >
                <ListItem button>
                  <ListItemText primary={item.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>


    </header>
  );
}





