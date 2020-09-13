import { AbstractControl } from '@angular/forms'

export function dateValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])+$/.test(control.value)
  return valid
    ? null
    : { invalidDate: { valid: false, value: control.value } }
}