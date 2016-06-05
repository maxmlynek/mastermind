/**
 * Created by Max on 6/5/2016.
 */

class GameCorrect extends React.Component{
    render(){
        return (
            <div className="correct">
                <div className="correctBox correctBoxUp"></div>
                <div className="correctBox correctBoxUp"></div>
                <br />
                <div className="correctBox correctBoxDown"></div>
                <div className="correctBox correctBoxDown"></div>
                <br />
            </div>
        );
    }
};

class GameGuess extends React.Component{
    render(){
        return (
            <div className="guess">
                <div className="guessBox"></div>
                <div className="guessBox"></div>
                <div className="guessBox"></div>
                <div className="guessBox"></div>
                <br />
            </div>
        );
    }
};

class GameRow extends React.Component{
    render(){
        return (
            <div className="tableRow">
                <GameCorrect />
                <GameGuess />
                <br />
            </div>
        );
    }
};

class ColorPicker extends React.Component{
    render(){
        return (
            <div id="colorPicker">
                <div className="noneBox"></div>
                <div className="colorBox" id="color1"></div>
                <div className="colorBox" id="color2"></div>
                <div className="colorBox" id="color3"></div>
                <div className="colorBox" id="color4"></div>
                <div className="colorBox" id="color5"></div>
                <div className="colorBox" id="color6"></div>
                <br />
            </div>
        );
    } 
}

let rowCounter = 1;
class GameBoard extends React.Component{

    constructor(){
        super();

        this.state = {
            noOfRows : 1
        }
    }
    _handleClick(){
        rowCounter++;
        this.setState({noOfRows: rowCounter});
    }

    render(){
        var rows = [];
        for ( var i = 0; i < rowCounter; i++ ) {
            rows.push(<GameRow />);
        }

        return (
            <div id="boardWrapper">
                {rows}
                <h1></h1>
                <ColorPicker />
                <div id="checkButton">
                    <button type="button" className="btn btn-primary" onClick={this._handleClick.bind(this)}>Check</button>
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <GameBoard />,
    document.getElementById('board')
);