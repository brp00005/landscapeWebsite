//from original: https://codepen.io/jamiehalvorson/pen/KNyRNVa
//grid stuff: https://react-ui.io/components/Grid/

import React from "react";
import "./about.css";
import Skyline from "./skyline.jpg"
import { Grid } from '@react-ui-org/react-ui';

class CardHeader extends React.Component {
    render() {
        const { image } = this.props;
        const style = {
            backgroundImage: `url(${image})`,
        };
        return (
            <header style={style} className="card-header" />
        );
    }
}

/* class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  }
} */

class CardBody extends React.Component {
    render() {
        const { title, text } = this.props;
        return (
            <div className="card-body">
                <h2 className="center">{title}</h2>
                <hr />
                <p className="body-content">{text}</p>
                {/* <Button/> */}
            </div>
        );
    }
}



class Card extends React.Component {
    render() {
        return (
            <article className="card">
                <CardHeader image={Skyline} />
                <CardBody
                    title="Name"
                    text="Description"
                />
            </article>
        );
    }
}

/* grid, then card, then title/description etc etc. make fx to go ahead and load in names of employees and such */
/* one owner, 6 employees */
class About extends React.Component {
    render() {
        return (
            <div className="grid">
                
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
            </div>
        );
    }
}


export default About;
