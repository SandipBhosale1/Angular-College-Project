import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form-submit',
  standalone: true,
  imports: [],
  templateUrl: './contact-form-submit.component.html',
  styleUrl: './contact-form-submit.component.css'
})
export class ContactFormSubmitComponent {
    formData: any;
  
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      // Get the form data from route state
      this.formData = history.state.formData;
    }
}
