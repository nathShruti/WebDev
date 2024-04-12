import React, { useState, useEffect, useRef } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import Axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";
// import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const TABLE_HEAD = ["CITY", "COUNTRY", "TIME ZONE"];
 
export function DefaultTable() {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  const options = async() => {
    try {
      const data = await Axios.get('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100')
      setList(data.data.results);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    options();
  }, [])



  return (
    <div className="m-10" >
    <Card className="h-80 w-full border-2 overflow-y-scroll rounded-xl border-black">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 "
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="leading-none font-bold"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            const isLast = index === list.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index}>
                <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    onClick={() => navigate("/page", {state: item})}
                  >
                    {item.name}
                  </Typography>
                  
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.cou_name_en}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.timezone}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    </div>
  );
}