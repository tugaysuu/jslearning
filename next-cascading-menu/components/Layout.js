
import Menu from "./Menu";
import SubMenu from "./SubMenu";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
        (!submenuRef.current || !submenuRef.current.contains(event.target))
      ) {
        setSelectedMenu(null);
        setIsMenuVisible(false);
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
      <Link href="/">
        <FontAwesomeIcon icon={faHome} className="homeButton" />
      </Link>
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
    </div>
  );
}
