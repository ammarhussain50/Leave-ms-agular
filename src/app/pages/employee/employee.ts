import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { APIResponseModel, EmployeeList, EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [AsyncPipe,FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit {

   employeeService = inject(EmployeeService);
  employeeList: EmployeeList[] = [];
   deptList$:Observable<any[]> = new Observable<any[]>;
   roleList$:Observable<any[]> = new Observable<any[]>;
   employeeObj: EmployeeModel = new EmployeeModel();

  // view child is like document.getElementById we access modal using #newModal
  @ViewChild('newModal') newModal!: ElementRef;

  ngOnInit(): void {
    this.getEmployees();
     this.deptList$ = this.employeeService.getDept();
     this.roleList$ = this.employeeService.getRoles();
  }


  openModal() {
    if(this.newModal) {
      this.newModal.nativeElement.style.display = 'block';
    } 

  }
  closeModal() {
    if(this.newModal) {
      this.newModal.nativeElement.style.display = 'none';
    }


}

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (response: APIResponseModel) => {
        this.employeeList = response.data;
      },
      error: () => {
        // handle error here
      }
    });
  }


  addEmployee() {
  this.employeeService.onAddEmployee(this.employeeObj).subscribe({
    next: (res:any) => {
      if(res.result) {
        console.log(res);
        

        this.getEmployees(); // Refresh the employee list
         this.closeModal();
        alert('Employee added successfully');
      } else {
        alert(res.message);
      }
     
    
     
    },
    error: (error) => {
      // Handle error response
    }
  });

}
}
