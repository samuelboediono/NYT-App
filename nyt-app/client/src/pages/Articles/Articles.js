import React, { Component } from "react";


class Articles extends Component {
	render() {
    return (
		<div className="container">
        	<div className="jumbotron">
          		<h1>New York Times </h1>
        	</div>
        	<div className="panel panel-info">
          		<div className="panel-heading">
            		<h3 className="panel-title">Query</h3>
          		</div>
          		<div className="panel-body">
            		<form>
              			<div class="form-group">
                			<label for="search">Search</label>
                			<input type="text" class="form-control" id="search" placeholder="Search here" />
              			</div>
              			<div class="form-group">
                			<label for="startDate">Start date (YYYY) </label>
                			<input type="text" class="form-control" id="startDate" placeholder="2010" />
              			</div>
              			<div class="form-group">
                			<label for="endDate">End date (YYYY) </label>
                			<input type="text" class="form-control" id="endDate" placeholder="2015" />
              			</div>
              			<button type="submit" class="btn btn-default">Submit</button>
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
              			<button type="button" className="saveArticle">Save Article</button>
              			<button type="button" className="viewArticle">View Article</button>
            		</div>
          		</div>
        	</div>
     	</div>


    	);

	}

}


export default Articles;


