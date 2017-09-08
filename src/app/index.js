import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";


import {Seq} from "./components/Sequencer";

class App extends React.Component {
    render() {
        return (
            <div>
               <Seq/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));