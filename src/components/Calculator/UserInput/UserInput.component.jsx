import styles from './UserInput.module.css';
import { useContext } from 'react';
import { CalculatorComponentContext } from '../CalculatorComponentContext.jsx';


const UserInput = () => {

    const {
        userInput,
        addParameter,
        reset,
        submit
    } = useContext( CalculatorComponentContext )

    const submitHandler = (event) => {
        event.preventDefault();
        submit();
    };

    const resetHandler = () => {
        reset();
    };

    const inputChangeHandler = (input, value) => {
        addParameter( input, value );
    };

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.inputGroup}>
                <p>
                    <label htmlFor="currentSavings">Current Savings ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler( 'currentSavings', event.target.value )}
                        value={userInput.currentSavings}
                        type="number"
                        id="currentSavings"
                    />
                </p>
                <p>
                    <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler( 'yearlyContribution', event.target.value )}
                        value={userInput.yearlyContribution}
                        type="number"
                        id="yearlyContribution"
                    />
                </p>
            </div>
            <div className={styles.inputGroup}>
                <p>
                    <label htmlFor="expectedReturn">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) => inputChangeHandler( 'expectedReturn', event.target.value )}
                        value={userInput.expectedReturn}
                        type="number"
                        id="expectedReturn"
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) => inputChangeHandler( 'duration', event.target.value )}
                        value={userInput.duration}
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className={styles.actions}>
                <button
                    onClick={resetHandler}
                    type="reset"
                    className={styles.buttonAlt}
                >
                    Reset
                </button>
                <button
                    onClick={submitHandler}
                    type="submit" className={styles.button}
                >
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default UserInput;