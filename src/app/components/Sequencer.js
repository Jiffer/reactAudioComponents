import React from "react";

// lowest level comp is Box
class Gridbox extends React.Component{
constructor(props){
    super();
    this.state = {
        index: props.index,
        value: props.value
    };
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
        onClick={this.props.handleClick}
    > 
        {/* {this.props.index}  */}
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
        notesActive: props.notesActive
    };
    this.handleClick = this.handleClick.bind(this);
}

handleClick(row){
    const column = this.props.index;
    const notesActive = this.state.notesActive.slice();
    
    notesActive[row] = !notesActive[row];
    this.props.handleClick(column, row)
    console.log("c " + column + " r " + row)
    this.setState({notesActive: notesActive})
}

renderBox(i) {      
    return (
        <Gridbox 
            index={i} 
            value={this.state.notesActive[i]}
            blackKey = {true}
            handleClick={this.handleClick}
            key={i}
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
  constructor() {
    super();
    this.state = {
    voices: 4,
    beats: 16,
    gridstate: Array(16).fill(Array(4).fill(false))
    };
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(i, j){ // beat, note
    // update box state
    console.log("got : " + i + " and " + j);
    var gridstate = this.state.gridstate.slice();
    // console.log("gstate " + gridstate);
    // console.log(j);
    //gridstate[i][j] = !(gridstate[i][j]);
    
    this.setState({
        gridstate: gridstate
    });
  }
  
  renderCol(currentCol) {

    return (
        <Col
            index={currentCol} 
            voices = {this.state.voices}
            notesActive={this.state.gridstate[currentCol]} 
            handleClick={() => this.handleClick(currentCol)}
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
            width: 600,
            height: 400,
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
      <div>
        <div className="grid-container" style ={gridContainerStyle}> 
          The grid <br/>
          
          <div className="grid-col" style={gridStyle}>
            {cols}
          </div>
          <br/>
          after grid
        </div>
        below
      </div>
    );
  }
}

export class Seq extends React.Component {
  render() {
      var seqStyle = {
          width: 800,
          height: 500,
          display: "inline-block",
          backgroundColor: "#baabbb",
          borderRadius: "1%",
          webkitFilter: "drop-shadow(0px 0px 5px #666)",
          filter: "drop-shadow(0px 0px 5px #666)"
        };
    return (
      <div className="controldiv" style = {seqStyle}>
        <div className="seq-controls">Controls...</div>
        <div className="grid">
          <Grid />
        </div>
        <div className="more-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

