import React, { Component } from "react";
import TravelCard from "./components/TravelCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import travel from "./travel.json";

class App extends Component {
  // Setting this.state.travel to the travel json array
  state = {
    travel
  };

  removeTravel = id => {
    // Filter this.state.travel for travel with an id not equal to the id being removed
    const travel = this.state.travel.filter(travel => travel.id !== id);
    // Set this.state.travel equal to the new travel array
    this.setState({ travel });
  };

  // Map over this.state.travel and render a TravelCard component for each travel object
  render() {
    return (
      <Wrapper>
        <Title>Travel Destinations</Title>
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
      </Wrapper>
    );
  }
}

export default App;
