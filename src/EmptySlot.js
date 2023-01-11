import { useEffect } from "react"

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
            <h4>Empty Slot</h4>
        </div>
    )
}

export default EmptySlot