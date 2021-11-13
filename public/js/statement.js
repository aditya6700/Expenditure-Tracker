const form = document.getElementById('stat');
const tableBody = document.getElementById('tableBody');

const updateTable = (data) => {
    
    let tableContent = '';

    // console.log(data);
    data.forEach((expense, index) => {
        let { reason, paidTo, name, paymentType, amount, date } = expense;
        
        let tDateTime = new Date(date);
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

const statememtDecode = async () => {
    try {

        const toDate = document.getElementById('toDate').value;
        const fromDate = document.getElementById('fromDate').value;

        const statement = await fetch(`http://localhost:3000/query?toDate=${toDate}&fromDate=${fromDate}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        const jsonStatement = await statement.json()
        const arrStatement = [jsonStatement][0];

        console.log(arrStatement);

        updateTable(arrStatement);
    }
    catch (error) {
        console.log("error occured" + error); 
    }
};

form.addEventListener('click', statememtDecode);

window.onload = () => {
    console.log("hey there")
}