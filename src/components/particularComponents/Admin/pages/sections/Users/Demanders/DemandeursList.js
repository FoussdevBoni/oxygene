import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import authorsTableData from "../../data/authors-table-data";
import projectsTableData from "../../data/projects-table-data";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../../../../../../Backend/Data/config";

export const HomeWorkers = ()=>{
    const [users , setUsers ]= useState()
    useEffect(() => {
    const dataRef = ref(db, 'users/clients');
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersList = Object.entries(data).map(([id, item]) => ({ id, ...item }));

        setUsers(usersList);
        console.log(usersList)
      } else {
        setUsers([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
return(
    <div className="mt-12 mb-8 flex flex-col gap-12">
          <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6"
                style={{backgroundColor:'Blue', color:'white'}}

        >
          <Typography variant="h6" color="black">
             Les travailleurs domestiques
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Membre",  "statut",  ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(
                (user , index , key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={index}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <img src={user.profile} alt={''} size="sm" 
                          class="inline-block rounded-full overflow-hidden w-10 h-10 bg-blue-500 flex items-center justify-center"
                          />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {user.firstName}   {user.lastName}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {user.email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={user.statut!==undefined ? "green" : "blue-gray"}
                          value={user.statut!==undefined ? "online" : "En ligne"}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        />
                      </td>
                     
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
)
}





