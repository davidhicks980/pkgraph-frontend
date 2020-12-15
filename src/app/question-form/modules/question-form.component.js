"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuestionFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var QuestionFormComponent = /** @class */ (function () {
    function QuestionFormComponent(fb, formScheme) {
        this.fb = fb;
        this.quizInfoForm = this.fb.group({
            title: [null, forms_1.Validators.required],
            abbreviation: [null, forms_1.Validators.required],
            description: [null, forms_1.Validators.required],
            includeQuestions: [true],
            includePlots: [true]
        });
        this.formScheme = formScheme;
    }
    QuestionFormComponent.prototype.onSubmit = function () {
        console.log(this.quizInfoForm.value);
    };
    QuestionFormComponent = __decorate([
        core_1.Component({
            selector: 'app-question-form',
            templateUrl: './question-form.component.html',
            styleUrls: ['./question-form.component.scss']
        })
    ], QuestionFormComponent);
    return QuestionFormComponent;
}());
exports.QuestionFormComponent = QuestionFormComponent;
