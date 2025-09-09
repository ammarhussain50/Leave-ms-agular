import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
   router = inject(Router);
onLogout() {
  localStorage.removeItem("leaveUser")
  // Navigate to login page or perform any other logout actions
  this.router.navigateByUrl('/login');
}
}
