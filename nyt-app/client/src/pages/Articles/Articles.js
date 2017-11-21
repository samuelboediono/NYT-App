import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../../components/Results";


class Articles extends Component {
	state = {
   		articles: [],
   		articlesSubmitted: false,
    	query: "",
    	startDate: "",
    	endDate: ""
  	};

  	componentWillUpdate() {
  		console.log(this.state.articles)
  	}

  	handleInputChange = event => {

  		const { name, value } = event.target;
  		this.setState({
  			[name] : value
  		});
  		console.log(this.state);
  	};

  	handleFormSubmit = event => {
    	event.preventDefault();
    	if (this.state.query && this.state.startDate && this.state.endDate) {
      		API.getArticles ({
        		query: this.state.query,
        		startDate: this.state.startDate,
        		endDate: this.state.endDate
      		})
        .then(res => this.setState({ articles: res.data.response.docs, articlesSubmitted: true}))
        .catch(err => console.log(err));
    	}
  	};

	render() {
    return (
		<div className="container">
        	<div className="jumbotron">
          		<h1>New York Times Article Scrubber</h1>
        	</div>
        	<div className="panel panel-info">
          		<div className="panel-heading">
            		<h3 className="panel-title">Query</h3>
          		</div>
          		<div className="panel-body">
            		<form>
              			<div class="form-group">
                			<label for="search">query</label>
                			<input 
                				value={this.state.query}
                				onChange={this.handleInputChange}
                				name="query"
                				className="form-control"
                				id="search" 
                				placeholder="Search here" 
                			/>
              			</div>
              			<div class="form-group">
                			<label for="startDate">Start date (YYYY) </label>
                			<input 
                				type="text"
                				className="form-control"
                				id="startDate"
                				placeholder="2010"
                				value={this.state.startDate}
                				onChange={this.handleInputChange}
                				name="startDate"
                			/>
              			</div>
              			<div class="form-group">
                			<label for="endDate">End date (YYYY) </label>
                			<input 
                				type="text"
                				className="form-control"
                				id="endDate"
                				placeholder="2015"
                				value={this.state.endDate}
                				onChange={this.handleInputChange}
                				name="endDate"
                			/>
              			</div>
              			<button type="submit" class="btn btn-info"
              			disabled={!(this.state.query && this.state.startDate && this.state.startDate)}
                		onClick={this.handleFormSubmit}
              			>
              			Submit
              			</button>
            		</form>
          		</div>
        	</div>
        	{this.state.articlesSubmitted ? <Results results={this.state.articles} /> : <div> Not Submitted </div> }
     	</div>


    	);

	}

}


export default Articles;


