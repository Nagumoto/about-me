import React, { Component } from 'react'

class ProjectItem extends Component {
    render = () => {
        return (
            <div>
                <h2><span>{this.props.name}</span><span>{this.props.dates}</span></h2>
                {this.props.description}
            </div>
        )
    }
}

export default ProjectItem