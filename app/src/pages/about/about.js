import React, { useState, useEffect } from 'react';
import img1 from './employees/1.jpg';
import img2 from './employees/2.jpg';
import img3 from './employees/3.jpg';
import img4 from './employees/4.jpg';
import img5 from './employees/5.jpg';
import img6 from './employees/6.jpg';
import img7 from './employees/7.jpg';
import * as Icon from 'react-feather';

import background from '../../slideshow/fullRes/25.webp';

const About = () => {
    const employeeImages = [img1, img2, img3, img4, img5, img6, img7];

    const teamMembers = [
        {
            name: 'Larry Reaville',
            description: '25+ years of landscaping, hardscaping, & excavation experience in both West Virginia and New Jersey.',
            phone: '856-373-3885',
        },
        {
            name: 'Luke Reaville',
            description: '7+ years of landscaping, snow removal, etc.',
            phone: '304-777-9672',
        },
        { name: 'n3', description: 'd3' },
        { name: 'n4', description: 'd4' },
        { name: 'n5', description: 'd5' },
        { name: 'n6', description: 'd6' },
        { name: 'n7', description: 'd7' },
    ];

    const greyShades = [14, 25, 20, 15, 10, 25, 17];

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /*
        Spectral by HTML5 UP
        html5up.net | @ajlkn
        Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
    */

    const styles = {
        aboutUsContainer: {
            position: 'relative',
            color: 'white',
            fontFamily: "'Times New Roman', Times, serif",
            textAlign: 'center',
            overflow: 'hidden',
            backgroundImage: `url(${background})`,
        },
        aBackgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(40%) contrast(110%)',
            zIndex: 0,
        },
        aboutUsContent: {
            position: 'relative',
            zIndex: 1,
            padding: '40px 20px',
        },
        h1: {
            margin: '0 0 10px 0',
            paddingBottom: '10px',
            borderBottom: '2px solid white',
            display: 'inline-block',
            fontSize: isMobile ? '2rem' : '2.5rem',
        },
        pHeader: {
            margin: '10px auto 0 auto',
            maxWidth: '800px',
            fontSize: isMobile ? '1rem' : '1.2rem',
            lineHeight: 1.6,
        },
        banner: {
            color: 'white',
            fontFamily: "'Times New Roman', Times, serif",
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: isMobile ? 'column' : 'row',
            textAlign: isMobile ? 'center' : 'left',
        },
        imageContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            padding: isMobile ? '20px 0 0 0' : '0',
        },
        teamImage: {
            height: isMobile ? '150px' : '100%',
            width: isMobile ? '150px' : '200px',
            objectFit: 'cover',
        },
        textContainer: {
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
            flexGrow: 1,
        },
        h2: { margin: 0, fontSize: isMobile ? '1.8rem' : '2rem' },
        p: { margin: '10px 0', fontSize: isMobile ? '1.1rem' : '1.3rem' },
        phoneLink: {
            color: '#a7d8ff',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: isMobile ? '1.1rem' : '1.3rem',
        },
    };

    return (
        <div>
            <div style={styles.aboutUsContainer}>
                <div style={styles.aBackgroundImage}></div>
                <div style={styles.aboutUsContent}>
                    <h1 style={styles.h1}>About Us</h1>
                    <p style={styles.pHeader}>
                        We are a West Virginia company with numerous years of landscaping experience. <br />Check out our 7-member team below!
                    </p>
                </div>
            </div>

            {teamMembers.map((member, index) => (
                <header key={index} style={{ ...styles.banner, backgroundColor: `hsl(0, 0%, ${greyShades[index]}%)` }}>
                    <div style={styles.imageContainer}>
                        <img
                            src={employeeImages[index]}
                            alt={`${member.name}'s profile`}
                            style={styles.teamImage}
                        />
                    </div>
                    <div style={styles.textContainer}>
                        <h2 style={styles.h2}>{member.name}</h2>
                        <p style={styles.p}>{member.description}</p>
                        {member.phone && (
                            <a href={`tel:${member.phone}`} style={styles.phoneLink}>
                                <Icon.Phone size={17} color="#088a36" />
                                <p> &nbsp;&nbsp;</p>
                                {member.phone}
                            </a>
                        )}
                    </div>
                </header>
            ))}
        </div>
    );
};

export default About;
