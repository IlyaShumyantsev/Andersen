"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ToDo = (function () {
    function ToDo(firstName, secondName, patromynic, post, date, salary, valuta, email, phone, house) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.patronymic = patromynic;
        this.post = post;
        this.date = date;
        this.salary = salary;
        this.valuta = valuta;
        this.email = email;
        this.phone = phone;
        this.house = house;
    }
    return ToDo;
}());
var todos = [];
var AppComponent = (function () {
    function AppComponent() {
        this.buttonName = "Добавить";
        this.buttonState = false;
        this.doButtonStyle = {
            'pointer-events': 'auto'
        };
        this.trigger = false;
        this.isDelete = false;
        this.todos = todos;
        this.firstName = '';
        this.secondName = '';
        this.patronymic = '';
        this.post = '';
        this.date = '';
        this.salary = '';
        this.valuta = '';
        this.email = '';
        this.phone = '';
        this.house = '';
    }
    AppComponent.prototype.create = function () {
        if (this.buttonState == false) {
            this.buttonName = "Добавить";
            var todo = new ToDo(this.firstName, this.secondName, this.patronymic, this.post, this.date, this.salary, this.valuta, this.email, this.phone, this.house);
            this.todos.push(todo);
        }
        if (this.buttonState == true) {
            this.buttonName = "Добавить";
            var todo = new ToDo(this.firstName, this.secondName, this.patronymic, this.post, this.date, this.salary, this.valuta, this.email, this.phone, this.house);
            var index = this.todos.indexOf(this.tIndex);
            console.log(index);
            this.todos[index].firstName = todo.firstName;
            this.todos[index].secondName = todo.secondName;
            this.todos[index].patronymic = todo.patronymic;
            this.todos[index].post = todo.post;
            this.todos[index].date = todo.date;
            this.todos[index].salary = todo.salary;
            this.todos[index].valuta = todo.valuta;
            this.todos[index].email = todo.email;
            this.todos[index].phone = todo.phone;
            this.todos[index].house = todo.house;
            console.log(this.todos);
            this.buttonState = false;
            this.doButtonStyle = {
                'pointer-events': 'auto'
            };
        }
    };
    AppComponent.prototype.delete = function (todo) {
        this.tIndex = todo;
        this.trigger = true;
    };
    AppComponent.prototype.choise = function (isDelete) {
        this.isDelete = isDelete;
        var index = this.todos.indexOf(this.tIndex);
        console.log(index);
        if (this.isDelete == true && index > -1) {
            this.todos.splice(index, 1);
            this.isDelete = false;
            this.trigger = false;
        }
        if (this.isDelete == false || index <= -1) {
            this.isDelete = false;
            this.trigger = false;
        }
        console.log(this.trigger);
    };
    AppComponent.prototype.edit = function (todo) {
        this.doButtonStyle = {
            'pointer-events': 'none'
        };
        this.tIndex = todo;
        this.buttonState = true;
        if (this.buttonState == true) {
            this.buttonName = "Сохранить";
            var index = this.todos.indexOf(todo);
            this.firstName = this.todos[index].firstName;
            this.secondName = this.todos[index].secondName;
            this.patronymic = this.todos[index].patronymic;
            this.post = this.todos[index].post;
            this.date = this.todos[index].date;
            this.salary = this.todos[index].salary;
            this.valuta = this.todos[index].valuta;
            this.email = this.todos[index].email;
            this.phone = this.todos[index].phone;
            this.house = this.todos[index].house;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map