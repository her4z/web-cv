import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


export default class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <h1>Sorry, this isn't finished yet :/</h1>
                <h3>"Lo siento, esto aún no está terminado."</h3>
                <button> <a target="_blank" href="https://youtu.be/dQw4w9WgXcQ">Click me for a sneak peek!</a> </button>
                <div style={{marginTop: '2%'}}>
                    <Button
                    size="large"
                    href="https://www.linkedin.com/in/sebastianheras/"
                    startIcon={<LinkedInIcon/>}
                    />
                    <Button
                    size="large"
                    href="https://github.com/her4z"
                    startIcon={<GitHubIcon/>}
                    />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, odio debitis! Qui enim nam quae, optio iste temporibus, placeat tempore cumque, repellendus voluptate eos sint non dolore at harum! Voluptatibus!</p>
            </div>
        )
    }
}
