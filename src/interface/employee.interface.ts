export interface IEmployee{
  id:number;
  name:string;
  email:string;
  gender?:GENDER;
}


  export interface EmployeeList {
    employees: IEmployee[];
  }
  
  export enum GENDER {
    MALE = "male",
    FEMALE = "female",
  }
  