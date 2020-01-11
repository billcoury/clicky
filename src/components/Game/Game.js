import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';
import Card from '../Card/Card';
import data from '../../cards.json'

class Game extends Component {
    state = {
        data,
        score: 0,
        bestScore: 0,
    };

    componentDidMount() {
        this.setState({ data: this.shuffleDeck(this.state.data) });
    }

    handleCorrectGuess = newData => {
        const { bestScore, score } = this.state;
        const newScore = score + 1;
        const newBestScore = newScore > bestScore ? newScore : bestScore;
        this.setState({
            data: this.shuffleDeck(newData),
            score: newScore,
            bestScore: newBestScore,
        });
    }

    handleIncorrectGuess = data => {
        this.setState({
            data: this.resetGame(data),
            score: 0,
        });
    }

    handleCardClick = id => {
        let correctGuess = false;

        const newData = this.state.data.map(item => {
            const newitem = { ...item };
            if (newitem.id === id) {
                if (!newitem.clicked) {
                    newitem.clicked = true;
                    correctGuess = true;
                }
            }
            return newitem;
        });
        correctGuess ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
    };

    resetGame = data => {
        const resetGame = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleDeck(resetGame);
    }

    shuffleDeck= data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    render() {
        return(
            <div>
                <Header score={this.state.score} bestScore={this.state.bestScore} />
                <Container>
                    {this.state.data.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            handleClick={this.handleCardClick}
                            image={item.image}
                        />
                    ))}
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Game;
