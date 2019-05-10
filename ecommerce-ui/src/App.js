import React from "react";
import "normalize.css";
import "./App.css";
import AirbnbList from "./airbnbList";
import ShoppingCart from "./ShoppingCart";
import airbnbJSON from "./_data/airbnbs.json";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      airbnbs: airbnbJSON,
      selectedAirbnbs: []
    };
  }

  bookAirbnb = idx => {
    const selectedAirbnb = this.state.airbnbs[idx];
    if (this.state.selectedAirbnbs.includes(selectedAirbnb)) {
      alert("You already selected that airbnb.");
      return;
    }

    this.setState(prevState => {
      return {
        selectedAirbnbs: [...prevState.selectedAirbnbs, selectedAirbnb]
      };
    });
  };

  deleteAirbnb = idx => {
    this.setState(prevState => {
      const selectedAirbnbs = [...prevState.selectedAirbnbs];
      selectedAirbnbs.splice(idx, 1);

      return {
        selectedAirbnbs
      };
    });
  };

  render() {
    return (
      <div className="App">
      <AppBar position="sticky" color="default">
        <Toolbar  className="bar">
          <Typography component="h1" variant="h4">
          Vacation Rentals
          </Typography>
        <ShoppingCart
            airbnbs={this.state.selectedAirbnbs}
            onDeleteAirbnb={this.deleteAirbnb}
          />
          </Toolbar>
      </AppBar>
      
          <div className="row">
          <AirbnbList
            airbnbs={this.state.airbnbs}
            onBookAirbnb={this.bookAirbnb}
          />
        </div>
      </div>
    );
  }
}

export default App;
