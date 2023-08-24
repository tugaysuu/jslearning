// components/SubMenu.js
function SubMenu({ onSelect, selectedMenu }) {
  let buttons = [];

  switch (selectedMenu) {
    case "option1":
      buttons.push(
        <button key="page1" onClick={() => onSelect("page1")}>
          Page 1
        </button>
      );
      break;
    case "option2":
      buttons.push(
        <button key="page2" onClick={() => onSelect("page2")}>
          Page 2
        </button>
      );
      buttons.push(
        <button key="page3" onClick={() => onSelect("page3")}>
          Page 3
        </button>
      );
      break;
    case "option3":
      buttons.push(
        <button key="page4" onClick={() => onSelect("page4")}>
          Page 4
        </button>
      );
      break;
    case "option4":
      buttons.push(
        <button key="page5" onClick={() => onSelect("page5")}>
          Page 5
        </button>
      );
      buttons.push(
        <button key="page6" onClick={() => onSelect("page6")}>
          Page 6
        </button>
      );
      break;
    case "option5":
      buttons.push(
        <button key="page7" onClick={() => onSelect("page7")}>
          Page 7
        </button>
      );
      break;
    // Add more cases if needed.
  }

  console.log("Selected Menu:", selectedMenu, "Buttons:", buttons);

  return (
    <div className="submenu">
      <div className="subheading">Submenu</div>
      {buttons}

      <style jsx>{`
        .submenu {
          position: absolute;
          border: 1px solid;
          border-radius: 10px;
          border-color: blue, yellow, green, yellow;
          border: outset;
          top: 15px;
          left: 150px;
          width: 150px;
          height: 50vh;
          background-color: rgba(55, 234, 124,0.1);
          transform: translateX(-180px);
          transition: transform 0.3s;
        }
        .submenu.show {
          transform: translateX(0);
        }
        .subheading {
          text-align: center;
          padding: 10px;
          font-weight: bold;
        }
        button1 {
          background-color: #5da9da;
          display: block;
          width: 100%;
          border: none;
          padding: 10px 15px;
          margin: 5px 0;
          text-align: left;
          box-shadow: inset 0 -3px 7px -3px #666;
          cursor: pointer;
        }
        button:hover {
          background-color: #4a8bb2;
        }
      `}</style>
    </div>
  );
}

export default SubMenu;
