const expenseList = fetch('http://localhost:3000/expense')
    .then(response => response.json())
    .then(data => data);

    
console.log(data);