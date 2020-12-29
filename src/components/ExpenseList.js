import React from "react";

const ExpenseList = ({expense, menu, deleteData}) => {

    let color = "red";
    let symbol = "-";

    let numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    let data = expense.filter( exp => {
        if(menu === "All"){
            return exp;
        }else{
            return (exp.type === menu);
        }
    });

    let jsx = data.map((d) => {
        if(d.type === "Income"){
            color = "green";
            symbol = "+";
        }else{
            color = "red";
            symbol = "-";
        }

        return(
        <div className="p-4 border-b border-gray-800 flex justify-between" onClick={() => window.confirm("Are u sure delete this item?") && deleteData(d)} key={d.id}>
          <div className="flex">
            <div className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className={`w-8 h-8 text-${color}-300`}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-sm font-medium">{d.title}</h1>
              <p className="text-xs opacity-50">{d.date}</p>
            </div>
          </div>

          <h1 className={`text-${color}-300 font-semibold`}>{symbol} {numberWithCommas(d.value)}</h1>
        </div>
        )
    });


  return (
    <div className="flex flex-col mt-2 row-span-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white mt-3">
      {/* expense item */}
      {jsx}
    </div>
  );
};
export default ExpenseList;
