import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, EmployeeFormComponent],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Welcome to Dashboard</h1>
        <button (click)="logout()" class="logout-button">Logout</button>
      </div>
      <app-employee-form></app-employee-form>
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
