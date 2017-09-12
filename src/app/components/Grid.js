import React from "react";

// lowest level comp is Box
class Gridbox extends React.Component{
    constructor(props){
        super();
        this.state = {
            index: props.index,
            blackKey: props.blackKey,
            value: props.value
        };
    }
    
    render() { // change to pass in props rather than hold in state
        var boxColor;
        if(!this.props.blackKey){
            if(!this.props.value){
                boxColor = "#ffffff"
            }else{
                boxColor = "#555555";
            }
        }else{
            if(!this.props.value){
                boxColor = "#bbbbbb"
            }else{
                boxColor = "#000000"
            }
        }
        var margin = 1;
        if(this.state.index%4 == 0){
            margin = 2;
        }
        
        var boxStyle ={
            background: boxColor,
            margin: 1, 
            width: 25,
            float: "left", 
            height: 15
        }
        return (
        <div 
            className='grid-box' 
            style={boxStyle} 
            onClick={() => this.props.handleClick(this.state.index)}
        > 
            {this.props.channel + 1} 
        </div>
        );   // + 1 above so indexing starts at 0
    }
    };
    
    export class Grid extends React.Component {
      constructor(props) {    
        var gridState = Array(64).fill(false);
    
        super();
        this.state = {
            channels: props.channels,
            steps: props.steps,
            scale: props.scale,
            gridState: gridState
        };
        this.handleClick = this.handleClick.bind(this);
      }
      
      handleClick(i){ // beat, note
        console.log("handle click " + i)
        // update box state
        var gridState = this.state.gridState.slice();
        // update box state
        //var chan = Math.floor(i / this.state.steps);
        var step = i % this.state.steps;

        gridState[i]= !gridState[i]
        //console.log("click" + i + " got index: " + chan +   " step " + step)

        this.setState({
            gridState: gridState
        }); 
      }
    
      renderBox(i, nl) {
        var currentChannel = this.state.channels - Math.floor(i / this.state.steps) - 1;
        var blackKeys = [1, 3, 6, 8, 10];
        var keyIsBlack = false;
        // check if current scale degree is a black key
        for(var k = 0; k < blackKeys.length; k++){ 
            if (this.props.scale[(currentChannel) % this.props.scale.length]  == blackKeys[k])
            { keyIsBlack = true; }        
        }
          
        var newStep = <Gridbox
                index={i} 
                channel={currentChannel}
                value={this.state.gridState[i]}
                blackKey={keyIsBlack}
                handleClick={(i) => this.handleClick(i)}
                key={i}
            />
        if(nl){return(
                <div key={i}>
                {newStep}
                </div> )
        }else return (
            newStep
        );
      }
    
      render() {
        var gridContainerStyle = {
                padding: 10, 
                marginTop: 10, 
                display: "inline-block",
                float: "right",
                backgroundColor: "#aaabbb",
                borderRadius: "1%",
                width: 500,
                height: 300,
            };
        
            console.log(" scale is: " + this.props.scale)
        var steps= [];
        {
            var newLine = false;
            for(var j = 0; j < this.state.channels; j++){
                for (var i = 0; i < this.state.steps; i++){
                    steps.push(this.renderBox(j*this.state.steps + i, newLine));
                    if(i == 0){newLine = false;}
                }
                newLine = true;
            }
        }

        var gridStyle = {
            float: "left",
         }
        return (
            
            <div className="grid-container" style ={gridContainerStyle}> 
                The grid container<br/>
                
                <div className="grid" style={gridStyle}>
                {steps}
                </div>
                <br/>
                
                after grid
            </div>
            
        );
      }
    }
    