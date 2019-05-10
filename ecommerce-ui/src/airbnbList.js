import React from "react";
import AirbnbButton from "./AirbnbButton";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";

export default class AirbnbList extends React.Component {
  render() {
    const AirbnbList = this.props.airbnbs.map((airbnb, idx) => {
      return (
        <li key={idx}>
          <Card className="card">
              <CardHeader
                title={airbnb.title}
                subheader={airbnb.location.city}
              />
              <CardMedia
              style={{height: 0, paddingTop: '56.25%'}}
                image={airbnb.image}
                title={airbnb.title} 
              />
            <CardActions>
                <div>${airbnb.payment.cost}</div>
              <AirbnbButton
                airbnb={airbnb}
                onClick={this.props.onBookAirbnb}
                idx={idx}
                key={idx}
                buttonText="Book"
              />
            </CardActions>
          </Card>
        </li>
      );
    });

    return (
        <ul>{AirbnbList}</ul>
    );
  }
}
AirbnbList.propTypes = {
    airbnbs: PropTypes.array.isRequired,
    onBookAirbnb: PropTypes.func.isRequired,
  };
