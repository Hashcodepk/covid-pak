import React, { Component } from 'react';
import './App.css';
import Stats from './Stats';

class App extends Component {
	constructor(){
		super();
		this.state = {
			data: '',
		}
	}

 componentDidMount(){

  fetch("https://covid-193.p.rapidapi.com/statistics?country=Pakistan", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "304ebbb190msh7b50db2a2c81519p1e345ejsnf434fa50ed7a"
  }
})
 .then(response => response.json())
    .then(data => this.setState({data: data.response[0]}))

   console.log('Hi, How can i help you? :)');
}

 render(){
		if(!this.state.data){
			return <h1 className='header tc'>LOADING..</h1>
		}
		else {
			return(
				<div className="App">
    				<div className='fl w-100 pa2'>
	    				<p className="pt1"><span id="spin"></span></p>
	    				<h1 className='header'>Covid-19 In Pakistan</h1>
					</div>		
    				<Stats data={this.state.data} />
    			</div>
			);
		}
 

} }

export default App;
