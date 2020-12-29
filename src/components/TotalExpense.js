import React, {Component} from "react";

class TotalExpense extends Component {

  state = {
    font_size : "text-6xl"
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    return (
      <div className="bg-gray-800 row-span-2 my-auto">
        <div className="w-full text-center">
          <h1 className="text-gray-400">Current balance</h1>
          <div className={`flex w-full justify-center mt-10 text-${this.props.theme}-300`}>
            <h1 className="font-bold text-sm mr-2 mt-2">
              {this.props.curency}{" "}
            </h1>
            <h1 className="md:text-6xl text-5xl">
              {this.numberWithCommas(
                this.props.expense.reduce((prev, cur) => {
                if (cur.type === "Expense") {
                  return prev - cur.value;
                } else {
                  return prev + cur.value;
                }
              }, 0)
              ) }
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalExpense;
