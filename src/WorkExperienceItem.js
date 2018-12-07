import React, { Component } from 'react'

class WorkExperienceItem extends Component {

    render = () => {
        return (
            <div>
                <h2><span>{this.props.dates}</span><span>{this.props.company}</span><span>{this.props.jobRole}</span></h2>
                <ul>
                    <li>
                        {this.props.responsibility}
                    </li>
                    <li>
                        {this.props.responsibility2}
                    </li>
                    <li>
                        {this.props.responsibility3}
                    </li>
                </ul>
            </div>
        )
    }
}
export default WorkExperienceItem