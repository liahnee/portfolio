import React, { useState } from 'react';

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
    const [ selected, setSelected ] = useState("");
    const [ hover, setHover ] = useState("");

    const handleClick = (item) => {
        if (selected === item ) {
            setSelected(""); 
        } else {
            setSelected(item);
        };
    }

    const selectedTitleStyle = (item) => {
        if (hover.title === item.title) {
            return {backgroundColor: "darkgrey"}
        }
        if (selected.title === item.title) {
            return {backgroundColor: "lightgrey"}
        };
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
        }
    }

    const show = () => {
        if (hover !== "") {
        return <a href={hover.link} target="_blank"><img className="project-image" src={imgSrc(hover)} alt={hover.image.alt} /><p className="project-description">{hover.description}</p>{hover.skillsDescription? <p className="skillsDescription">{hover.skillsDescription}</p>: null}</a> 
        }  else if (selected !== "") {
            return (
                <a href={selected.link} target="_blank"><img className="project-image" src={imgSrc(selected)} alt={selected.image.alt} /><p className="project-description">{selected.description}</p>{selected.skillsDescription? <p className="skillsDescription">{selected.skillsDescription}</p>: null}</a> 
                    
            );
        } 
    }

    const handleUnclick = (e) => {
        if (e.target.className !== "project-title") {
            setSelected("")
        }
    }
 
    return (
        <section className="project-list" onClick={(e) => handleUnclick(e)}>
            <h3>{data.title}</h3>
            <p className="project-description">{data.description} Click to see the details. </p>
            <div className="project-list-grid" >
                <div className="project-list-lists">
                    {data.lists.map((item, idx) => {
                            return (
                                <p key={idx} className="project-title" onClick={() => handleClick(item)} onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={()=>handleMouseLeave()} style={selectedTitleStyle(item)}>{item.title}</p>
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