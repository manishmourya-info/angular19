import { AbstractControl, FormArray, ValidationErrors } from "@angular/forms";

export function minSkillsValidator(min: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const arr = control as FormArray;
    return arr.length >= min ? null : { minSkills: true };
  };
}
