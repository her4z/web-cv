import "./Home.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { createTheme, Paper, ThemeProvider } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import NightStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

export default class Home extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);

    let darkMode = this.getCookie();
    this.state = {
      checked: darkMode,
      hideSubtext: true,
    };
  }

  componentDidMount() {
    this.loadAnimations();
  }

  loadAnimations() {
    this.setState({
      firstAnimation: "animate__bounceInLeft",
      secondAnimation: "animate__bounceInRight",
    });
    setTimeout(() => {
      this.setState({
        hideSubtext: false,
        thirdAnimation: "animate__fadeIn",
      });
    }, 1100);
  }

  getCookie() {
    let cookieArray = document.cookie.split("=");
    if (cookieArray[0] === "dark-mode") {
      if (cookieArray[1] === "true") {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  handleCheck() {
    console.log(this.state);
    this.setState(
      {
        checked: this.state.checked === true ? false : true,
      },
      () => {
        console.log(this.state);
        document.cookie = `dark-mode=${this.state.checked}`;
      }
    );
  }

  render() {
    const theme = createTheme({
      palette: {
        mode: this.state.checked === true ? "dark" : "light",
      },
    });
    return (
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100%", width: "100%" }} elevation={0} square>
          <div className="container">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Switch
                  checked={this.state.checked}
                  onChange={() => this.handleCheck()}
                  checkedIcon={
                    <NightStayIcon htmlColor="white"></NightStayIcon>
                  }
                  icon={<WbSunnyIcon htmlColor="yellow"></WbSunnyIcon>}
                ></Switch>
              </Grid>
              <Grid item xs={12} className="welcome-text">
                <div
                  className={`welcome-text-first animate__animated ${this.state.firstAnimation}`}
                >
                  <text>Hi,</text>
                </div>
              </Grid>
              <Grid item xs={12} className="welcome-text">
                <div
                  className={`welcome-text-second animate__animated ${this.state.secondAnimation}`}
                >
                  <text>I'm Her4z</text>
                </div>
              </Grid>
              <Grid item xs={12} className="welcome-subtext">
                <div
                  hidden={this.state.hideSubtext}
                  className={`welcome-text-third animate__animated ${this.state.thirdAnimation}`}
                >
                  <text>(Sebastián Heras)</text>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </ThemeProvider>
    );
  }
}
