function Menu({ onSelect }) {
  return (
    <div className="menu">
      <div className="heading">Menu</div>
      <button className="button" onClick={() => onSelect("option1")}>Option 1</button>
      <button className="button" onClick={() => onSelect("option2")}>Option 2</button>
      <button className="button" onClick={() => onSelect("option3")}>Option 3</button>
      <button className="button" onClick={() => onSelect("option4")}>Option 4</button>
      <button className="button" onClick={() => onSelect("option5")}>Option 5</button>
      
    </div>
  );
}

export default Menu;
