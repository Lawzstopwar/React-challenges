import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {

    if(this.state.currentPage ==="Home")
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Home></Home>
      </div>
  );
    
  else if(this.state.currentPage === "About"){
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <About></About>
      </div>
    );
  }
     
  else if(this.state.currentPage === "Blog"){
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Blog></Blog>
      </div>
    );
  }

  else if(this.state.currentPage ==="Contact"){
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Contact></Contact>
      </div>
    );
  }
  }
}

export default PortfolioContainer;
