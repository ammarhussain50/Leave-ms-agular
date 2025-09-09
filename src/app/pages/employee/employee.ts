import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { APIResponseModel, EmployeeList } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [AsyncPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit {

   employeeService = inject(EmployeeService);
  employeeList: EmployeeList[] = [];
   deptList$:Observable<any[]> = new Observable<any[]>;

  // view child is like document.getElementById we access modal using #newModal
  @ViewChild('newModal') newModal!: ElementRef;

  ngOnInit(): void {
    this.getEmployees();
     this.deptList$ = this.employeeService.getDept();
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

}
