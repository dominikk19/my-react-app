import React, { useState } from 'react';

const initialUserInput = {
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
};


export const CalculatorComponentContext = React.createContext( {
    userInput: {},
    data: [],
    initialInvestment: 0,
    addParameter: (inputName, value) => {},
    reset: () => {},
    submit: () => {},
} )

function CalculatorContextProvider({ children }) {
    const [ userInput, setUserInput ] = useState( initialUserInput );
    const [ data, setData ] = useState( [] );

    const handleAddParameter = (inputName, value) => {
        setUserInput( (prevInput) => {
            return {
                ...prevInput,
                [inputName]: +value,
            }
        } );
    };

    const handleReset = () => {
        setUserInput( initialUserInput);
        setData([]);
    };



    const handleSubmit = () => {
        const yearlyData = [];

        if (userInput) {
            let currentSavings = userInput.currentSavings;
            const yearlyContribution = userInput.yearlyContribution;
            const expectedReturn = userInput.expectedReturn / 100;
            const duration = userInput.duration;

            for (let i = 0; i < duration; i++) {
                const yearlyInterest = currentSavings * expectedReturn;
                currentSavings += yearlyInterest + yearlyContribution;
                yearlyData.push( {
                    year: i + 1,
                    yearlyInterest: yearlyInterest,
                    savingsEndOfYear: currentSavings,
                    yearlyContribution: yearlyContribution,
                } );
            }
            setData(yearlyData);
        }
    };

    const ctxValue = {
        userInput: userInput,
        data,
        initialInvestment: userInput.currentSavings,
        addParameter: handleAddParameter,
        reset: handleReset,
        submit: handleSubmit,
    };

    return <CalculatorComponentContext.Provider value={ctxValue}>
        {children}
    </CalculatorComponentContext.Provider>
}

export default CalculatorContextProvider;