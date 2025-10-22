import React from 'react'

const Student = ({id, name, age, marks, onExit }) => {
    let x=0, count=0;
    if (Array.isArray(marks)){
    marks.forEach(element => {
        x += element
        count++
    });
}
    const avg = (x / count);
    let s="";
    if (avg >= 90)
        s = "תמיד מצטיין";
    if (avg < 60)
        s = " טעון שיפור";
function exit(){
    const currentTime = new Date().toLocaleTimeString();
    console.log(`${name} יצאת בשעה ${currentTime}`)
    onExit();
}
    return (
        <>
            <h1>שם {name}</h1>
            <h1>תעודת זהות {id}</h1>
            <h1>תואר {s}</h1>
            <h2>כיתה {age}</h2>
            <button onClick={exit}>יציאה</button>
        </>
    )
}

export default Student
