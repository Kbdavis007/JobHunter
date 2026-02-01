import React from "react";
import ReactDOM from "react-dom/client";
import Tracker from "./Tracker";

class TrackerElement extends HTMLElement {
  connectedCallback() {
    if (!this._root) {
      this._root = ReactDOM.createRoot(this);
      this._root.render(<Tracker />);
    }
  }
  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }
}

customElements.define("tracker-widget", TrackerElement);
