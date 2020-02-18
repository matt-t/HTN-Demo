import React, { Component } from "react";
import "./profile.css";

export default class PathFinding extends Component {
    constructor() {
      super();
      this.state = {
      };
    }
  
    render() {
      const { grid, mouseIsPressed } = this.state;
      return (
        <div>
          <div>
            <h1 className="title">PATHFINDER VISUALIZER</h1>
            <p className="italic">Made by: Dan Lu & Matthew Tam</p>
            <button className="button" onClick={() => this.visualizeDijkstra()}>
              Visualize
            </button>
            <button className="button" onClick={() => this.resetGrid()}>
              Reset
            </button>
          </div>
        </div>
      );
    }
  }