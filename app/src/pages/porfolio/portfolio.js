//from original: https://codepen.io/jamiehalvorson/pen/KNyRNVa
//grid stuff: https://react-ui.io/components/Grid/

import React from "react";
import "./styles.css";
import { Grid } from '@react-ui-org/react-ui';
import { NavLink as Link } from "react-router-dom";
import Mowing from "./mowing";
import Landscaping from "./landscaping";
import Excavation from "./excavation";

class CardHeader extends React.Component {
    render() {
        const { image } = this.props;
        const style = {
            backgroundImage: `url(${image})`,
        };
        return (
            <header style={style} className="pcard-header" />
        );
    }
}

/* class Button extends React.Component {
  render() {
    return (
      <button className="pbutton button-primary">
        <i className="fa fa-chevron-right"></i> See images
      </button>
    );
  }
} */

class CardBody extends React.Component {
    render() {
        const { title, text } = this.props;
        return (
            <div className="pcard-body">
                <h2 className="pcenter">{title}</h2>
                {/* <Button/> */}
            </div>
        );
    }
}



class Card extends React.Component {
    render() {
        /* magic */
        const { title, text, image, path } = this.props;

        return (
            <Link to={path}>
                <article className="pcard">
                    <CardHeader image={image} />
                    <CardBody
                        title={title}
                    />
                </article>
            </Link>

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

function cardGenerator(titles, texts, images, paths) {
    return titles.map((title, i) => (
        <Card key={i} title={title} text={texts[i]} image={images[i]} path={paths[i]} />
    ));
}

/* grid, then card, then title/description etc etc. make fx to go ahead and load in names of employees and such */
/* one owner, 6 employees */
class Portfolio extends React.Component {

    render() {
        const names = ["Mowing", "Landscaping", "Excavation"];
        const descriptions = ["", "", ""];
        const imageArray = [
            require('./landImgs/n1.jpg'),
            require('./landImgs/n2.jpg'),
            require('./landImgs/n3.jpg'),
            require('./landImgs/n4.jpg'),
            require('./landImgs/n5.jpg'),
            require('./landImgs/n6.jpg'),
            require('./landImgs/n7.jpg'),
        ];

        const links = ["/mowing", "/landscaping", "/excavation"];

        return (
            <div className="pgrid">
                {cardGenerator(names, descriptions, imageArray, links)}
            </div>
        );
    }
}


export default Portfolio;
