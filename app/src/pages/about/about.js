//from original: https://codepen.io/jamiehalvorson/pen/KNyRNVa
//grid stuff: https://react-ui.io/components/Grid/

import React from "react";
import { Grid } from '@react-ui-org/react-ui';
import "./about.css"

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
        /* magic */
        const { title, text, image } = this.props;

        return (

            <article className="card">
                <CardHeader image={image} />
                <CardBody
                    title={title}
                    text={text}
                />
            </article>
        );
    }
}

//traversing directory: https://fmennen.de/post/getting-all-files-in-a-directory-using-java-script


/* function traverseDirectory(directoryPath) {
    const fs = require('fs');
    const files = fs.readdirSync(directoryPath);


    const arr = new Array();

        files.forEach((file) => {
            const filePath = directoryPath + '/' + file;
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                traverseDirectory(filePath); // recursively call the function for subdirectories
            } else {
                arr.push(filePath)
            }
        }
    );
    return arr;
} */

function cardGenerator(titles, texts, images) {
    return titles.map((title, i) => (
        <Card key={i} title={title} text={texts[i]} image={images[i]} />
    ));
}




/* grid, then card, then title/description etc etc. make fx to go ahead and load in names of employees and such */
/* one owner, 6 employees */
class About extends React.Component {

    render() {
        const names = [
            "Larry Reaville",
            "Luke Reaville",
            "n3",
            "n4",
            "n5",
            "n6",
            "n7"
        ];

        const descriptions = [
            "25+ years of landscaping, hardscaping, & excavation experience in both West Virginia and New Jersey. Phone: 856-373-3885",
            "7+ years of landscaping, snow removal, etc. Phone: 304-777-9672",
            "d3",
            "d4",
            "d5",
            "d6",
            "d7"
        ];


        const imageArray = [
            require('./employees/n1.jpg'),
            require('./employees/n2.jpg'),
            require('./employees/n3.jpg'),
            require('./employees/n4.jpg'),
            require('./employees/n5.jpg'),
            require('./employees/n6.jpg'),
            require('./employees/n7.jpg'),
        ];


        return (
            <div>
                <div>
                    <h3 style={{ textAlign: "center", paddingTop: "20px", fontSize: "2.2vh", paddingLeft: "1vw", paddingRight: "1vw" }}>All Pro Landscaping is a West Virginia company that has team members with numerous years of experience with professional landscaping work. <br />Check out the seven members of our team below!</h3>
                </div>
                <div className="grid">
                    {cardGenerator(names, descriptions, imageArray)}
                </div>
            </div>
        );
    }
}


export default About;