import { DatePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  providers:[DatePipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  formatdate: string |null=null;
  constructor(private datepipe:DatePipe){}
  signupForm!: FormGroup;

  @Output() signupRequested = new EventEmitter<boolean>();
 
  onSignupClick() {
    this.signupRequested.emit(true);
  }
  
  ngOnInit(){
    this.signupForm= new FormGroup({
    full_name :new FormControl('', [Validators.required]),
    email :new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    confirm_password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required,Validators.minLength(10)]),
    dob: new FormControl('', [Validators.required])
})
};
  
  formattedDate(birthDate:Date){
    if(birthDate){
      this.formatdate= this.datepipe.transform(birthDate, 'dd MMMM yyyy');
    }
    return this.formatdate;
  }

    signup(){
      this.signupForm.value.dob= this.formattedDate(this.signupForm.value.dob)
      if(this.signupForm.valid){
        console.log(this.signupForm.value);
      }
    }

   
}
