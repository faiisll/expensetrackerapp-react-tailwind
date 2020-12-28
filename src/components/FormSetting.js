import React, {Component} from "react";
import {Link, withRouter} from 'react-router-dom';
import '../style/FormSetting.css';

class FormSetting extends Component {
  state = {
    curency: "USD",
    theme: "yellow",
    expense: this.props.expense
  };

  handleSubmit = e => {
      e.preventDefault();

      let state = this.state;
      if(state.theme && state.curency){
          this.props.handleSetting(this.state);
          this.props.history.push('/');
      }
      
      
      

  }

  handleClick = (e) => {
      e.preventDefault();
      const item = e.target.childNodes[0];
      item.checked = 'checked';
      this.setState({
          theme: item.value
      })
    }

    handleInput = e => {
        if(e.target.value !== "0"){
            this.setState({
                curency: e.target.value
            })
        }
    }
  render() {
    return (
      <div className="px-4 lg:flex lg:justify-center">
        <form onSubmit={this.handleSubmit} className="lg:w-6/12">
            <div className="w-full flex justify-between mb-4">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4 text-gray-700 hover:text-yellow-500" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <h1 className="text-gray-500 text-sm">Setting</h1>
                <button className={`py-1 px-3 rounded-xl text-xs bg-${this.props.theme}-500`}>Save</button>
            </div>

            <div className="w-full mb-4">
                <label htmlFor="curency" className="text-sm text-gray-400">curency</label>
                <select name="curency" id="" className="w-full px-3 py-2 rounded bg-gray-800 focus:bg-gray-700 mt-2" onChange={this.handleInput}>
                   <option value="0">Select Curency</option> 
                    <option value="USD">USD</option>
                    <option value="IDR">IDR</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>

            <div className="w-full">
                <label htmlFor="curency" className="text-sm text-gray-400">Theme</label>

                <div className="w-full flex justify-between radio-group mt-2">
                    <button className="radio w-5 h-5 p-5 rounded-full hover:cursor-pointer bg-red-500 border-2 border-transparent focus:border-white" onClick={this.handleClick}>
                        <input onChange ={this.handleSubmit} type="radio" value="red" name="theme" className="absolute invisible" />
                    </button>
                    <button className="radio w-5 h-5 p-5 rounded-full hover:cursor-pointer bg-green-500 border-2 border-transparent focus:border-white" onClick={this.handleClick}>
                        <input type="radio" value="green" name="theme" className="absolute invisible" />
                    </button>
                    <button className="radio w-5 h-5 p-5 rounded-full hover:cursor-pointer bg-blue-500 border-2 border-transparent focus:border-white" onClick={this.handleClick}>
                        <input type="radio" value="blue" name="theme" className="absolute invisible" />
                    </button>
                    <button className="radio w-5 h-5 p-5 rounded-full hover:cursor-pointer bg-purple-500 border-2 border-transparent focus:border-white" onClick={this.handleClick}>
                        <input type="radio" value="purple" name="theme" className="absolute invisible" />
                    </button>
                    <button className="radio w-5 h-5 p-5 rounded-full hover:cursor-pointer bg-yellow-500 border-2 border-transparent focus:border-white" onClick={this.handleClick}>
                        <input type="radio" value="yellow" name="theme" className="absolute invisible" />
                    </button>

                    
                </div>
            </div>
            
          
        </form>
      </div>
    );
  }
}

export default withRouter(FormSetting)
