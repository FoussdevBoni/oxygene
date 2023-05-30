import React, { useContext, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
  
} from "@heroicons/react/24/outline";
import StatisticsCard from "../../widgets/cards/statistics-card";
import statisticsCardsData from "../../data/statistics-cards-data";
import { CardFooter } from "framework7-react";
import { members_data } from "../../data/members-data";
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";
import UsersContext from "./UsersContext";
export function Categories() {
       const {usersVariables , setUsersVariables} = useContext(UsersContext)

  const navigate = useNavigate()
    useEffect(()=>{
    }, [])
  return (
    <div className="mt-12">
      <div className="grid grid-cols-3 gap-4 ">
          {
            members_data.map((e)=>{
                return(
    <Card className=" w-70 h-40 bg-white  shadow-md border border-gray-300 rounded" onClick={
        ()=>{
            navigate(e.category.replace(/\s/g, '-'))
      
        }
    } style={{cursor:'pointer'}}>
      <CardHeader
        variant="gradient"
        color={'blue'}
        style={{backgroundColor: 'blue'}}
        className=" -mt-4 grid h-16 w-16 place-items-center rounded"
      >
        <div className="font-bold">
           {e.number}
        </div>
      </CardHeader>
      <CardBody className="p-4 text-left">
        <Typography variant="small" className="font-normal text-blue-gray-600">
            <h6 className="font-bold">
              {e.category}
            </h6>
        </Typography>
        <Typography variant="h4" color="blue-gray">
        </Typography>
      </CardBody>
   
        <CardFooter className=" border-blue-gray-50 p-4">
         
        </CardFooter>
    
    </Card>
                )
            })
          }
      </div>
     
    
    </div>
  );
}



export default Categories;