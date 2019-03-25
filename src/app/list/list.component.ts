import { Component, OnInit } from '@angular/core';

import { ToDoService } from '../todo.service';

@Component({
    selector: 'app-list', 
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
    public notes = [];

    constructor(private toDoService: ToDoService) { }

    ngOnInit() {
        this.toDoService.retrieveList().subscribe(
            data => this.notes = data
        );
    }

    onEdit(todo) {
        this.toDoService.createForm(todo);
    }

    onDelete(id: number) {
        this.toDoService.deleteNote(id).subscribe(
            () => console.log(`Note no. ${id} deleted`),
            (err) => console.log(err)
        );
    } 
} 