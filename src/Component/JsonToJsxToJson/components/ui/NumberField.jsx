
import PropTypes from 'prop-types'; // ES6

const NumberField = ({ value, onChange, name }) => {

    const style = {
        padding: '0.25rem 1rem',
        borderRadius: '0.1rem',
        border: '1px solid gray',
        background: '#fff',
        outline: 'none'
    }
    return <input style={style} type='number' name={name} value={value} onChange={onChange} />
}

NumberField.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default NumberField;