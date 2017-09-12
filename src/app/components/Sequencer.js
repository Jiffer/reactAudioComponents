import React from "react";
import {Grid} from "./Grid";
import {SeqControls} from "./SeqControls";

export class Seq extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedScale: "scale01",
            scaleSteps: [0,1,2,3,4,5,6,7,8,9,10,11]
        }
        this.handleScaleChange = this.handleScaleChange.bind(this);
    }
    handleScaleChange(changeEvent){
        const newScale = changeEvent.target.value;
        console.log("scale change: " + newScale);
        var majorScale = [0,2,4,5,7,9,11];
        var minorScale = [0,2,3,5,7,9,10];
        var chromaticScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        var scaleSteps = []
        if(newScale === 'scale01'){
            console.log("chrom");
            scaleSteps = chromaticScale;
        }else if(newScale === 'scale02'){
            console.log("maj");
            scaleSteps = majorScale;
        }else if(newScale === 'scale03'){
            console.log("scale 03 - minor");
            scaleSteps = minorScale;
        }else{
            scaleSteps = chromaticScale;
        }
        console.log("change scale steps: " + scaleSteps)
        this.setState({
            selectedScale:newScale,
            scaleSteps: scaleSteps
        });
    }
  render() {
    var seqStyle = {
        width: 800,
        height: 400,
        display: "inline-block",
        backgroundColor: "#aaaaaa",
        borderRadius: "1%",
        webkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
    };

    
    return (
        <div className="controldiv" style = {seqStyle}>
            <SeqControls 
                handleScaleChange={(e)=>this.handleScaleChange(e)}
                selectedScale = {this.state.selectedScale}
            />
            <Grid 
                channels={24}
                steps={16}
                scale={this.state.scaleSteps}
            />
        </div>
    );
  }
}

