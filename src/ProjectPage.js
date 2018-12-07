import React, { Component, Fragment } from 'react'
import SiteNav from './SiteNav'
import ProjectItem from './ProjectItem'

class ProjectPage extends Component {
    render = () => {
        return (
            <Fragment>
                <article>
                    <header>
                        <h1>Neils' Work History</h1>
                        <SiteNav />
                    </header>
                    <ProjectItem name="About Me" dates="11/12/2018 - Ongoing" description="I made a website about me! I started with simple HTML and CSS. From there I updated and upgraded the entire site as I learned new techniques and languages." />
                </article>
            </Fragment>
        )
    }
}

export default ProjectPage