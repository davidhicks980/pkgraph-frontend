import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormSchemeService } from '../form-scheme.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent {
  quizInfoForm = this.fb.group({
    title: [null, Validators.required],
    abbreviation: [null, Validators.required],

    description: [null, Validators.required],
    includeQuestions: [true],
    includePlots: [true],
  });

  formScheme: FormSchemeService;

  constructor(private fb: FormBuilder, formScheme: FormSchemeService) {
    this.formScheme = formScheme;
  }

  onSubmit() {
    console.log(this.quizInfoForm.value);
  }
}
