import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

export default class AirbnbButton extends React.Component {
  render() {
    const { onClick, idx, buttonText } = this.props;

    return (
        <Button
          size="small"
          onClick={() => onClick(idx)}
          variant="contained"
          color="primary"
        >
          {buttonText}
        </Button>
    );
  }
}

AirbnbButton.propTypes = {
  airbnb: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};
