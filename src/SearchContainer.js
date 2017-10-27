import React, {Component} from 'react' 
import Search from './Search'
import SearchResults from './SearchResults'
import SearchResultModel from './models/SearchResult'
class SearchContainer extends Component{
	constructor(){
		super()
		this.state = {
			query: '',
			results: []
		}
	}
	handleOnSubmit(event){
		event.preventDefault();
		this.fetchData()
	}
	handleTextInput(event){
		let query = event.target.value 
		this.setState({query})
	}
	fetchData(){
		SearchResultModel.all(this.state.query).then( (res) => {
			console.log(res)
			this.setState({
				results: res.data.data,
			})
		})

	}
	render(){
		return(
			<div>
				<Search 
					handleOnSubmit={this.handleOnSubmit.bind(this)}
					handleTextInput={this.handleTextInput.bind(this)}
				/>
				<SearchResults searchResults={this.state.results}/>
			</div>
		)
	}
}


export default SearchContainer