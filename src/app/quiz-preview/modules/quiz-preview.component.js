"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuizPreviewComponent = void 0;
var core_1 = require("@angular/core");
var tree_1 = require("@angular/material/tree");
var tree_2 = require("@angular/cdk/tree");
var example_data_1 = require("./example-data");
var QuizPreviewComponent = /** @class */ (function () {
    function QuizPreviewComponent() {
        this.treeFlattener = new tree_1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new tree_2.FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new tree_1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.dataSource.data = example_data_1.files;
    }
    /** Transform the data to something the tree can read. */
    QuizPreviewComponent.prototype.transformer = function (node, level) {
        return {
            name: node.name,
            type: node.type,
            level: level,
            expandable: !!node.children
        };
    };
    /** Get the level of the node */
    QuizPreviewComponent.prototype.getLevel = function (node) {
        return node.level;
    };
    /** Get whether the node is expanded or not. */
    QuizPreviewComponent.prototype.isExpandable = function (node) {
        return node.expandable;
    };
    /** Get whether the node has children or not. */
    QuizPreviewComponent.prototype.hasChild = function (index, node) {
        return node.expandable;
    };
    /** Get the children for the node. */
    QuizPreviewComponent.prototype.getChildren = function (node) {
        return node.children;
    };
    QuizPreviewComponent = __decorate([
        core_1.Component({
            selector: 'app-quiz-preview',
            templateUrl: './quiz-preview.component.html',
            styleUrls: ['./quiz-preview.component.scss']
        })
    ], QuizPreviewComponent);
    return QuizPreviewComponent;
}());
exports.QuizPreviewComponent = QuizPreviewComponent;
