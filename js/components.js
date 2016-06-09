/**
 * Created by Max on 6/5/2016.
 */


class GameCorrect extends React.Component {
    render() {
        return (
            <div className="correct">
                <div className="correctBox correctBoxUp" id="correct1"></div>
                <div className="correctBox correctBoxUp" id="correct2"></div>
                <br />
                <div className="correctBox correctBoxDown" id="correct3"></div>
                <div className="correctBox correctBoxDown" id="correct4"></div>
                <br />
            </div>
        );
    }
}

class GameGuess extends React.Component {
    render() {

        return (
            <div className="guess">
                <div className="guessBox" id="guess1"></div>
                <div className="guessBox" id="guess2"></div>
                <div className="guessBox" id="guess3"></div>
                <div className="guessBox" id="guess4"></div>
                <br />
            </div>
        );
    }
}

class GameRow extends React.Component {
    render() {

        return (
            <div className="tableRow" id={this.props.idType}>
                <GameCorrect />
                <GameGuess />
                <br />
            </div>
        );
    }
}

class ColorPicker extends React.Component {
    render() {

        return (
            <div id="colorPicker">

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


class ComputerColors extends React.Component {
    render() {

        return (
            <div id="computerGuess">
                <div className="computerGuessBox" id="computerGuess1"></div>
                <div className="computerGuessBox" id="computerGuess2"></div>
                <div className="computerGuessBox" id="computerGuess3"></div>
                <div className="computerGuessBox" id="computerGuess4"></div>
                <br />
            </div>
        );
    }
}

let rowCounter = 1;
class GameBoard extends React.Component {

    constructor() {
        super();

        this.state = {
            noOfRows: 1
        }
    }

    _handleClick() {
        if (!areAllFilled()) {
            $('#infoBox').html('<p>Not all fields are filled</p>');
        } else {

            if (rowCounter == 1) {
                beginGame();
            }

            $('#infoBox').html('');
            let isWinner = checkCorrectness(rowCounter);
            if (!isWinner) {
                rowCounter++;
                this.setState({noOfRows: rowCounter});
            }
        }

    }

    render() {
        draggerFunction();


        var rows = [];
        for (var i = 0; i < rowCounter; i++) {
            if (i == rowCounter - 1) {
                rows.push(<GameRow idType="lastOne"/>);
            } else {
                rows.push(<GameRow idType="normalRow"/>);
            }
        }

        return (
            <div id="boardWrapper">


                {rows}
                <ColorPicker />
                <div id="infoBox"></div>
                <ComputerColors />
                <div id="checkButton">
                    <button type="button" id="checkButtonInner" onClick={this._handleClick.bind(this)}>Check</button>
                </div>


            </div>


        );
    }

    componentDidMount() {
        draggerFunction();
        setColorArray();
        setComputerPlayerColors();
        fillComputerColorBoxes();
    }

    componentDidUpdate() {
        draggerFunction();
    }
}

ReactDOM.render(
    <GameBoard />,
    document.getElementById('board')
);