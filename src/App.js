import React, { Component } from "react";
import TravelCard from "./components/TravelCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Description from "./components/Description";
import travel from "./travel.json";


class App extends Component {
  // Setting this.state.travel to the travel destinations array
  state = {
    currentScore: 0,
    travel: travel
  };

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  removeTravel = id => {
    this.setState({
      TravelCard: this.state.travel.map((TravelCard) => {
        if (TravelCard.id === id) {
          if (TravelCard.chosen === true) {
            alert("Play again!");
            window.location.reload();
          }
          else {
            TravelCard.chosen = true;
            this.setState({ currentScore: this.state.currentScore + 1 });
            //TODO this conditional isn't running, likely due to async issue
            if (this.state.currentScore === 12){
              alert("You won!");
              window.location.reload();
            }
          }
        }
        return TravelCard;
      })
    });
    this.shuffleArray(this.state.travel);
  };


  render() {
    return (
      <Wrapper>
        <Title>Travel Destinations</Title>
        <Description>Below are 12 images made by a Swiss travel agency in the late 19th century.
          Learn more <a href="https://www.loc.gov/collections/photochrom-prints/about-this-collection/">here</a>
          .  Travel to each destination only once, using the suitcase icon, and try to get a perfect score. <br></br>
          Current Score: {this.state.currentScore}/12</Description>
        <div className="container">
          {this.state.travel.map(travel => (
            <TravelCard
              removeTravel={this.removeTravel}
              id={travel.id}
              key={travel.id}
              name={travel.name}
              image={travel.image}
              chosen={travel.chosen}
              location={travel.location}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
