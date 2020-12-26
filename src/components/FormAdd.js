import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../style/FormAdd.css';

class FormAdd extends Component{
    state = {
        title: null,
        type: "Income",
        value: 0,
        date: null  
    }

    handleInput = (e) => {
        if(e.target.name === "type"){
            this.setState({
                type: e.target.value
        })}
        if(e.target.name === "title"){
            this.setState({
                title: e.target.value
        })}
        if(e.target.name === "value"){
            this.setState({
                value: e.target.value
        })}
        if(e.target.name === "date"){
            this.setState({
                date: e.target.value
        })}
        
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let data = this.state;

        if(data.title && data.value && data.date && data.type){
            this.props.addData(this.state);
        }else{
            console.log("err");
        }

        this.props.history.push('/');
    }
    render(){
        return(
            <div className="px-4 lg:flex lg:justify-center">
                <form onSubmit={this.handleSubmit} className="lg:w-6/12">
                    <div className="w-full flex justify-between mb-2">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4 text-gray-700 hover:text-yellow-500" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </Link>
                        <h1 className="text-gray-500 text-sm">Add</h1>
                        <button className="p-1 px-3 rounded-xl text-xs bg-yellow-500">Save</button>
                    </div>

                    <div className="w-full mb-2">
                        <label htmlFor="title" className="text-sm text-gray-300 font-semibold">Title</label>
                        <input onChange={this.handleInput} id="title" name="title" type="text" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-800 mt-2 focus:border-yellow-500"/>
                    </div>
                    <div className="w-full mb-2">
                        <label htmlFor="date" className="text-sm text-gray-300 font-semibold">Date</label>
                        <input onChange={this.handleInput} id="date" name="date" type="date" className="unstyled w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-800 mt-2 focus:border-yellow-500"/>
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="value" className="text-sm text-gray-300 font-semibold">Value</label>
                        <input onChange={this.handleInput} id="value" name="value" type="number" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-800 mt-2 focus:border-yellow-500"/>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-2">
                        <div className="relative w-full py-2 bg-gray-800 rounded-lg text-green-500 focus-within:bg-green-500 focus-within:text-white">
                            <label htmlFor="Income" className="w-full h-full text-center rounded-lg absolute">
                                Income
                            </label>
                            <input onChange={this.handleInput} className="focus:ring-2 ml-2" id="Income" type="radio" value="Income" name="type" />
                        </div>
                        <div>
                            <div className="relative w-full py-2 bg-gray-800 text-red-500 rounded-lg focus-within:bg-red-500 focus-within:text-white">
                            <label htmlFor="Expense" className="w-full h-full text-center rounded-lg absolute">
                                Expense
                            </label>
                                <input onChange={this.handleInput} className="focus:ring-2 ml-2" id="Expense" type="radio" value="Expense" name="type" />
                            </div>
                            
                        </div>
                    </div>
                    
                </form>
            </div>
        )  
    }
}

export default withRouter(FormAdd)