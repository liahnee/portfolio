import React, { useState, useEffect } from 'react';

import '../stylesheets/projectList.css';
import PPro from '../assets/preview_pro.png';
import PDoc from '../assets/preview_doc.png';
import PSur from '../assets/preview_sur.png';
import PTri from '../assets/preview_tri.png';

import WHR from '../assets/whr_front.png';
import AC from '../assets/adopt.png';
import Tree from '../assets/tree.png';
import ST from '../assets/sentT.png';

export default ({data, ...props}) => {
    useEffect(() => {
        let imgList = [PPro, PDoc, PSur, PTri, WHR, AC, Tree, ST];
        imgList.forEach(i => {
            new Image().src = i;
        });
    }, [])

    const [ selected, setSelected ] = useState(data.lists[0]);
    const [ hover, setHover ] = useState("");

    const handleClick = (item) => {
        if (selected === item ) {
            setSelected(""); 
        } else {
            setSelected(item);
        };
    }

    const selectedTitleStyle = (item, idx) => {
        let style = countBorder(idx);
        if (hover.title === item.title) {
            style.backgroundColor = "darkgrey";
            return style;
        }
        if (selected.title === item.title) {
            style.backgroundColor = "lightgrey";
            return style;
        };
        return style;
    }

    const hoverDescriptionStyle = () => {
        if (hover.title === selected.title && hover !== "") {
            return {backgroundColor: "lightgrey"}
        }
    }

    const handleMouseEnter = (item) => {
        setHover(item);
    }

    const handleMouseLeave = () => {
        setHover("");
    }

    const imgSrc = (item) => {
        switch (item.image.src) {
            case 'PPro':
                return PPro;
            case 'PDoc':
                return PDoc;
            case 'PSur':
                return PSur;
            case 'PTri':
                return PTri;
            case 'WHR':
                return WHR;
            case 'AC':
                return AC;
            case 'Tree':
                return Tree;
            case 'ST':
                return ST;
            default:
                return null;
        }
    }

    const show = () => {
        if (hover !== "") {
        return <a href={hover.link} target="_blank" rel="noopener noreferrer">
                <img className="project-image" src={imgSrc(hover)} alt={hover.image.alt} />
                {hover.skills? <p className="skills">Skills: {hover.skills}</p>: null}
                <p className="project-description">{hover.description}</p>
                {hover.skillsDescription? <p className="skillsDescription">{hover.skillsDescription}</p>: null}
            </a> 
        }  else if (selected !== "") {
            return (
                <a href={selected.link} target="_blank" rel="noopener noreferrer">
                    <img className="project-image" src={imgSrc(selected)} alt={selected.image.alt} />
                    {selected.skills? <p className="skills">Skills: {selected.skills}</p>: null}
                    <p className="project-description">{selected.description}</p>
                    {selected.skillsDescription? <p className="skillsDescription">{selected.skillsDescription}</p>: null}
                </a> 
                    
            );
        } 
    }

    const handleUnclick = (e) => {
        if (e.target.className !== "project-title") {
            setSelected("")
        }
    }

    const countBorder = (idx) => {
        if (idx === 0) {
            return {borderTop: "2px solid grey", borderBottom: "2px solid grey"}
        } else {
            return {borderBottom: "2px solid grey"}
        }
    }
 
    return (
        <section className="project-list" onClick={(e) => handleUnclick(e)}>
            <h3>{data.title}</h3>
            <p className="project-description">{data.description} </p>
            <div className="project-list-grid" >
                <div className="project-list-lists">
                    {data.lists.map((item, idx) => {
                            return (
                                <p key={idx} className="project-title" onClick={() => handleClick(item)} onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={()=>handleMouseLeave()} style={selectedTitleStyle(item, idx)}>{item.title}</p>
                            )
                        })}
                </div>
                <div className="project-list-description" style={hoverDescriptionStyle()}>
                    {/* { seleted !== "" ? <a href={selected.link} target="_blank"><img className="project-image" src={selected.image.src} alt={selected.image.alt} /> </a> : null }
                    <p className="project-descrition">{selected.description}</p> */}
                    {show()}
                </div>
            </div>
        </section>
    );
}