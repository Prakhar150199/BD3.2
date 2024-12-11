const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let names = ['Rahul', 'Sita', 'Amit', 'Vikram'];
let employees = [
  { employeeId: 1, name: 'Amit' },
  { employeeId: 2, name: 'Sita' },
  { employeeId: 3, name: 'Rahul' },
];

let contacts = [
  { phoneNumber: '123456789', name: 'Rahul', address: '123 Street, City' },
  { phoneNumber: '767557657', name: 'Shiv', address: '23 Park Avenue, City' },
  {
    phoneNumber: '767897999',
    name: 'Seema',
    address: '19th Main Street, City',
  },
];

let users = [
  { username: 'amit223', name: 'Amit', score: 89 },
  { username: 'sita456', name: 'Sita', score: 90 },
  { username: 'rahul123', name: 'Rahul', score: 99 },
];

function findNumber(ele, number) {
  return ele === number;
}

app.get('/numbers/find/:number', (req, res) => {
  let number = parseInt(req.params.number);
  let result = numbers.find((ele) => findNumber(ele, number));
  res.json(result);
});

function findName(ele, name) {
  return ele === name;
}

app.get('/names/find/:name', (req, res) => {
  let name = req.params.name;
  let result = names.find((ele) => findName(ele, name));
  res.json(result);
});

function findId(ele, Id) {
  return ele.employeeId === Id;
}

app.get('/employees/find/:Id', (req, res) => {
  let Id = parseInt(req.params.Id);
  let result = employees.find((ele) => findId(ele, Id));
  res.json(result);
});

function findUser(ele, username) {
  return ele.username === username;
}

app.get('/users/find/:username', (req, res) => {
  let username = req.params.username;
  let result = users.find((ele) => findUser(ele, username));
  res.json(result);
});

function findContact(ele, phoneNumber) {
  return ele.phoneNumber === phoneNumber;
}

app.get('/contacts/find/:phoneNumber', (req, res) => {
  let phoneNumber = req.params.phoneNumber;
  let result = contacts.find((ele) => findContact(ele, phoneNumber));
  res.json(result);
});

app.use(express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
