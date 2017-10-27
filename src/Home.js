// Developer TODO: Define App component defintion here
import React, {Component} from 'react' 
import SearchContainer from './SearchContainer'

class Home extends Component{
	render(){
		return(
			<div>
				<h1> Hello World</h1> 
				<SearchContainer/>
			</div> 
		)
	}
}

export default Home 