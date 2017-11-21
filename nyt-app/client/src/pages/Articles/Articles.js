import React, { Component } from "react";
import API from "../../utils/API";


class Articles extends Component {
	state = {
   		articles: [],
    	query: "",
    	startDate: "",
    	endDate: ""
  	};

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
        .then(res => this.getArticles())
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
         	<div className="panel panel-info">
          		<div className="panel-heading">
            		<h3 className="panel-title">Panel title</h3>
          		</div>
          		<div className="panel-body">
            		<div className="articleCard">
              			<div className="articleTitle">
                			<p>Title goes here</p>
              			</div>
              			<div className="articleDate">
                			<p>Date goes here</p>
              			</div>
              			<button type="button" className="btn btn-info saveArticle">Save Article</button>
              			<button type="button" className="btn btn-info viewArticle">View Article</button>
            		</div>
          		</div>
        	</div>
     	</div>


    	);

	}

}


export default Articles;


