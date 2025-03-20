import CalculatorContextProvider from './CalculatorComponentContext.jsx';
import UserInput from './UserInput/UserInput.component.jsx';
import ResultTable from './ResultTable/ResultTable.component.jsx';

const CalculatorComponent = () => {
    return (
        <CalculatorContextProvider>
            <UserInput />
            <ResultTable />
        </CalculatorContextProvider>
    );
}

export default CalculatorComponent;