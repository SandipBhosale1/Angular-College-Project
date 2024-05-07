import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(
    // private formBuilder: FormBuilder,
    private router: Router
  ){}
  email = new FormControl('',[
    Validators.email,
    Validators.required
  ])
  password = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ])
  Confirmpassword = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ])
  signUpForm = new FormGroup({
    'email':this.email,
    'password':this.password,
    'Confirmpassword':this.Confirmpassword
})
  signIn() {
    if (this.signUpForm.valid) {
      // Implement your sign-in logic here
      console.log('Sign-in successful!');
      // Navigate to the desired route after successful sign-in
      this.router.navigate(['/signin']);
    }
  }

}
