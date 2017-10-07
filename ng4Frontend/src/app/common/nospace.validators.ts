import { AbstractControl, ValidationErrors } from "@angular/forms";

export function CannotContainSpace(control: AbstractControl): ValidationErrors|null {
    if((control.value as String).indexOf(' ')>=0){
        return {CannotContainSpace:true}
    }
    return null;
  }