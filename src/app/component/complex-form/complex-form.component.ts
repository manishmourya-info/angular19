import { Component, effect, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { adultValidator } from '../../validator/adult.validator';
import { minSkillsValidator } from '../../validator/min.skills.validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complex-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './complex-form.component.html',
  styleUrl: './complex-form.component.css'
})
export class ComplexFormComponent {

 
 private fb = inject(FormBuilder);

  // 🔹 Stage tracking (signals)
  currentStage = signal(1);

  form = this.fb.group({
    personal: this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, adultValidator]]
    }),
    skills: this.fb.array([], minSkillsValidator(1))
  });

  constructor() {
    // 🔁 Stage-based change detection
    effect(() => {
      console.log('Current Stage:', this.currentStage());
    });

    // 🔁 Form value changes
    this.form.valueChanges.subscribe(value => {
      console.log('Form changed:', value);
    });
  }

  // 🔹 Getter for skills
  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  // ➕ Add skill
  addSkill() {
    this.skills.push(
      this.fb.group({
        name: ['', Validators.required],
        experience: [0, [Validators.required, Validators.min(1)]]
      })
    );
  }

  // ➖ Remove skill
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  // ▶ Next stage
  nextStage() {
    if (this.currentStage() === 1 && this.form.get('personal')?.valid) {
      this.currentStage.set(2);
    }
  }

  submit() {
    if (this.form.valid) {
      console.log('Submitted:', this.form.value);
    }
  }


}
