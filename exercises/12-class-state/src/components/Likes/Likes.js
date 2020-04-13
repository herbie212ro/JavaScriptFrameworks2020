import React, { Component } from "react";
//import "./Likes.css";

class Likes extends Component {
  state = {
    likes: 0,
  };

  /**
   *  Complete this function here to increment the likes counter
   *
   */

  like = () => {
    this.setstate.likes = this.setState({ likes: this.state.likes + 1 });
    console.log(this.state.likes);
  };

  render() {
    /**
     * In the render function, add an onclick to the button to update the like count.
     *
     */
    return (
      <div className="container mt-4 h1">
        <h3>Likes</h3>
        console.log("testing");
        <button type="button" onclick="alert('Hello world!')">
          Click Me!
        </button>
      </div>
    );
  }
}

export default Likes;
