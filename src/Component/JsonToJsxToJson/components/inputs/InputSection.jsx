import PropTypes from 'prop-types'
import NumberField from "../ui/NumberField";
const InputSection = ({ inputs, handleInputFields }) => {
    return (
        <div style={{
            width: '100%',
            background: 'gray',
            padding: '1rem',

        }}>
            <h3 style={{
                fontFamily: 'Arial',
                padding: '0.5rem 1rem',
                fontSize: '1.5rem',
                margin: 0,
                textAlign: 'center',
                color: 'white'

            }}>  Inputs </h3>
            <NumberField
                name="a"
                value={inputs.a}
                onChange={handleInputFields}
            />
            <NumberField
                name="b"
                value={inputs.b}
                onChange={handleInputFields}
            />
        </div>
    )
}

InputSection.propTypes = {
    inputs: PropTypes.objectOf({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired

    }).isRequired,
    handleInputFields: PropTypes.func.isRequired
}

export default InputSection;