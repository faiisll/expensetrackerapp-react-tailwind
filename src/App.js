import "./App.css";
import React, {Component} from "react";
import TotalExpense from "./components/TotalExpense";
import Navbar from "./components/Navbar";
import ExpenseList from "./components/ExpenseList";
import BtnAdd from "./components/BtnAdd";
import BtnSetting from './components/BtnSetting';
import FormAdd from "./components/FormAdd";
import FormSetting from './components/FormSetting';
import {BrowserRouter, Switch, Route} from "react-router-dom";

class App extends Component {
  state = {
    expense: [],
    menu: "All",
    curency: "IDR",
    theme: "yellow"
  };

  setDefaultLocal = () =>{
    localStorage.setItem("curency", "USD");
    localStorage.setItem("theme", "yellow");
    localStorage.setItem("expense", JSON.stringify([]))
    
  }
  updateLocal = (data) => {
    localStorage.clear();
    localStorage.setItem("expense", JSON.stringify(data));
    localStorage.setItem("curency", this.state.curency);
    localStorage.setItem("theme", this.state.theme);
  };

  handleMenu = (menu) => {
    this.setState({
      menu,
    });
  };

  handleSetting = (data) => {
    this.setState({
      expense: data.expense,
      curency: data.curency,
      theme: data.theme
    });

    localStorage.setItem("expense", JSON.stringify(data.expense));
    localStorage.setItem("curency", data.curency);
    localStorage.setItem("theme", data.theme);
  }

  addData = (data) => {
    data.id = Math.random();
    data.value = parseInt(data.value);
    this.setState({
      expense: [...this.state.expense, data],
    });

    this.updateLocal([...this.state.expense, data]);
  };

  deleteData = (data) => {
    let newData = this.state.expense.filter(exp => exp.id !== data.id);

    this.setState({
      expense: newData,
    });

    this.updateLocal([...newData]);
  };

  componentDidMount() {
    const json = localStorage.getItem("expense");
    const expense = JSON.parse(json) || [];
    const curency = localStorage.getItem("curency");
    const theme = localStorage.getItem("theme");

    // if(!curency && !theme){
    //   this.setDefaultLocal();
      
    // }
    this.setState({expense, curency, theme});    
    
  }

  render() {
    const curency = localStorage.getItem("curency");
    const theme = localStorage.getItem("theme");

    if(!curency && !theme){
      this.setDefaultLocal();
      
    }
    
    return (
      <div className="App w-full flex justify-center">
        <div className="w-screen h-screen grid bg-gray-800 grid-rows-5 relative">
          {/* top section */}

          
          <TotalExpense expense={this.state.expense} curency={this.state.curency} theme={this.state.theme} />

          {/* bottom section */}

          <BrowserRouter>
            <div className="relative bg-gray-900 row-span-3 text-white rounded-t-3xl shadow-2xl pt-10 px-4 grid grid-rows-6">
              <Switch>
                <Route exact path="/">
                  <BtnSetting />

                  {/* menu section */}
                  <Navbar handleMenu={this.handleMenu} theme={this.state.theme} />

                  <BtnAdd theme={this.state.theme} />

                  {/* expense section */}
                  <ExpenseList
                    expense={this.state.expense}
                    menu={this.state.menu}
                    deleteData={this.deleteData}
                    curency={this.state.curency}
                  />

                  
                </Route>

                <Route path="/add">
                  <FormAdd addData={this.addData} theme={this.state.theme} />
                </Route>
                <Route path='/setting'>
                  <FormSetting handleSetting={this.handleSetting} expense={this.state.expense} theme={this.state.theme} />
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
