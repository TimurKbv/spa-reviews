import React from "react";
import Watch from "./Watch.component";
import LanguageSelectorComponent from "./LanguageSelector.component";


class Header extends React.Component {
  render() {
    return (
      <header className="bg-slate-900 px-8 py-4 flex justify-between items-center">
        <img
          src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ28lMjBwbmd8ZW58MHx8MHx8fDA%3D"
          alt="Logo"
          className="h-10"
        />
        <div className="flex gap-3 items-center">
          <Watch />
          <LanguageSelectorComponent />
        </div>
      </header>
    );
  }
}

export default Header;