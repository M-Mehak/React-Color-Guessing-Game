import { Component } from 'react';
import Square from "./Square";
import Button from './Button';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      correctHexCode: '', 
      hexCodes: [],
      result: '',
      isIncorrectChoice: false,
    };
  }

  componentDidMount() {
    this.generateRandomColor();
  }

  generateRandomColor = () => {
    const correctHexCode = this.generateRandomHexCode();
    const hexCodes = this.generateRandomHexCodes(correctHexCode);

    this.setState({
      correctHexCode,
      hexCodes,
      result: '',
      isIncorrectChoice: false,
    });
  }

  generateRandomHexCode = () => {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hex.toUpperCase();
  }

  generateRandomHexCodes = (correctHexCode) => {
    const hexCodes = [correctHexCode];
    while (hexCodes.length < 3) {
      const hex = this.generateRandomHexCode();
      if (!hexCodes.includes(hex) && hex !== correctHexCode) {
        hexCodes.push(hex);
      }
    }
    return this.shuffleArray(hexCodes);
  }

  shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  handleButtonClick = (hexCode) => {
    if (hexCode === this.state.correctHexCode) {
      this.setState({ result: 'Correct!' });
      this.advanceToNextColor();
    } else {
      this.setState({ result: 'Incorrect!' });
      this.setState({ isIncorrectChoice: true });
    }
  }

  advanceToNextColor = () => {
    this.generateRandomColor();
  }

  render() {
    const { hexCodes, result, isIncorrectChoice } = this.state;

    return (
      <div className="center">
        <Square color={this.state.correctHexCode} />
        <div className="button-container">
          {hexCodes.map((hexCode, index) => (
            <Button
              key={index}
              hexCode={hexCode}
              onClick={() => this.handleButtonClick(hexCode)}
              className={isIncorrectChoice ? 'button-incorrect' : 'button'}
            />
          ))}
        </div>
        <p>{result}</p>
      </div>
    );
  }
}