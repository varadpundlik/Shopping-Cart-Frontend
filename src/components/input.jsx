import axios from "axios";
import React, { useState } from "react";
function Input(props) {
    const [item, setItem] = useState({
        "name":"",
    })
    function submit() {
        props.onAdd(item)
        setItem(" ");
    }
    return (
        <div className="Input">
            <label htmlFor="">Enter item in shopping list</label>
            <input  value={item.name} onChange={(e) => setItem(e.target.value)}></input>
            <input type="button" value="submit" onClick={submit} className="btn btn-primary" />
        </div>
    )
}

export default Input;