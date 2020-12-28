import React, {Component} from "react";
import "../style/Navbar.css";

class Navbar extends Component {

    state = {
        menu: "All"
    }

    handleClick = e => {
        let element = e.target.parentElement.childNodes;
        for (var el of element){
            el.classList.remove(`bg-${this.props.theme}-500`);
        }
          e.target.classList.add(`bg-${this.props.theme}-500`);

        this.props.handleMenu(e.target.innerHTML);

    }

    

  render() {
    return (
      <div className="w-full flex justify-center row-span-1">
        <div className={`rounded-xl bg-gray-800 text-xs text-white flex justify-center mt-4`}>
          <button onClick={this.handleClick} className={`p-2 px-4 font-bold rounded-xl bg-${this.props.theme}-500`}>All</button>
          <button onClick={this.handleClick} className="p-2 px-4 font-bold rounded-xl">Income</button>
          <button onClick={this.handleClick} className="p-2 px-4 font-bold rounded-xl">Expense</button>
        </div>
      </div>
    );
  }
}
export default Navbar;
