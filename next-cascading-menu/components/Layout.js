// components/Layout.js
import Menu from "./Menu";
import SubMenu from "./SubMenu";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const router = useRouter();

  const mainMenuRef = useRef(null);
  const submenuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        mainMenuRef.current &&
        !mainMenuRef.current.contains(event.target) &&
        submenuRef.current &&
        !submenuRef.current.contains(event.target)
      ) {
        setSelectedMenu(null);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleMainMenuSelect = (option) => {
    setSelectedMenu(option);
  };

  const handleSubMenuSelect = (page) => {
    setSelectedMenu(null);
    router.push(`/${page}`);
  };

  return (
    <div className="layout">
      <button
        className="menuButton"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        &#9776;
      </button>

      {isMenuVisible && (
        <div ref={mainMenuRef} className="mainMenu">
          <Menu onSelect={handleMainMenuSelect} />
        </div>
      )}

      {isMenuVisible && selectedMenu && (
        <div ref={submenuRef} className="submenuContainer">
          <SubMenu selectedMenu={selectedMenu} onSelect={handleSubMenuSelect} />
        </div>
      )}

      <div className="content">{children}</div>

      <style jsx>{`
        .layout {
          display: flex;
          position: relative;
        }
        .menuButton {
          background-color: lightbrown;
          border: none;
          font-size: 24px;
          cursor: pointer;
          position: absolute;
          top: 10px;
          left: 10px;
        }
        .menuButton:focus {
          outline: none;
        }
        .mainMenu {
          position: absolute;
          top: 50px;
          left: 60px; // Adjusted to open on the right side of the hamburger
        }
        .submenuContainer {
          position: absolute;
          top: 50px;
          left: 250px; // Adjusted for the width of the main menu + padding
        }
      `}</style>
    </div>
  );
}

