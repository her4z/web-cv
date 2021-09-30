import './Home.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';




export default class Home extends React.Component<{}, any> {
    constructor(props:any) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
        this.loadAnimations();
    }

    loadAnimations(){
        this.setState({
            firstAnimation: 'animate__fadeInLeft',
            secondAnimation: 'animate__fadeInRight'
        })
    }

    render() {
        return (
            <div className="container" style={{width: '100%', height: '100%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className="welcome-text">
                        <div className={`welcome-text-first animate__animated ${this.state.firstAnimation}`}>
                            <text>Hi,</text>
                        </div>
                    </Grid>
                    <Grid item xs={12} className="welcome-text">
                        <div className={`welcome-text-second animate__animated ${this.state.secondAnimation}`}>
                            <text >I'm Sebastian</text>
                        </div>
                    </Grid>

                </Grid>
            </div>
        )
    }
}
