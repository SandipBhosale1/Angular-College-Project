import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrinciplesDeskComponent } from './Components/principles-desk/principles-desk.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AdmissionComponent } from './Components/admission/admission.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ContactFormSubmitComponent } from './Components/contact-form-submit/contact-form-submit.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'principlesDesk' , component:PrinciplesDeskComponent},
    {path:'admission',component:AdmissionComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactUsComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'contactFormSubmit',component:ContactFormSubmitComponent}
    
];
