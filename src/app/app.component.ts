import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgStyle} from '@angular/common';

class ToDo{
    firstName: string;
    secondName: string;
    patronymic: string;
    post: string;
    date: string;
    salary: string;
    valuta: string;
    email: string;
    phone: string;
    house: string;

    constructor(firstName: string, secondName: string, patromynic: string, post: string, date: string, salary: string, valuta: string, email: string, phone: string, house: string){
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
}

const todos: ToDo[] = [
]

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
})
export class AppComponent{
    buttonName: string = "Добавить";
    buttonState = false;
    doButtonStyle ={
        'pointer-events': 'auto'
    }
    trigger: boolean = false;
    isDelete: boolean = false;
    tIndex: ToDo;
    todos: ToDo[] = todos;
    firstName: string = '';
    secondName: string = '';
    patronymic: string = '';
    post: string = '';
    date: string = '';
    salary: string = '';
    valuta: string = '';
    email: string = '';
    phone: string = '';
    house: string = '';

    create(){
        if(this.buttonState == false){
            
            this.buttonName = "Добавить";
            let todo: ToDo = new ToDo(this.firstName, this.secondName, this.patronymic, this.post, this.date, this.salary, this.valuta, this.email, this.phone, this.house);
            this.todos.push(todo);
        }
        if(this.buttonState == true){
            this.buttonName = "Добавить";
            let todo: ToDo = new ToDo(this.firstName, this.secondName, this.patronymic, this.post, this.date, this.salary, this.valuta, this.email, this.phone, this.house);
            let index = this.todos.indexOf(this.tIndex);
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
            this.doButtonStyle ={
                'pointer-events': 'auto'
            }
        }
    }

    delete(todo: any){
        this.tIndex = todo;
        this.trigger = true;
    }

    choise(isDelete: any){
        this.isDelete = isDelete;
        let index = this.todos.indexOf(this.tIndex);
        console.log(index);
        if(this.isDelete == true && index > -1){
            this.todos.splice(index, 1);
            this.isDelete = false;
            this.trigger = false;
        }
        if(this.isDelete == false || index <= -1){
            this.isDelete = false;
            this.trigger = false;
        }
        console.log(this.trigger);
    }

    edit(todo: any){
        this.doButtonStyle ={
            'pointer-events': 'none'
        }
        this.tIndex = todo;
        this.buttonState = true;
        if(this.buttonState == true){
            this.buttonName = "Сохранить";
            let index = this.todos.indexOf(todo);
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
    }
}