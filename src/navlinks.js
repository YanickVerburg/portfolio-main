import React from 'react';
import './styles/style.css';
import {Route} from 'react-router-dom';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Submit from './components/submit';
import About from './components/about';
import Project from './components/project';
import Project2 from './components/project2';
import Project3 from './components/project3';
import apiclient from './components/apiclient';



function NavLinks() {
    return(
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/contact/submit" component= {Submit}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/project2" component={Project2} />
                <Route exact path="/project3" component={Project3} />
                <Route exact path="/apiclient" component={apiclient} />
            </div>
    );
}

export default NavLinks;