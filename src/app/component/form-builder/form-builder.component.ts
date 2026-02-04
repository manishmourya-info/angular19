import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {

  private fb = inject(FormBuilder);
  
  loginForm = this.fb.group({
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required,Validators.minLength(6)]],
  });
  

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
