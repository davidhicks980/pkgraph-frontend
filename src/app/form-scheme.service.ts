import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormSchemeService {
  formSubmissionsSource: Subject<{}> = new Subject();

  formSubmissions$ = this.formSubmissionsSource.asObservable();

  submitForm(formData: {}) {
    console.log('service', formData);
    this.formSubmissionsSource.next(formData);
  }
  constructor() {}
}
