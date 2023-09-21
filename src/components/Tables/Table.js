import React from "react";
import classes from "./Tables.module.css";

const formatter = new Intl.NumberFormat('ko', {
  style: 'currency',
  currency: "KRW",
  maximumFractionDigits: 0
})

const Table = (props) => {

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>연도</th>
          <th>총 저축금액</th>
          <th>이자금액 (년)</th>
          <th>누적 이자금액</th>
          <th>누적 저축액</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.savingsEndOfYear)}</td>
            <td>{formatter.format(result.yearlyInterest)}</td>
            <td>{formatter.format(result.savingsEndOfYear - props.initialInvestment - result.yearlyContribution * result.year)}</td>
            <td>{formatter.format(props.initialInvestment + result.yearlyContribution * result.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
