const form = document.getElementById('stat');
const tableBody = document.getElementById('tableBody');
const reportBody = document.getElementById('report');

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

const updateReport = (reportObj) => {
    reportContent = '';

    for (const name in reportObj) {
        if (Object.hasOwnProperty.call(reportObj, name)) {
            reportContent += `<p class="mb-0"><strong>you have spent ${reportObj[name].total} for ${name}</strong></p>
            <ul class="list-unstyled">`
            let subObj = reportObj[name];
            for (const payType in subObj) {
                if (Object.keys(subObj[payType]).length !== 0 && subObj[payType].constructor === Object) {
                    reportContent += `<li>using ${payType}:
                    <ul>`
                    let anotherSubObj = subObj[payType];
                    for (const reason in anotherSubObj) {
                        reportContent += `<li>${anotherSubObj[reason]} for ${reason}</li>`;
                    };
                    reportContent += `</ul></li>`;
                };
            };
            reportContent+=`</ul>`
        
        };

    };
    reportBody.innerHTML = reportContent;
}


const getReport = (testData) => {
    
    var reportObj = {},
        amountReportObj = {};

    testData.forEach((ele) => {
        let type = (ele.paidTo == "others") ? ele.name : "self"
  
        type = type.charAt(0).toUpperCase() + type.slice(1);
        if (!reportObj[type]) {
            reportObj[type] = new Array()
        }
        reportObj[type].push(ele);

    });

    // selfArr.forEach(ele => console.log(ele, "\n ---------------"));
    // for (const key in reportObj) {
    //     if (Object.hasOwnProperty.call(reportObj, key)) {
    //         console.log(reportObj[key], "\n ---------------\n");
        
    //     }
    // }

    const reportFun = (obj, type) => {
        amountReportObj[type] = {
            "total": 0,
            "GPay": {},
            "PhonePay": {},
            "PayTm": {},
            "Cash": {},
        };
        // console.log(obj)

        obj.forEach((ele) => {
            amountReportObj[type]["total"] += +ele.amount;
            (!amountReportObj[type][ele.paymentType][ele.reason]) ?
                amountReportObj[type][ele.paymentType][ele.reason] = +ele.amount :
                amountReportObj[type][ele.paymentType][ele.reason] += +ele.amount;
        });

    };

    // reportFun(reportObj["self"],"self");

    for (const key in reportObj) {
        if (Object.hasOwnProperty.call(reportObj, key)) {
            // console.log(reportObj[key], "\n ---------------\n");
            reportFun(reportObj[key], key)
        
        }
    }
    // console.log(amountReportObj);

    updateReport(amountReportObj);

    // reportBody.innerHTML = JSON.stringify(amountReportObj);
};


const statememtDecode = async () => {
    try {
        
        let fromDate = document.getElementById('fromDate').value;
        let toDate = document.getElementById('toDate').value;
        if (!(toDate)) {
            let date = new Date(fromDate);
            date.setDate(date.getDate() + 1);
            toDate = date;
        }

        // console.log(fromDate, toDate)
       

        const statement = await fetch(`http://localhost:3000/query?toDate=${toDate}&fromDate=${fromDate}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        const jsonStatement = await statement.json()
        const arrStatement = [jsonStatement][0];

        // console.log(arrStatement);

        updateTable(arrStatement);
        getReport(arrStatement);
    }
    catch (error) {
        console.log("error occured" + error); 
    }
};

form.addEventListener('click', statememtDecode);

window.onload = () => {
    console.log("hey there")
}