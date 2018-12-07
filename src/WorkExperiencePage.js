import React, { Component, Fragment } from 'react'
import SiteNav from './SiteNav'
import WorkExperienceItem from './WorkExperienceItem'

class WorkExperiencePage extends Component {
    render = () => {
        return (
            <Fragment>
                <article>
                    <header>
                        <h1>Neils' Work History</h1>
                        <SiteNav />
                    </header>
                    <WorkExperienceItem dates="Nov 2012 - Nov 2018" company="CEO Operating" jobRole="Water Plant Operator" responsibility="Responsible for the operation of DAF units and various valves and pumps" responsibility2="Created Excel spreadsheets to log and report important operating data" responsibility3="Created custom calculations for chemical dosing and flow rate management" />
                    <WorkExperienceItem dates="Spring 2008 - Fall 2010" company="TL Productions" jobRole="Product Development Supervisor" responsibility="Maintained development and production machines" responsibility2="Performed visual and audio tests of all products" responsibility3="Trained other employees" />
                    <WorkExperienceItem dates="Spring 2003 - Winter 2007" company="TL Productions" jobRole="Webmaster" responsibility="Designed, Built, and maintained websites using ColdFusion and JavaScript" responsibility2="Responsible for maintenance of Windows machines" responsibility3="General IT Support" />
                </article>
            </Fragment>
        )
    }
}

export default WorkExperiencePage