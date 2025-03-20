import styles from './UserInput.module.css';
import { useContext } from 'react';
import { CalculatorComponentContext } from '../CalculatorComponentContext.jsx';
import InputWrapper from '../../Common/InputWrapper.jsx';


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
                <InputWrapper
                    name={"currentSavings"}
                    label={"Current Savings ($)"}
                    value={userInput.currentSavings}
                    type={"number"}
                    onChange={(event) => inputChangeHandler( 'currentSavings', event.target.value )}
                />
                <InputWrapper
                    name={"yearlyContribution"}
                    label={"Yearly Savings ($)"}
                    value={userInput.yearlyContribution}
                    type={"number"}
                    onChange={(event) => inputChangeHandler( 'yearlyContribution', event.target.value )}
                />
            </div>
            <div className={styles.inputGroup}>
                <InputWrapper
                    name={"expectedReturn"}
                    label={"Expected Interest (%, per year)"}
                    value={userInput.expectedReturn}
                    type={"number"}
                    onChange={(event) => inputChangeHandler( 'expectedReturn', event.target.value )}
                />
                <InputWrapper
                    name={"duration"}
                    label={"Investment Duration (years)"}
                    value={userInput.duration}
                    type={"number"}
                    onChange={(event) => inputChangeHandler( 'duration', event.target.value )}
                />
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