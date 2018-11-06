const getExpensesTotal = (expenses = []) => {
    return expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0);
};

export default getExpensesTotal;