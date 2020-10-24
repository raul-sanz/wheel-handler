import React from "react";
import ReactDOM from "react-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import styled from "styled-components";

class App extends React.Component {
  state = {
    currentIndex: 0,
    colors: ["red", "black", "grey", "blue", "green"],
    blockScroll: false,
  };
  nextIndex = () => {
    const { colors, currentIndex } = this.state;
    if (currentIndex == colors.length - 1) {
      return this.setState({ currentIndex: 0 });
    }

    return this.setState({
      currentIndex: currentIndex + 1,
    });
  };

  prevIndex = () => {
    const { colors, currentIndex } = this.state;
    if (currentIndex == 0) {
      return this.setState({
        currentIndex: colors.length - 1,
      });
    }

    return this.setState({
      currentIndex: currentIndex - 1,
    });
  };

  render() {
    const { colors, currentIndex } = this.state;
    return (
      <div>
        <ReactScrollWheelHandler
          upHandler={this.prevIndex}
          downHandler={this.nextIndex}
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: colors[currentIndex],
            transition: "background-color .6s ease-out",
          }}
        >
          <h1>SCROLL TO CHANGE BACKGROUND COLOR</h1>
        </ReactScrollWheelHandler>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
