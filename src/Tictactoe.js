import React, {Component} from 'react';

class Tictactoe extends Component{
    constructor(props){
        super(props)
        this.state={
            X:'X',
            O:'O',
            list:Array(9).fill(null),
            count:0,
            turn:'X',
            clicks:0
        }
    }

    check = (event) =>{
        var instancelist=this.state.list;
        if(this.state.count===0){
            var value = document.getElementById(event.target.id).innerHTML
            this.setState({turn:'X'})
            if(value ==''){
                document.getElementById(event.target.id).innerHTML=this.state.X;
                instancelist[event.target.id]=this.state.X;
                console.log(instancelist)
                this.setState({
                    count:1,
                    list:instancelist

                },()=>{this.calculateWinner(instancelist);this.setState({turn:'O'})})
            }
        }
        else if(this.state.count==1){
            var value = document.getElementById(event.target.id).innerHTML
            console.log(value)
            if(value ==''){
            document.getElementById(event.target.id).innerHTML=this.state.O;
            instancelist[event.target.id]=this.state.O;
            console.log(instancelist)
            this.setState({
                count:0,
                list:instancelist
            },()=>{this.calculateWinner(instancelist);this.setState({turn:'X'})})
        }
    }
}

 calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.setState({clicks:this.state.clicks+1})
    for (let i = 0; i < lines.length; i++) {
      const [a, b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return (this.winner(squares[a]));
      }
      
      else if(this.state.clicks===8){
          return this.restart()
      }
    }
    return null;
  }

  winner(values){    
     document.getElementById('winner').style.display='block';
     document.getElementById('winnerAnnocement').innerHTML='Player '+values+' is '
    document.getElementById('tictoe').style.display='none'
  }
  restart(){
    window.location.reload()
  }

    render(){
        return(
            <center><div className="mainDiv">
                <div id="winner">
                    <button id="restart" onClick={this.restart}>Restart</button>
                    <h1 id="winnerAnnocement"></h1>
                    <img src="http://www.hostaccommodation.co.nz/assets/Uploads/_resampled/ScaleWidthWyI5ODAiXQ/winner6.jpg"></img>
                </div>
                <div id="tictoe">
                    <h1>Enjoy The Game</h1>
                    <table>
                        <tr>
                    <td><button className="btn" id="0" onClick={this.check}></button></td>
                    <td><button className="btn" id="1" onClick={this.check}></button></td>
                    <td><button className="btn" id="2" onClick={this.check}></button></td></tr>


                    <tr>
                    <td><button className="btn" id="3" onClick={this.check}></button></td>
                    <td><button className="btn" id="4" onClick={this.check}></button>
                    </td><td><button className="btn" id="5" onClick={this.check}></button></td></tr>

                    <tr>
                    <td><button className="btn" id="6" onClick={this.check}></button></td>
                    <td><button className="btn" id="7" onClick={this.check}></button></td>
                    <td><button className="btn" id="8" onClick={this.check}></button></td></tr>
                    </table>
                    <h1>Turn {this.state.turn}</h1>
                </div>
            </div></center>
        )
    }
}

export default Tictactoe;