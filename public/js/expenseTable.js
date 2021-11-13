const getdata = document.getElementById('getData');
const tableBody = document.getElementById('tableBody');

const updateTable = (data) => {
    
    let tableContent = '';

    // console.log(data);
    data.forEach((expense, index) => {
        let { reason, paidTo, name, paymentType, amount, date } = expense;
        
        let tDateTime = new Date(date)
        let tDate = tDateTime.toLocaleDateString();
        let tTime = tDateTime.toLocaleTimeString();
        
        tableContent += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${reason}</td>
                    <td>${paidTo}</td>
                    <td>${name}</td>
                    <td>${paymentType}</td>
                    <td>${amount}</td>
                    <td>${tDate}</td>
                    <td>${tTime}</td>
                </tr> `
    });
    tableBody.innerHTML = tableContent;
};

const expenseList = async () => {
    try {
        const response = await fetch('http://localhost:3000/expense', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        // console.log([data]);
        updateTable([data][0])

    } catch (error) {
        console.log(error);
    }
};

getdata.addEventListener("click", expenseList);
window.onload = expenseList();
