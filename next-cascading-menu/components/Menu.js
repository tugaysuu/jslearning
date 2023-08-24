function Menu({ onSelect }) {
  return (
    <div className="menu">
      <div className="heading">Menu</div>
      <button onClick={() => onSelect("option1")}>Option 1</button>
      <button onClick={() => onSelect("option2")}>Option 2</button>
      <button onClick={() => onSelect("option3")}>Option 3</button>
      <button onClick={() => onSelect("option4")}>Option 4</button>
      <button onClick={() => onSelect("option5")}>Option 5</button>
      <style jsx>{`
        .menu {
          position: absolute;
          top: 0px;
          left: 180px;
          width: 150px;
          height: 100vh;
          background-color: white;
          transform: translateX(-180px);
          transition: transform 0.3s;
        }
        .menu.show {
          transform: translateX(0);
        }
        .heading {
          text-align: center;
          padding: 10px;
          font-weight: bold;
        }
        button {
          background-color: lightblue;
          display: block;
          width: 100%;
          border: none;
          padding: 10px 15px;
          margin: 5px 0;
          text-align: left;
          box-shadow: inset 0 -3px 7px -3px #888;
          cursor: pointer;
        }
        button:hover {
          background-color: #adebeb;
        }
      `}</style>
    </div>
  );
}

export default Menu;
