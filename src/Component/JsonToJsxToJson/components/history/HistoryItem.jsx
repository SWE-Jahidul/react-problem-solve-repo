import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from '../ui/Button'

const HistoryItem = ({ historyItem, disabled, handleRestoreBtn }) => {

    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show)
    }

    return (
        <li key={historyItem.id}>
            <div>
                <p>
                    Oparation : {historyItem.inputs.a} {historyItem.operation}
                    {historyItem.inputs.b} Result : {historyItem.result}
                </p>

                <Button text={show ? 'Hide' : 'Show'} onClick={handleToggle} />
            </div>


            {
                show && (<> <small>{new Date().toLocaleDateString()}</small>

                    <Button
                        text='Restore'
                        onClick={() => handleRestoreBtn(historyItem)}
                        disabled={disabled}
                    />   </>)
            }




        </li>
    )
}

HistoryItem.propTypes = {
    historyItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        inputs: PropTypes.shape({
            a: PropTypes.number.isRequired,
            b: PropTypes.number.isRequired
        }),
        operation: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired,
        date: PropTypes.object.isRequired
    }),
    disabled: PropTypes.bool.isRequired,
    handleRestoreBtn: PropTypes.func.isRequired,
}

HistoryItem.propTypes = {
    disabled: false
}
export default HistoryItem;