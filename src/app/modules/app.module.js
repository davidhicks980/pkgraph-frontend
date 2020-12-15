"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var select_1 = require("@angular/material/select");
var radio_1 = require("@angular/material/radio");
var card_1 = require("@angular/material/card");
var tree_1 = require("@angular/material/tree");
var icon_1 = require("@angular/material/icon");
var checkbox_1 = require("@angular/material/checkbox");
var form_field_1 = require("@angular/material/form-field");
var stepper_1 = require("@angular/material/stepper");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var tooltip_1 = require("@angular/material/tooltip");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var plot_form_component_1 = require("./plot-form/plot-form.component");
var quiz_info_form_component_1 = require("./quiz-info-form/quiz-info-form.component");
var question_form_component_1 = require("./question-form/question-form.component");
var quiz_preview_component_1 = require("./quiz-preview/quiz-preview.component");
var form_stepper_component_1 = require("./form-stepper/form-stepper.component");
var flex_layout_1 = require("@angular/flex-layout");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                plot_form_component_1.PlotFormComponent,
                quiz_info_form_component_1.QuizInfoFormComponent,
                question_form_component_1.QuestionFormComponent,
                quiz_preview_component_1.QuizPreviewComponent,
                form_stepper_component_1.FormStepperComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                radio_1.MatRadioModule,
                card_1.MatCardModule,
                tree_1.MatTreeModule,
                icon_1.MatIconModule,
                checkbox_1.MatCheckboxModule,
                form_field_1.MatFormFieldModule,
                tooltip_1.MatTooltipModule,
                slide_toggle_1.MatSlideToggleModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                stepper_1.MatStepperModule,
                flex_layout_1.FlexLayoutModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
