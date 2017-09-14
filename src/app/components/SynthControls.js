import React from "react";

    
export class SynthControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waveform: props.waveform,
        }
        this.handleWaveChange = this.handleWaveChange.bind(this);
    }
    
    handleWaveChange(changeEvent){
        // pass through onChange event to handleScaleChange and set state
        this.props.handleWaveChange(changeEvent);
        this.setState({
            waveform:changeEvent.target.value
        });
    }

    render() {
    var controlsContainerStyle  = {
        padding: 10, 
        marginTop: 10, 
        display: "inline-block",
        float: "left",
        backgroundColor: "#cccccc",
        borderRadius: "1%",
        width: 200,
        height: 300,
    };
    var sliderStyle = {
        type: "range"
    }

    return (        
        <div className="controls-container" style = {controlsContainerStyle}> 
            Synth Controls 
            <div>
            <input 
                type="checkbox"
            /> Note On
 
            <form action="#" id="scale-form">
            <div className="scale-radio">
                <label><input type="radio"                          
                        value="sine" 
                        checked = {this.state.waveform === 'sine'}
                        onChange={this.handleScaleChange}/> Sine </label> <br/>
            </div>
            <div className="scale-radio">
                <label><input type="radio"                         
                        value="triangle" 
                        checked = {this.state.waveform === 'triangle'}
                        onChange={this.handleScaleChange}/> Triangle </label> <br/>
            </div>
            <div className="scale-radio">
                <label><input type="radio"                         
                        value="square" 
                        checked = {this.state.waveform === 'square'}
                        onChange={this.handleScaleChange} /> Square </label> <br/>
            </div>
            <div className="scale-radio">
                <label><input type="radio"                         
                        value="sawtooth" 
                        checked = {this.state.waveform === 'sawtooth'}
                        onChange={this.handleScaleChange} /> Sawtooth </label> <br/>
            </div>
            </form>
            <input type="range"/> slider
            <input type="range"/> slider2
            </div>
        </div>
    );
    }
}
