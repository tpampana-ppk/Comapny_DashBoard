import axios from "axios"

const baseUrl = `https://dev-admin.sunrises.io/api/`;

const CompaniesPayload = {
  columns: [
    { data: "companyName", name: "", searchable: true, orderable: true, search: { value: "", regex: false } },
    { data: "companyUrl", name: "", searchable: true, orderable: true, search: { value: "", regex: false } },
    { data: "adminLinkExtension", name: "", searchable: true, orderable: true, /* ... additional properties */ },
    { data: "numberOfTrainees", name: "", searchable: true, orderable: true, /* ... additional properties */ },
    { data: "numberOfDepartments", name: "", searchable: true, orderable: true, /* ... additional properties */ },
    { data: "isActive", name: "", searchable: true, orderable: true, search: { value: "", regex: false } }
  ],
  draw: 1,
  length: 10,
  order: [{ column: 0, dir: "asc" }],
  search: { value: "", regex: false },
  start: 0
};


export const getCompanies = async(tocken:string) =>{
  const response=await axios.post(baseUrl+`get-company`,CompaniesPayload,{
    headers: {
      'Authorization': `Bearer ${tocken}`,
      'Content-Type': 'application/json'
    }
  })
  return response.data.data
}



import { MyFormData1 } from "../Company_Types/formTypes";
import { Admin, Simulation, Tutorial } from "../Company_Types/types";

export const getSimulations = async(authToken:string) =>{
    const url = 'get-all-simulations';

    const response = await axios.get(baseUrl+url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (response.status === 200) {
    const data: Simulation[] | undefined = response.data;
    return data;
  } else {
    console.error('Failed to fetch simulations:', response.status, response.statusText);
  }
}

export const getTutorials = async(authToken:string) =>{
    const url = 'get-tutorials';

    const response = await axios.get(baseUrl+url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (response.status === 200) {
    const data: Tutorial[] | undefined = response.data;
    return data;
  } else {
    console.error('Failed to fetch simulations:', response.status, response.statusText);
  }
}


export const getAdmins = async(authToken:string) =>{
    const url = 'get-users?_id=123&params=companyadmin';

    const response = await axios.get(baseUrl+url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (response.status === 200) {
    const data: Admin[] | undefined = response.data;
    return data;
  } else {
    console.error('Failed to fetch simulations:', response.status, response.statusText);
  }
}


export const postData = async(formData:MyFormData1,authToken:string) =>{

const updatedFormData = {
  ...formData,
  enableSSO: false
};

const updatedFormData1 = {
  ...updatedFormData,
  sso : {}
};
  const url = 'create-company';
  const response = await fetch(baseUrl+url, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFormData1),
  });    
  if (response.ok) {
       return response;
    } else {
      console.error('Failed to post data:', response.status, response.statusText);
    }

}












