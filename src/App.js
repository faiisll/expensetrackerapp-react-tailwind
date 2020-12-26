import "./App.css";
import React, {Component} from "react";
import TotalExpense from "./components/TotalExpense";
import Navbar from "./components/Navbar";
import ExpenseList from "./components/ExpenseList";
import BtnAdd from "./components/BtnAdd";
import FormAdd from './components/FormAdd';
import {BrowserRouter, Switch, Route} from "react-router-dom";

class App extends Component {
  state = {
    expense: [
      {
        id: 1,
        title: "Payment freelance",
        type: "Income",
        value: 400,
        date: "2/5/2021",
      },
      {
        id: 2,
        title: "buy milk",
        type: "Expense",
        value: 200,
        date: "7/12/2018",
      },
    ],
    menu: "All",
  };

  updateLocal = (data) => {
    localStorage.setItem('expense', JSON.stringify(data));
  }

  // handleTotal = () => {
  //   this.setState({
  //     total: 0
  //   });

  //   const total =  this.state.expense.reduce( (prev, cur) => {
  //     if(cur.type === "Expense"){
  //       return prev - cur.value
  //     }else{
  //       return prev + cur.value
  //     }
  //   },0);

  //   this.setState({
  //     total
  //   });
  // }

  handleMenu = (menu) => {
    this.setState({
      menu,
    });
  };

  addData = (data) => {
    data.id = Math.random();
    data.value = parseInt(data.value);
    this.setState({
      expense: [...this.state.expense, data]
    });

    this.updateLocal([...this.state.expense, data]);
  }
  
  deleteData = data => {
    let newData = this.state.expense.filter( exp => exp.id !== data.id);

    this.setState({
      expense: newData
    });

    this.updateLocal([...this.state.expense]);

  }

  componentDidMount(){
    const json = localStorage.getItem("expense");
    const expense = JSON.parse(json) || [];
    this.setState({
      expense
    })
  }


  render() {
    return (
      <div className="App w-full flex justify-center">
        <div className="w-screen h-screen grid bg-gray-800 grid-rows-5">
          {/* top section */}
          <TotalExpense expense={this.state.expense}/>

          {/* bottom section */}

          <BrowserRouter>
          <div className="relative bg-gray-900 row-span-3 text-white rounded-t-3xl shadow-2xl pt-10 px-4 grid grid-rows-6">
            <Switch>
              <Route exact path="/">
                {/* menu section */}
                <Navbar handleMenu={this.handleMenu} />

                {/* expense section */}
                <ExpenseList
                  expense={this.state.expense}
                  menu={this.state.menu}
                  deleteData={this.deleteData}
                />

                <BtnAdd />
              </Route>

              <Route path="/add">
                <FormAdd addData={this.addData} />
              </Route>
            </Switch>

            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
