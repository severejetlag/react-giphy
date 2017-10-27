import React, {Component} from 'react'

class SearchResult extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<img src={this.props.result.images.fixed_height.url} alt='gif' /> 
			</div> 
		)
	}
}

export default SearchResult