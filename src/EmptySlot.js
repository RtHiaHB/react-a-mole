import { useEffect } from "react"
import molehillImg from "./molehill.png"

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds =  Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img src={molehillImg}></img>
        </div>
    )
}

export default EmptySlot