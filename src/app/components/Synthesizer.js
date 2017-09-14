import React from "react";
import {SynthControls} from "./SynthControls";

export class Synth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            waveform: props.waveform
        }
        this.handleWaveChange = this.handleWaveChange.bind(this);
    }
    
    handleWaveChange(e){
        this.setState({
            
        });
    }

  render() {
    var seqStyle = {
        width: 600,
        height: 400,
        display: "inline-block",
        backgroundColor: "#bbbbbb",
        borderRadius: "1%",
        webkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
        <div className="controldiv" style = {seqStyle}>
            <SynthControls 
                handleWaveChange={(e)=>this.handleWaveChange(e)}

            />
            
        </div>
    );
  }
}

