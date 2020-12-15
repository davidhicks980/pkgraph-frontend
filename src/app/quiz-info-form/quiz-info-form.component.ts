import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FormSchemeService } from '../form-scheme.service';
@Component({
  selector: 'app-quiz-info-form',
  templateUrl: './quiz-info-form.component.html',
  styleUrls: ['./quiz-info-form.component.scss'],
})
export class QuizInfoFormComponent {
  priorValueStore: Map<string, object> = new Map();
  randomIdentifier: string = String('quiz' + Math.floor(Math.random() * 1000));
  toggleControl(name: string, control: AbstractControl) {
    if (!control.disabled) {
      this.priorValueStore.set(name, control.value);
      control.patchValue(this.randomIdentifier);
      control.disable();
    } else {
      control.enable();
      control.patchValue(this.priorValueStore.get(name));
    }
  }
  monitor() {
    console.log(this.quizInfoForm.controls.title.errors);
  }
  quizInfoForm = this.fb.group({
    title: [
      null,
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
        Validators.pattern(/^[a-z0-9,.!?\s-]*$/i),
      ],
    ],
    userCodeId: [
      null,
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern(/^\w/),
      ],
    ],
    randomIdentifier: [true],
    description: ['', Validators.pattern(/\w/)],
    includeQuestions: [true, Validators.required],
    includePlots: [true, Validators.required],
  });
  formScheme: FormSchemeService;

  get title() {
    return this.quizInfoForm.get('title');
  }
  get userId() {
    return this.quizInfoForm.get('userCodeId');
  }
  get description() {
    return this.quizInfoForm.get('description');
  }
  get includeQuestions() {
    return this.quizInfoForm.get('includeQuestions');
  }
  get includePlots() {
    return this.quizInfoForm.get('includePlots');
  }

  constructor(private fb: FormBuilder, formScheme: FormSchemeService) {
    this.formScheme = formScheme;
  }

  onSubmit() {
    const form = this.quizInfoForm.controls;

    const description =
      form.description.value.length === 0
        ? 'No description'
        : form.description.value;
    this.quizInfoForm.get('description').patchValue(description);
    console.log(this.quizInfoForm.getRawValue(), this.randomIdentifier);
    this.formScheme.submitForm(this.quizInfoForm.getRawValue());
  }
}
