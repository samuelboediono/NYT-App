import React, { Component } from "react";

class Saved extends Component {
  render(){
    return(
      <div className="container">
          <div className="jumbotron">
              <h1>New York Times Article Scrubber</h1>
          </div>
          <div className="panel panel-info">
              <div className="panel-heading">
                  <h3 className="panel-title">Saved Articles</h3>
              </div>
              <div className="panel-body">
                  <div className="article-card">
                      <div className="article-title">Title goes here</div>
                      <div className="article-date">date goes here</div>
                      <button type="button" className="btn btn-info article-unsave">Unsave Article</button>
                      <button type="button" className="btn btn-info article-link">View Article</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Saved