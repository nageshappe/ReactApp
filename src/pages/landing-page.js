import React, { Component } from 'react';
import Header from './header';
import Tile from './tile';


class LandingPage extends Component {

   constructor()
   {
       super();
       this.skillInfo = [
           {
               name : 'HTML',
               description : "I will write semantic markup in HTML5 which is the latest standard of core technology of web",
               imgURL : '/images/html.png',
           },
           {
            name : 'CSS',
            description : "I will write semantic markup in HTML5 which is the latest standard of core technology of web",
            imgURL : '/images/css.png',
        },
       
        {
            name : 'TypeScript',
            description : "I will write semantic markup in HTML5 which is the latest standard of core technology of web",
            imgURL : '/images/ts.png',
        },
        {
            name : 'Angular',
            description : "I will write semantic markup in HTML5 which is the latest standard of core technology of web",
            imgURL : '/images/angular2.png',
        },
        {
            name : 'HTML',
            description : "I will write semantic markup in HTML5 which is the latest standard of core technology of web",
            imgURL : '/images/html.png',
        },
        {
            name : 'HTML',
            description : "I will write semantic markup in HTML5 which is the latest standard of core technology of web",
            imgURL : '/images/html.png',
        },
        {
            name : 'HTML',
            description : "I will write semantic markup in HTML5 which is the latest standard of core technology of web",
            imgURL : '/images/html.png',
        },
        {
            name : 'HTML',
            description : "I will write semantic markup in HTML5 which is the latest standard of core technology of web",
            imgURL : '/images/html.png',
        },
        {
            name : 'HTML',
            description : "I will write semantic markup in HTML5 which is the latest standard of core technology of web",
            imgURL : '/images/html.png',
        }
       ]

   }

    render() {
        return (
            <div>
                <Header></Header>
                {this.skillInfo.map((skill) =>{ 
                 return <Tile skillName={skill.name} skillDescription={skill.description} skillImage={skill.imgURL}></Tile>
                })}
                </div>
        );
    }
}
export default LandingPage;