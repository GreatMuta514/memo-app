import React from "react";
import "../css/common.css";
import "../css/Header.css";

function Header() {
  return (
    <>
      <header className="Header">
        <ul>
          <li className="H_logo">
            <p>メモアプリ</p>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
