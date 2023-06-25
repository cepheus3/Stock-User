import {
  fetchbalance,
  fetchEmail,
  fetchfirstname,
  fetchlastname,
  fetchToken,
} from '../FectchLocalStorage/Fech';
const token = fetchToken();
const email = fetchEmail();
const firstname = fetchfirstname();
const lastname = fetchlastname();
const balance = fetchbalance();
export const initialstate = {
  token: token,
  userEmail: email,
  company: null,
  stock: null,
  newcompany: null,
  companyName: null,
  TotalSell: 0,
  customer: 0,
  currentCompany: null,
  transaction: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  firstname: firstname,
  lastname: lastname,
  balance: balance,
  companyinfo: null,
};
