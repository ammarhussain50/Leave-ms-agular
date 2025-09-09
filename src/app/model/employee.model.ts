export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface EmployeeList {
  employeeId: number;
  employeeName: string;
  deptId: number;
  deptName: string;
  contactNo: string;
  emailId: string;
  role: string;
}

export class LoginModel {
  emailId: string = '';
  password: string = '';
}
