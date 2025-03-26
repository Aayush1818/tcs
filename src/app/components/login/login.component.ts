import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  errorMessage = '';

  // Hardcoded credentials
  private readonly VALID_EMAIL = 'admin@example.com';
  private readonly VALID_PASSWORD = 'admin123';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginData.email === this.VALID_EMAIL && this.loginData.password === this.VALID_PASSWORD) {
      // Store login state (optional)
      localStorage.setItem('isLoggedIn', 'true');
      // Navigate to dashboard
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
}
