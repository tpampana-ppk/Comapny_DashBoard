export interface FormErrors {
    departmentName: string;
    location: string;
    departadmin: string;
    sites: string;
    
  }

  export interface MyFormData {
  departmentName: string;
  location: string;
  departadmin: { id: string; username: string }[];
  sites: { id: string;siteName: string}[];
}


export interface siteData {
    id: string;
    siteName:string;
  }

  export interface siteallData {
    _id: string;
    siteName:string;
  }

  export interface deptAdminData {
  id:string;
  username:string;
};


  export interface deptAdmin {
  _id:string;
  email:string;
};


export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  username: string;
  password: string;
  role: string;
  isActive: boolean;
  loginSSO: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  companyid: string;
  departid: string;
  additionalRoles: string[]; 
  __v: number;
}
