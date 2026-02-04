import { AbstractControl, ValidationErrors } from "@angular/forms";

export function adultValidator(
  control: AbstractControl
): ValidationErrors | null {
  return control.value >= 18 ? null : { adult: true };
}
