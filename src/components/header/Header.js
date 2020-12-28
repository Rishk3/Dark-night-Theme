import React from 'react'
import "./header.css";
function Header({darkMode,setDarkMode}) {
    return (
        <div>
           <nav className="nav">
        <div className="nav__title">
          Rishky-Motion
        </div>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>
        </div>
    )
}

export default Header
