import PropTypes from 'prop-types'
import HistoryItem from "./HistoryItem";

const HistorySection = ({ histories, restored, handleRestoreBtn }) => {

    return (
        <div>
            <p> History </p>
            {histories.length === 0 ? (
                <p>
                    <small> There is no History </small>{" "}
                </p>
            ) : (
                <ul>
                    {histories.map((historyItem) =>
                    (<HistoryItem key={historyItem.id} disabled={restored === historyItem.id} historyItem={historyItem}
                        handleRestoreBt={handleRestoreBtn}

                    />))}
                </ul>
            )}
        </div>
    )
}

HistoryItem.propTypes = {
    histories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            input: PropTypes.shape({
                a: PropTypes.number.isRequired,
                b: PropTypes.number.isRequired
            }).isRequired,
            operation: PropTypes.string.isRequired,
            result: PropTypes.string.isRequired,
            date: PropTypes.object.isRequired
        })),
    restored: PropTypes.number.isRequired,
    handleRestoreBt: PropTypes.func.isRequired
}

export default HistorySection;