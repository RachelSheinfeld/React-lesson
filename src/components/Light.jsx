import { useState } from "react"

const Light = () => {
   const [isLight, isdark] = useState(true)

    const handleChangeWeather = () => {
        isdark(!isLight)
    }
    return (
        <>
        <h1>{isLight? "מצב בהיר": "מצב כהה"}</h1>
        <button onClick={handleChangeWeather}>שינוי מצב  </button>
        </>
    )
}

export default Light

