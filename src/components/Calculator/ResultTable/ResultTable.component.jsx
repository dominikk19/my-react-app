import styles from './ResultTable.module.css'
import { useContext, useMemo } from 'react';
import { CalculatorComponentContext } from '../CalculatorComponentContext.jsx';

const formatter = new Intl.NumberFormat( 'en-Us', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
} )

const ResultTable = () => {
        const {
            data,
            isCalculated,
            initialInvestment,
        } = useContext( CalculatorComponentContext );

        if (!data.length > 0) {
            return (
                <p
                    className={styles.noData}
                >
                    No investment calculated yet.
                </p>
            );
        }

        return (
            <table className={styles.result}>
                <thead>
                <tr>
                    <th>Year</th>

                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                </thead>
                <tbody>
                {data.map( (it) => (
                    <tr key={it.year}>
                        <td>{it.year}</td>
                        <td>{formatter.format( it.savingsEndOfYear )}</td>
                        <td>{formatter.format( it.yearlyInterest )}</td>
                        <td>{formatter.format( it.savingsEndOfYear
                            - initialInvestment
                            - it.yearlyContribution * it.year )}</td>
                        <td>{formatter.format( initialInvestment + it.yearlyContribution * it.year )}</td>
                    </tr>
                ) )}

                </tbody>
            </table>
        )
    }
;

export default ResultTable;