import './Home.css';
import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';




export default class Home extends Component {
    render() {
        return (
            <div className="container" style={{width: '100%', height: '100%'}}>
                <h1>Sorry, this isn't finished yet :/</h1>
                <h3>"Lo siento, esto aún no está terminado."</h3>
                <div className="button-troll">
                    <Button
                        target="_blank"
                        href="https://youtu.be/dQw4w9WgXcQ"
                        variant="contained"
                        style={{backgroundColor: '#F23A29', color: 'black', fontWeight: 600}}
                    >Click me for a sneak peek!</Button>
                </div>
                <div className="social-buttons">
                    <Button
                    className="button_icon"
                    href="https://www.linkedin.com/in/sebastianheras/"
                    target="_blank"
                    startIcon={<LinkedInIcon className="social-icons" style={{height: '50px', width: '50px'}}/>}
                    classes={{ startIcon: 'social-icons' }}

                    />
                    <Button
                    className="button_icon"
                    href="https://github.com/her4z"
                    target="_blank"
                    startIcon={<GitHubIcon className="social-icons" style={{height: '50px', width: '50px'}}/>}
                    classes={{ startIcon: 'social-icons' }}
                    />
                </div>
            </div>
        )
    }
}
