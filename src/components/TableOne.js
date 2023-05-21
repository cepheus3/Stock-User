import BrandOne from '../images/brand/brand-02.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-02.svg';
import BrandFour from '../images/brand/brand-02.svg';
import BrandFive from '../images/brand/brand-02.svg';
import { useEffect, useState } from 'react';
import axiosinstance2 from '../Axios/Axios2';
import axios from 'axios';
import { useStateValue } from '../Context/StateProvider';

const TableOne = () => {

 /*  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await axiosinstance2.get('/getCompany');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { table, setTable } = useState([]);
  useEffect(() => {
    axiosinstance2.get('/getCompany').then((data) => {
      setTable(data);
    });
  }, []);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:2000/api/getCompany`)
      .then((response) => {
        console.log(response.json());
      })
      .then((actualData) => {
        setData(actualData);
      });
  }, []);

    const [{token,company}] = useStateValue();
  axiosinstance2
    .get('/getCompany', { CompanyName: CompanyName })
    .then((res) => {
      if(res.status=='200'){
        dispatch({
          type:"company",
          company:res.data.message
        })

        console.log(res.data.message,"newwwwwwwwwwwwwww")
        console.log(company,"companyliststtttt")
      }
    }).catch((err)=>{
      console.log(err)
    });
 */
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
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
              Investors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Stock Price
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Available Stocks
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>

{/*         {data &&
          data.map((item) => (
            <div className="grid grid-cols-3 sm:grid-cols-5">
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img src={BrandFive} alt="Brand" />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {item.CompanyName}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{item.amount}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{item.price}</p>
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default TableOne;
