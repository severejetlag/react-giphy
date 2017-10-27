import React, {Component} from 'react' 

class Search extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<form id='search' onSubmit={this.props.handleOnSubmit}>
				<input placeholder='Search' type="text" onInput={this.props.handleTextInput}/> 
				<input type='submit' value='Search'/> 
			</form>
		)
	}
}

export default Search