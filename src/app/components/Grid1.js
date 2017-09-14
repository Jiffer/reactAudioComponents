import React from "react";

// lowest level comp is Box
class Gridbox extends React.Component{
    constructor(props){
        super();
        this.state = {
            index: props.index,
            value: props.value
        };
        // this.changeColor = this.changeColor.bind(this);
    }
    
    render() { // change to pass in props rather than hold in state
        var boxColor;
        if(this.props.blackKey){
            if(this.props.value){
                boxColor = "#bbbbbb"
            }else{
                boxColor = "#000000";
            }
        }else{
            if(this.props.value){
                boxColor = "#ffffff"
            }else{
                boxColor = "#555555"
            }
        }
        
        var boxStyle ={
            background: boxColor,
            margin: 1, 
            width: 25,
            height: 25
        }
        return (
        <div 
            className='grid-box' 
            style={boxStyle} 
            onClick={() => this.props.handleClick(this.state.index)}
        > 
            {this.props.index} 
        </div>
        );
    }
    };
    
    // column of boxes
    class Col extends React.Component{
    constructor(props){
        super();
        this.state = {
            index: props.index,
            voices: props.voices,
            rowsActive: props.rowsActive
        };
    }
    
    handleClick(row){
        const col = this.state.index;
        const rowsActive = this.state.rowsActive.slice();
        rowsActive[row] = !rowsActive[row];
        console.log(col + " " + row)
        this.props.handleClick(col, row)
        // console.log("col " + col + " rows " + notesActive)
        this.setState({rowsActive: rowsActive})
    }
    
    renderBox(row) {   
        return (
            <Gridbox 
                index={row} 
                value={this.state.rowsActive[row]}
                blackKey = {true}
                handleClick={() => this.handleClick(row)}
                key={row}
            />
        );
      }
    
    render() {
        var colStyle ={
            float: "left",
            margin: 1, 
            width: 25
        }
        
        var cols= [];
        {
          for (var i = 0; i < this.state.voices; i++){
              cols.push(this.renderBox(i));
            }
        }return (   
             <div className="grid-col" style={colStyle}>
                {cols}
              </div>
        );
    }
    };
    
    export class Grid extends React.Component {
      constructor(props) {
        var stateArray = Array(16); // Array(16).fill(Array(4).fill(false));
        var colInit = Array(4).fill(false);
        stateArray.fill(colInit);
    
        super();
        this.state = {
            voices: 4,
            beats: 16,
            gridstate: stateArray
        };
        this.handleClick = this.handleClick.bind(this);
      }
      
      handleClick(col, row){ // beat, note
        // update box state
        var gridstate = this.state.gridstate.slice().slice();
        // update box state
        console.log("setting col : " + col + " row " + row + " equal " + !gridstate[col][row]);
        gridstate[col][row] = !gridstate[col][row];
        
        this.setState({
            gridstate: gridstate
        });
        
      }
      
      renderCol(currentCol) {
        return (
            <Col
                index={currentCol} 
                voices = {this.state.voices}
                rowsActive={this.state.gridstate[currentCol]} 
                handleClick={(col, row) => this.handleClick(col, row)}
                key={currentCol}
            />
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
    
        var gridStyle = {
           float: "left"
        }
        
        var cols= [];
        {
          for (var i = 0; i < this.state.beats; i++){
              cols.push(this.renderCol(i));
            }
        }
        return (
            
            <div className="grid-container" style ={gridContainerStyle}> 
                The grid <br/>
                
                <div className="grid-col" style={gridStyle}>
                {cols}
                </div>
                <br/>
                <br/>
                after grid
            </div>
            
        );
      }
    }
    