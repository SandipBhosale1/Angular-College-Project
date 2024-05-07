import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  email = new FormControl('',[
    Validators.email,
    Validators.required
  ])
  password = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ])

  signInForm = new FormGroup({
    'email':this.email,
    'password':this.password
})
  signIn() {
    if (this.signInForm.valid) {
      // Implement your sign-in logic here
      console.log('Sign-in successful!');
      // Navigate to the desired route after successful sign-in
      this.router.navigate(['/']);
    }
  }
}