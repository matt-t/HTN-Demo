import React, { Component } from "react";
import "./Profile.css";

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
            <h1 className="title">Hack The North</h1>
            <p className="italic">Profile Information</p>
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