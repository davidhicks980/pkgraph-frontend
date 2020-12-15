"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuizInfoFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var QuizInfoFormComponent = /** @class */ (function () {
    function QuizInfoFormComponent(fb, formScheme) {
        this.fb = fb;
        this.priorValueStore = new Map();
        this.randomIdentifier = String('quiz' + Math.floor(Math.random() * 1000));
        this.quizInfoForm = this.fb.group({
            title: [
                null,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(30),
                    forms_1.Validators.pattern(/^[a-z0-9,.!?\s-]*$/i),
                ],
            ],
            userCodeId: [
                null,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(10),
                    forms_1.Validators.pattern(/^\w/),
                ],
            ],
            randomIdentifier: [true],
            description: ['', forms_1.Validators.pattern(/\w/)],
            includeQuestions: [true, forms_1.Validators.required],
            includePlots: [true, forms_1.Validators.required]
        });
        this.formScheme = formScheme;
    }
    QuizInfoFormComponent.prototype.toggleControl = function (name, control) {
        if (!control.disabled) {
            this.priorValueStore.set(name, control.value);
            control.patchValue(this.randomIdentifier);
            control.disable();
        }
        else {
            control.enable();
            control.patchValue(this.priorValueStore.get(name));
        }
    };
    QuizInfoFormComponent.prototype.monitor = function () {
        console.log(this.quizInfoForm.controls.title.errors);
    };
    Object.defineProperty(QuizInfoFormComponent.prototype, "title", {
        get: function () {
            return this.quizInfoForm.get('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizInfoFormComponent.prototype, "userId", {
        get: function () {
            return this.quizInfoForm.get('userCodeId');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizInfoFormComponent.prototype, "description", {
        get: function () {
            return this.quizInfoForm.get('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizInfoFormComponent.prototype, "includeQuestions", {
        get: function () {
            return this.quizInfoForm.get('includeQuestions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizInfoFormComponent.prototype, "includePlots", {
        get: function () {
            return this.quizInfoForm.get('includePlots');
        },
        enumerable: false,
        configurable: true
    });
    QuizInfoFormComponent.prototype.onSubmit = function () {
        var form = this.quizInfoForm.controls;
        var description = form.description.value.length === 0
            ? 'No description'
            : form.description.value;
        this.quizInfoForm.get('description').patchValue(description);
        console.log(this.quizInfoForm.getRawValue(), this.randomIdentifier);
        this.formScheme.submitForm(this.quizInfoForm.getRawValue());
    };
    QuizInfoFormComponent = __decorate([
        core_1.Component({
            selector: 'app-quiz-info-form',
            templateUrl: './quiz-info-form.component.html',
            styleUrls: ['./quiz-info-form.component.scss']
        })
    ], QuizInfoFormComponent);
    return QuizInfoFormComponent;
}());
exports.QuizInfoFormComponent = QuizInfoFormComponent;
