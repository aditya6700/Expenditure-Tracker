const testData = [
    {
        "_id": "618fbe3343bae506e244ce20",
        "reason": "Food",
        "paidTo": "others",
        "name": "Gandalf",
        "paymentType": "GPay",
        "amount": "520",
        "date": "2021-11-13T13:31:07.803Z",
        "__v": 0
    },
    {
        "_id": "618fbe4843bae506e244ce23",
        "reason": "shelter",
        "paidTo": "self",
        "name": "aditya",
        "paymentType": "PayTm",
        "amount": "928",
        "date": "2021-11-13T13:31:07.803Z",
        "__v": 0
    },
    {
        "_id": "618fd410e1c9d19d916523f3",
        "reason": "Train",
        "paidTo": "self",
        "name": "Bala",
        "paymentType": "PhonePay",
        "amount": "9000",
        "date": "2021-11-13T15:04:04.923Z",
        "__v": 0
    },
    {
        "_id": "618fdc6db96f93a82149237d",
        "reason": "Bus",
        "paidTo": "self",
        "name": "",
        "paymentType": "Cash",
        "amount": "590",
        "date": "2021-11-13T15:05:17.005Z",
        "__v": 0
    },
    {
        "_id": "618fdc94b96f93a821492380",
        "reason": "Bike",
        "paidTo": "others",
        "name": "Srikanth",
        "paymentType": "PayTm",
        "amount": "896",
        "date": "2021-11-13T15:05:17.005Z",
        "__v": 0
    },
    {
        "_id": "618fdcd6b96f93a821492383",
        "reason": "College",
        "paidTo": "others",
        "name": "Srikanth",
        "paymentType": "GPay",
        "amount": "1050",
        "date": "2021-11-13T15:05:17.005Z",
        "__v": 0
    },
    {
        "_id": "618fdce714e0313f3b24fa19",
        "reason": "Food",
        "paidTo": "others",
        "name": "Bala",
        "paymentType": "Cash",
        "amount": "370",
        "date": "2021-11-13T15:42:19.282Z",
        "__v": 0
    },
    {
        "_id": "618fdd0314e0313f3b24fa1c",
        "reason": "Petrol",
        "paidTo": "others",
        "name": "bala",
        "paymentType": "PhonePay",
        "amount": "425",
        "date": "2021-11-13T15:42:19.282Z",
        "__v": 0
    }
];

var selfAmountObj = {
    "total": 0,
    "gpay": 0,
    "phonepay": 0,
    "paytm": 0,
    "cash": 0,
};

var otherAmountObj = {
    name1: {
        "total": 0,
        "gpay": 0,
        "phonepay": 0,
        "paytm": 0,
        "cash": 0,
    },
    name2: {
        "total": 0,
        "gpay": 0,
        "phonepay": 0,
        "paytm": 0,
        "cash": 0,
    },
};

var selfArr = [], otherArr = [];