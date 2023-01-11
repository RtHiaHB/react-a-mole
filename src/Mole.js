import { useEffect } from 'react'
import moleImg from './mole.png'

function Mole(props) {
    let { handleMoleBopping, setDisplayMole } = props
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img src={moleImg} onClick={handleMoleBopping} />
        </div>
    )
}

export default Mole