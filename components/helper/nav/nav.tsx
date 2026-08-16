"use client";
import { useState } from "react";
import MobileNav from "./mobile_nav";
import NavBar from "./nav_bar";

function Nav() {
  const [showNav, setShowNav] = useState(false);
  const showHandler = () => setShowNav(true);
  const closeHandler = () => setShowNav(false);
  return (
    <div>
      <NavBar showNav={showHandler} />
      <MobileNav showNav={showNav} closeNav={closeHandler} />
    </div>
  );
}

export default Nav;
