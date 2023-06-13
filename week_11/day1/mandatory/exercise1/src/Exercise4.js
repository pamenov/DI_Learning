// In a separate Javascript file, create a new Component called Exercise4 that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise4 to the App.js file and display it.
import React from 'react';
import './Exercise4.css';

function Fourth() {
    const h1_styling = {
        color: 'red',
        backgrounfcolor: 'lightblue',
    }
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
    const h1_tag = <h1 style={style_header}> H1 </h1>

    return (
        <>  
            {h1_tag}
            <p className='para'> paragraph </p>
            <a href="#"> link </a>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
              <br />
              <input type="submit" value="Submit"/>
            </form>
            <img src="https://crossarea.ru/wp-content/uploads/2018/08/Graffiti-zachem-12.jpg" />
            <ul>
                <li> rishon </li>
                <li> Sheni </li>
                <li> Slishi </li>
            </ul>
        </>
    )
}

export default Fourth