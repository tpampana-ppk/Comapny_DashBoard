import axios from "axios";

import { MyFormData, User, deptAdmin, deptAdminData  } from "../types/types";


export const getDeptAdmins =async (tocken:string)=>{
    const response = await axios.get(`https://dev-admin.sunrises.io/api/get-departadmins`,{
        headers:{
            'Authorization':tocken,
            'Content-Type':'application/json'
        }
    });
    
    const usersArray:User[] = Object.values(response.data);
    const data:deptAdmin[]= usersArray.map(({ _id, email }) => ({ _id, email }));
    const convertedDataArray: deptAdminData[] = data.map((item) => ({
      id: item._id,
      username: item.email, 
    }));
    console.log(convertedDataArray)
    return convertedDataArray;
}

export const getSites =async (tocken:string)=>{
    const response = await axios.get(`https://dev-admin.sunrises.io/api/get-sites`,{
        headers:{
            'Authorization':tocken,
            'Content-Type':'application/json'
        }
    });
    console.log("sitesr",response.data);
    return response.data;
}

export const postData = async(tocken:string,formData:MyFormData) =>{
    try{
        const response = await axios.post('https://dev-admin.sunrises.io/api/create-department',formData,{
        headers:{
            'Authorization':tocken,
            'Content-Type':'application/json'
        }
    });
    return response;
    }catch(error){
        return error;
    };
}