import { useState } from "react";
import React from 'react'

export default function TextBlock(props) {

    const output = (o) => {
        let block = document.getElementById('value');
        block.innerHTML = o;
    }

    let handleChange = (e) => {
        setText(e.target.value);
    }

    let upper = () => {
        let newText = text.toUpperCase();
        output(newText);
    }

    let lower = () => {
        let newText = text.toLowerCase();
        output(newText);
    }

    let copy = () => {
        let block = document.getElementById('value');
        navigator.clipboard.writeText(block.innerHTML);
        props.alert("Copied to clipboard", 'success');
    }

    let clear = () => {
        document.getElementById('exampleFormControlTextarea1').value = '';
        document.getElementById('value').innerHTML = null;
        setText("");
    }

    const titleCase = () => {
        let arr = text.split(" ");
        for (let index = 0; index < arr.length; index++) {
            arr[index] = arr[index].replace(arr[index].charAt(0), arr[index].charAt(0).toUpperCase());
        }
        output(arr.join(" "));
    }

    const sentenceCase = () => {
        let c = text.toLowerCase();
        let arr = c.split(". ");
        for (let index = 0; index < arr.length; index++) {
            arr[index] = arr[index].replace(arr[index].charAt(0), arr[index].charAt(0).toUpperCase());
        }
        c = arr.join(". ");
        c = c.trim();
        output(c);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="mb-3 my-3">
                <h3 className={`text-${props.style.textBlock.hColor}`}>Enter the Text here for analysis..</h3>
                <textarea className="form-control" placeholder="Enter the text..." onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={upper}>All Upper</button>
                <button className="btn btn-primary my-3 mx-2" onClick={lower}>All Lower</button>
                <button className="btn btn-primary my-3 mx-2" onClick={titleCase}>Title Case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={sentenceCase}>Sentence Case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={copy}>Copy</button>
                <button className="btn btn-primary my-3 mx-2" onClick={clear}>Clear</button>
            </div>
            <h2 className={`text-${props.style.textBlock.hColor}`}>Output</h2>
            <div className="container border bg-dark text-light">
                {text.trim().length === 0 ? 0 : text.trim().split(' ').length} words {text.length} characters
                <pre id="value"></pre>
            </div>
        </>
    )
}
