import React, {Component} from "react";
import "../style/Navbar.css";

class Navbar extends Component {

    state = {
        menu: "All"
    }

    handleClick = e => {
        let element = e.target.parentElement.childNodes;
        for (var el of element){
            el.classList.remove("active");
        }
        e.target.classList.add("active");

        this.props.handleMenu(e.target.innerHTML);

    }

    

  render() {
    return (
      <div className="w-full flex justify-center row-span-1">
        <div className="rounded-xl bg-gray-800 text-xs text-gray-400 flex justify-center mt-4">
          <button onClick={this.handleClick} className="p-2 px-4 font-bold rounded-xl active">All</button>
          <button onClick={this.handleClick} className="p-2 px-4 font-bold rounded-xl">Income</button>
          <button onClick={this.handleClick} className="p-2 px-4 font-bold rounded-xl">Expense</button>
        </div>
      </div>
    );
  }
}
export default Navbar;
