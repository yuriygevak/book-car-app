export function setFormState(form, isClear: boolean = false): void {
  const controls = form.controls;
  for (const c in controls) {
    if (controls[c].errors) {
      if (isClear) {
        controls[c].markAsUntouched();
        controls[c].markAsPristine();
      } else {
        controls[c].markAsTouched();
        controls[c].markAsDirty();
      }
    }
  }
}
