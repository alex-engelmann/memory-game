import React, { Component } from "react";
import TravelCard from "./components/TravelCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Description from "./components/Description"


class App extends Component {
  // Setting this.state.travel to the travel destinations array
  state = {
    currentScore: 0,
    travel: [
      {
        "id": 1,
        "name": "Het Steen and Port",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/52200/52287v.jpg",
        "chosen": false,
        "location": "Antwerp, Belgium"
      },
      {
        "id": 2,
        "name": "Brandenburg Gate",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/52500/52524v.jpg",
        "chosen": false,
        "location": "Berlin, Germany"
      },
      {
        "id": 3,
        "name": "Grand Pyramid",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/03000/03030v.jpg",
        "chosen": false,
        "location": "Cairo, Egypt"
      },
      {
        "id": 4,
        "name": "The Tower of Iwan Weliky and the Czar of Cannons",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/52700/52737v.jpg",
        "chosen": false,
        "location": "Moscow, Russia"
      },
      {
        "id": 5,
        "name": "Taj Mahal",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/52600/52646v.jpg",
        "chosen": false,
        "location": "Agra, India"
      },
      {
        "id": 6,
        "name": "Houses of Parliament",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/52400/52404v.jpg",
        "chosen": false,
        "location": "London, England"
      },
      {
        "id": 7,
        "name": "St. Honorat Monastery",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/52400/52468v.jpg",
        "chosen": false,
        "location": "Cannes, France"
      },
      {
        "id": 8,
        "name": "Trans-Mississippi Exposition",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/52900/52914v.jpg",
        "chosen": false,
        "location": "Omaha, Nebraska, USA"
      },
      {
        "id": 9,
        "name": "Basilica of St. Nicholas",
        "image": "https://cdn.loc.gov/service/pnp/ppmsc/05700/05766v.jpg",
        "chosen": false,
        "location": "Amsterdam, Netherlands"
      },
      {
        "id": 10,
        "name": "Royal Palace",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/52800/52814v.jpg",
        "chosen": false,
        "location": "Madrid, Spain"
      },
      {
        "id": 11,
        "name": "Scott Monument",
        "image": "https://cdn.loc.gov/service/pnp/ppmsc/07500/07587v.jpg",
        "chosen": false,
        "location": "Edinburgh, Scotland"
      },
      {
        "id": 12,
        "name": "Am Hof Square",
        "image": "https://cdn.loc.gov/service/pnp/ppmsca/52200/52282v.jpg",
        "chosen": false,
        "location": "Vienna, Austria"
      }
    ]

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
            alert("you lose!");
            window.location.reload();
          }
          else {
            TravelCard.chosen = true;
            this.setState({ currentScore: this.state.currentScore + 1 });
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
          .  Travel to each destination only once, using the suitcase icon, and try to get a perfect score of 12. <br></br>
          Current Score: {this.state.currentScore}</Description>
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
