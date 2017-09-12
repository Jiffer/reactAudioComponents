import React from "react";

    
export class SeqControls extends React.Component {
    constructor(props) {
        console.log("hey " + props.selectedScale)
        super(props);
        this.state = {
            selectedScale: props.selectedScale,
        }
        this.handleScaleChange = this.handleScaleChange.bind(this);
    }
    
    handleScaleChange(changeEvent){
        // pass through onChange event to handleScaleChange and set state
        this.props.handleScaleChange(changeEvent);
        this.setState({
            selectedScale:changeEvent.target.value
        });
    }

    render() {
    var controlsContainerStyle  = {
        padding: 10, 
        marginTop: 10, 
        display: "inline-block",
        float: "left",
        backgroundColor: "#bbbbbb",
        borderRadius: "1%",
        width: 200,
        height: 300,
    };
    var sliderStyle = {
        type: "range"
    }

    return (
        
        <div className="controls-container" style = {controlsContainerStyle}> 
            Controls 
            <div>
            <button> do something </button>

            <input 
                type="checkbox"
            />
            <input type="range"/>
            <input type="range"/>
            <form action="#" id="scale-form">
            <div className="scale-radio">
                <label><input type="radio" 
                        
                        value="scale01" 
                        checked = {this.state.selectedScale === 'scale01'}
                        onChange={this.handleScaleChange}/> Chromatic</label> <br/>
            </div>
            <div className="scale-radio">
                <label><input type="radio" 
                        
                        value="scale02" 
                        checked = {this.state.selectedScale === 'scale02'}
                        onChange={this.handleScaleChange}/> Major</label> <br/>
            </div>
            <div className="scale-radio">
                <label><input type="radio" 
                        
                        value="scale03" 
                        checked = {this.state.selectedScale === 'scale03'}
                        onChange={this.handleScaleChange} /> Minor</label> <br/>
            </div>
            </form>
            </div>
        </div>
        
        
    );
    }
}
