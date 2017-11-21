import React, { Component } from "react";

class Results extends Component {
  state = {
    articles: []
  };

  componentWillMount() {
    this.setState({articles: this.props.results})
    console.log(this.state.articles);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div>
        {this.state.articles.map((value, i) => (
        <div className="panel-body" key={i}>
          <div className="articleCard">
            <div className="articleTitle">
              <p>{value.headline.main}</p>
            </div>
            <div className="articleDate">
              <p>{value.pub_date}</p>
            </div>
            <button type="button" className="btn btn-info saveArticle">Save Article</button>
            <a href={value.web_url} className="btn btn-info viewArticle" target="_blank" role="button">View Article</a>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
}


export default Results;