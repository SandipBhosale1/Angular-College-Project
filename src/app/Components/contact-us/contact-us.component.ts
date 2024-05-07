import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor(private formBuilder:FormBuilder,
    private router : Router
  ){}
  name= new FormControl("",[
    Validators.required
  ])
  email = new FormControl("",[
    Validators.required,
    Validators.email
  ])
  mobile = new FormControl("",[
    Validators.maxLength(10),
    Validators.required,
    Validators.pattern('[0-9]{10}')
  ])
  subject = new FormControl("",[
    Validators.required
  ])
  msg = new FormControl("",[
    Validators.required
  ])

  contactForm = new FormGroup({
    "name": this.name,
    "email":this.email,
    "mobile":this.mobile,
    "subject":this.subject,
    "msg":this.msg
  })

  send(){
    if (this.contactForm.valid){
      this.router.navigate(['/contactFormSubmit'], { state: { formData: this.contactForm.value } });
    }
  }

}
