import React, {Component} from "react";

class TotalExpense extends Component {
  


  render() {
    return (
      <div className="bg-gray-800 row-span-2 my-auto">
        <div className="w-full text-center">
          <h1 className="text-gray-400">Current balance</h1>
          <h1 className="text-yellow-300 text-6xl mt-10">
          {
            this.props.expense.reduce( (prev, cur) => {
            if(cur.type === "Expense"){
                return prev - cur.value
            }else{
                return prev + cur.value
            }},0)
          }
          </h1>
        </div>
      </div>
    );
  }
}

export default TotalExpense;
