//from original: https://codepen.io/jamiehalvorson/pen/KNyRNVa
//grid stuff: https://react-ui.io/components/Grid/

import React from "react";
import { Grid } from '@react-ui-org/react-ui';
import "./services.css"



/* class CardHeader extends React.Component {
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
 */
class CardBody extends React.Component {
    render() {
        const { title, text } = this.props;
        return (
            <div className="scard-body">
                <h2 className="scenter">{title}</h2>
                <hr />
                <p className="sbody-content">{text}</p>
                {/* <Button/> */}
            </div>
        );
    }
}



class Card extends React.Component {
    render() {
        /* magic */
        const { title, text, image } = this.props;

        return (

            <article className="scard">
                {/* <CardHeader image={image} /> */}
                <CardBody
                    title={title}
                    text={text}
                />
            </article>
        );
    }
}

function cardGenerator(titles, texts) {
    return titles.map((title, i) => (
        <Card key={i} title={title} text={texts[i]} />
    ));
}


const Names = [
    "Lawn Maintenance",
    "Hydroseeding",
    "Landscaping",
    "Stump Removal",
    "Excavation",
    "Spring/Fall Cleanup",
    "Dump Trailer Removal",
    "Mulch and Stone Delivery"
];

const Descriptions = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "Installation available*"
];

const generalInfo = (
    <p style = {{alignItems:'center', textAlign:'center', fontFamily: "Times", fontSize: '30px', marginLeft: "10px", marginRight: "10px"}}>
        Here is the list of services we offer. If you have any questions or comments, feel free to reach out to us through our{" "}
        <a href="/contact">contact page</a>,{" "} phone number or email. 
    </p>
);

/* grid, then card, then title/description etc etc. make fx to go ahead and load in names of employees and such */
/* one owner, 6 employees */
class Services extends React.Component {




    render() {

        return (
            <div style = {{alignItems: 'center', alignText: 'center'}}>
                {generalInfo}
                <div className="sgrid">
                    {cardGenerator(Names, Descriptions)}
                </div>
            </div>

        );
    }
}


export default Services;