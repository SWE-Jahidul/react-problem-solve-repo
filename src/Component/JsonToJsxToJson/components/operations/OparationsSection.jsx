
import PropTypes from 'prop-types'
import Button from "../ui/Button"
const shortid = require('shortid');
const OparationsSection = ({ handleArithmeticOperation, handleClearOps }) => {
    const operations = [
        {
            id: shortid.generate(),
            text: '+',
            onClick: () => handleArithmeticOperation("+")
        },
        {
            id: shortid.generate(),
            text: '-',
            onClick: () => handleArithmeticOperation("-")
        }
        ,
        {
            id: shortid.generate(),
            text: '*',
            onClick: () => handleArithmeticOperation("*")
        }
        ,
        {
            id: shortid.generate(),
            text: '/',
            onClick: () => handleArithmeticOperation("/")
        }
        ,
        {
            id: shortid.generate(),
            text: 'clear',
            onClick: handleClearOps
        }
    ]
    const style = {
        display: 'flex',
        gap: '1rem'
    }
    return (
        <div
            style={{
                marginTop: "10px",
            }}
        >
            <p> Operations </p>

            <div style={style}>
                {
                    operations.map(ops => <Button key={ops.id} text={ops.text} onClick={ops.onClick} />)
                }

            </div>

        </div>

    )
}


OparationsSection.propTypes = {
    handleArithmeticOperation: PropTypes.func.isRequired, handleClearOps: PropTypes.func.isRequired

}

export default OparationsSection; 