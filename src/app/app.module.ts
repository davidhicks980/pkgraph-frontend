import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotFormComponent } from './plot-form/plot-form.component';

import { QuizInfoFormComponent } from './quiz-info-form/quiz-info-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuizPreviewComponent } from './quiz-preview/quiz-preview.component';
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PlotFormComponent,

    QuizInfoFormComponent,
    QuestionFormComponent,
    QuizPreviewComponent,
    FormStepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
