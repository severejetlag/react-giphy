import React, {Component} from 'react'
import SearchResult from './SearchResult'

class SearchResults extends Component{
	render(){
		let searchResults = this.props.searchResults.map((result, i) => {
			return(
				<SearchResult 
					key={i}
					result={result}
				/>
			)
		})
		return(
			<div>
				<h2> Search Results </h2> 
				{searchResults}
			</div> 
		)
	}
}

export default SearchResults