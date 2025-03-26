import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  emp_name: string;
  emp_id: string;
  salary: number;
  phone: string;
  pf: number;
}

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="employee-container">
      <h2>Employee Information</h2>
      
      <form (ngSubmit)="onSubmit()" class="employee-form">
        <div class="form-group">
          <label for="name">Emp_Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            [(ngModel)]="employee.emp_name" 
            required>
        </div>

        <div class="form-group">
          <label for="text">emp_id:</label>
          <input 
            type="text" 
            id="emp_id" 
            name="email" 
            [(ngModel)]="employee.emp_id" 
            required>
        </div>

        <div class="form-group">
          <label for="salary">Salary:</label>
          <input 
            type="number" 
            id="salary" 
            name="salary" 
            [(ngModel)]="employee.salary" 
            (ngModelChange)="calculatePF()"
            required>
        </div>

        <div class="form-group">
          <label for="phone">Phone:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            [(ngModel)]="employee.phone" 
            required>
        </div>

        <div class="form-group">
          <label for="pf">Provident Fund (5% of Salary):</label>
          <input 
            type="number" 
            id="pf" 
            name="pf" 
            [(ngModel)]="employee.pf" 
            readonly>
        </div>

        <button type="submit" class="submit-button">Add Employee</button>
      </form>

      <div class="table-container" *ngIf="employees.length > 0">
        <h3>Employee List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Phone</th>
              <th>PF (5%)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let emp of employees; let i = index">
              <td>{{ emp.emp_name }}</td>
              <td>{{ emp.emp_id }}</td>
              <td>{{ emp.salary | currency:'INR' }}</td>
              <td>{{ emp.phone }}</td>
              <td>{{ emp.pf | currency:'INR' }}</td>
              <td>
                <button (click)="deleteEmployee(i)" class="delete-button">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employee: Employee = {
    emp_name: '',
    emp_id: '',
    salary: 0,
    phone: '',
    pf: 0
  };

  employees: Employee[] = [];

  calculatePF() {
    if (this.employee.salary) {
      this.employee.pf = this.employee.salary * 0.05;
    } else {
      this.employee.pf = 0;
    }
  }

  onSubmit() {
    if (this.employee.emp_name && this.employee.emp_id && this.employee.salary && 
        this.employee.phone) {
      this.employees.push({...this.employee});
      this.employee = {
        emp_name: '',
        emp_id: '',
        salary: 0,
        phone: '',
        pf: 0
      };
    }
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }
} 