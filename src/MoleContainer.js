import { useState } from 'react'

import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
    let { score, setScore } = props
    let [displayMole, setDisplayMole] = useState(false)
    const handleMoleBopping = () => {
        setScore(score + 1)
        setDisplayMole(false)
    }
    return (
        <div>
            {displayMole ? <Mole handleMoleBopping={handleMoleBopping} setDisplayMole={setDisplayMole}/> : <EmptySlot setDisplayMole={setDisplayMole} />}
        </div>
    )
}

export default MoleContainer