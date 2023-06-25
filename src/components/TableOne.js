import BrandOne from '../images/brand/brand-02.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-02.svg';
import BrandFour from '../images/brand/brand-02.svg';
import BrandFive from '../images/brand/brand-02.svg';
import { useEffect, useState } from 'react';
import axiosinstance2 from '../Axios/Axios2';
import axios from 'axios';
import axiosinstance3 from '../Axios/Axios3';
import { useStateValue } from '../Context/StateProvider';
import BuyModal from './Modals/BuyModal';

const TableOne = () => {
  let info = [];
  const [{ company, userEmail, currentCompany }, dispatch] = useStateValue();
  const addcurrent = (name, price, stockName) => {
    /*info.push({ companyName: name, price: price, stockName: stockName });*/
    console.log(name, 'kjhjhjkhjkhjkhjkh');
  };
  console.log(userEmail, 'currrrrrrrrrent');
  useEffect(() => {
    axiosinstance3
      .get('/getCompany')
      .then((res) => {
        if (res) {
          dispatch({
            type: 'company',
            company: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(company, userEmail, 'sssssssss');

  const getTransaction = (companyName) => {
    axiosinstance3
      .get(`/getCompanyInfo/${companyName}`)
      .then((res) => {
        if (res.status == '200') {
          dispatch({
            type: 'companyinfo',
            companyinfo: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axiosinstance3
      .post('/company/getTransaction', { companyName: companyName })
      .then((res) => {
        if (res.status == '200') {
          console.log('infooooooooo', res);
          dispatch({
            type: 'transaction',
            transaction: res.data.message,
          });
          console.log(res.data.message, 'messaaageee');
        } else {
          dispatch({
            type: 'transaction',
            transaction: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" w-[900px] rounded-sm border border-stroke bg-white px-2 pt-3 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        List of Companies
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Companies
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              No of Stock
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Stock Price
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total Sell
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Buy/Sell
            </h5>
          </div>
        </div>

        {company &&
          company.map((item) => (
            <div className="grid grid-cols-3 sm:grid-cols-5">
              <div className="flex items-center gap-3 p-4.5 xl:p-5">
                <div className="flex-shrink-0">
                  <button
                    onClick={() => {
                      getTransaction(item.companyName);
                    }}
                  >
                    <img src={BrandFive} alt="Brand" />
                  </button>
                </div>
                <button>
                  <p className="hidden text-black dark:text-white sm:block">
                    {item.companyName}
                  </p>
                </button>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{item.amount}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{item.price}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{item.totalsell}</p>
              </div>

              <BuyModal
                name={item.companyName}
                price={item.price}
                stockName={item.stockName}
                userEmail={userEmail}
              ></BuyModal>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TableOne;
