import React from 'react'


const EventsHandlers = (e) => {
    const HandleInput=()=>{
        console.log("typing…" )
        console.log(e.target.value)
        
    }
    const HandelSubmit=(e)=>{
        e.preventDefault()
        alert("הטופס נשלח בהצלחה");
    }
  return (
    <form>
        <input type ="text" placeholder='name' onChange={HandleInput}/>
       <button type="submit" onClick={HandelSubmit}>submit</button>
    </form>
  )
}

export default EventsHandlers