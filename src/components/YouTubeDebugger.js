// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }   
    }

    handleBitrate = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = () => {
        this.setState({
            ...this.state, 
            settings: {
                ...this.state.settings, 
                video: {
                    resolution: '720p'
                }
            }
        })
    }


    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}



export default YouTubeDebugger


// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.

// This component has several state properties. The initial state shape looks like this:

// Create a button with the class 'bitrate'. 
// Clicking this button changes the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. 
// Clicking this button changes the settings.video.resolution state property to '720p'