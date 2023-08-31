
function SubMenu({ onSelect, selectedMenu }) {
  let buttons = [];

  switch (selectedMenu) {
    case "option1":
      buttons.push(
        <button className="button1" key="page1" onClick={() => onSelect("page1")}>
          Page 1
        </button>
      );
      break;
    case "option2":
      buttons.push(
        <button className="button1" key="page2" onClick={() => onSelect("page2")}>
          page3
        </button>
      );
      buttons.push(
        <button className="button1" key="page3" onClick={() => onSelect("page3")}>
          Page 3
        </button>
      );
      break;
    case "option3":
      buttons.push(
        <button className="button1" key="page4" onClick={() => onSelect("page4")}>
          Page 4
        </button>
      );
      break;
    case "option4":
      buttons.push(
        <button className="button1" key="page5" onClick={() => onSelect("page5")}>
          Page 5
        </button>
      );
      buttons.push(
        <button className="button1" key="page6" onClick={() => onSelect("page6")}>
          Page 6
        </button>
      );
      break;
    case "option5":
      buttons.push(
        <button className="button1" key="page7" onClick={() => onSelect("page7")}>
          Page 7
        </button>
      );
      break;

  }

  

  return (
    <div className="submenu">
      <div className="subheading">Submenu</div>
      {buttons}

      
    </div>
  );
}

export default SubMenu;
