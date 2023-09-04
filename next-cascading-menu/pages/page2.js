"use client";

import Layout from "../components/Layout";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page2() {
  const [meaning, setMeaning] = useState([]);
  const [wordInput, setWordInput] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handleModalResponse = (response) => {
    setShowModal(false);
  };

  const handleWordChange = (event) => {
    setWordInput(event.target.value);
  };

  const handleSubmitWord = async () => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`);
    const data = await res.json();
    if (data && data[0] && data[0].meanings) {
      setMeaning(data);
    }
    
  };
  

  
  return (
    <div className="page-two" >
      {showModal && (
        <div className="input-form">
          <input
            value={wordInput}
            onChange={handleWordChange}
            placeholder="Enter word..."
          />
          <button className="modal-button" onClick={handleSubmitWord}>Submit</button>
        </div>
      )}
      {!showModal && meaning.length > 0 && (
        <div className="meaning">
          <h3>Meanings of {wordInput}</h3>
          <ul>
            {meaning.map((m, index) => (
              <li key={index}>{m}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
