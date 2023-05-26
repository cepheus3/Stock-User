import { fetchEmail, fetchToken } from '../FectchLocalStorage/Fech';
const token = fetchToken();
const email = fetchEmail();
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
};
