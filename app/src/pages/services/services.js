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
    "We can handle routine lawn care including edging, patching bare spots, and maintaining irrigation systems.",
    "We offer hydroseeding services available for residential and commercial properties—ideal for erosion control & new lawns.",
    "We offer landscape installation, including planting, hardscaping, and outdoor features for your space.",
    "We can remove stumps from your property, and handle both extraction and backfilling to leave your yard clean & stump-free.",
    "Our excavation services include site preparation, grading, and digging for landscaping or construction projects.",
    "Seasonal cleanup services to remove leaves, branches, and other debris, along with trimming.",
    "We will haul away yard waste, renovation debris, and/or general clutter.",
    "Mulch or stone will be delivered directly to your property. Installation available upon request."
];


const generalInfo = (
    <p style={{ alignItems: 'center', textAlign: 'center', fontFamily: "Times", fontSize: '20px', marginLeft: "10px", marginRight: "10px", marginBottom: '17px', marginTop: '20px' }}>
        Here is the list of services we offer. If you have any questions or comments, feel free to reach out to us through our{" "}
        <a href="/contact">contact page</a>,{" "} phone number or email.
    </p>
);

/* grid, then card, then title/description etc etc. make fx to go ahead and load in names of employees and such */
/* one owner, 6 employees */
class Services extends React.Component {




    render() {

        return (
            <div style={{ alignItems: 'center', alignText: 'center' }}>
                {generalInfo}
                <div className="sgrid">
                    {cardGenerator(Names, Descriptions)}
                </div>
            </div>

        );
    }
}


export default Services;