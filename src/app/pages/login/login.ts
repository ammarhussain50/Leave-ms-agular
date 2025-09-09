import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee';
import { Router } from '@angular/router';
import { LoginModel } from '../../model/employee.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  employeeService = inject(EmployeeService)
  router = inject(Router)


// model ka object
  loginObj = new LoginModel();

  // strongly typed form
  loginForm = new FormGroup({
    emailId: new FormControl(this.loginObj.emailId, [Validators.required, Validators.email]),
    password: new FormControl(this.loginObj.password, [Validators.required, Validators.minLength(6)]),
  });

   

  // constructor(private fb: NonNullableFormBuilder) {
  //   this.loginForm = this.fb.group({
  //     emailId: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //   });
  // }


  onLogin() {


   
    this.employeeService.onLogin( this.loginForm.value).subscribe({
      next:(result:any)=>{
        if (result.result) {
          alert("login success")
          localStorage.setItem("leaveUser",JSON.stringify(result.data))
          this.router.navigateByUrl("/dashboard")
          
        }
        else{
          alert(result.message)
        }

      },
      error:()=>{
        alert('api error')

      }
    })



   
}
}
