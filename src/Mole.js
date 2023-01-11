import { useEffect } from 'react'

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
        <div onClick={handleMoleBopping}>
            <h4>Mole</h4>
        </div>
    )
}

export default Mole