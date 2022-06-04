import React from "react";
import Countdown from "react-countdown";
import { SLNTypography } from "../SLNTypography";

type SLNCountdownProps = {
  date: Date | number | string;
};


class SLNCountdown extends React.Component<SLNCountdownProps> {
  renderer = ({ formatted: { days, hours, minutes, seconds }, completed }) => {
    if (completed) {
      // Render a completed state
      return <SLNTypography kind="sectionTitleWhite">L - --:--:--:--</SLNTypography>;
    } else {
      // Render a countdown
      return (
          <SLNTypography kind="sectionTitleWhite">L - {days}:{hours}:{minutes}:{seconds}</SLNTypography>
      );
    }
  };

  render() {
    return <Countdown date={this.props.date} renderer={this.renderer}/>;
  }
}

export default SLNCountdown;
