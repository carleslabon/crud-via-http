import { Component } from '@angular/core';

import { ToDoService } from '../../todo.service';

@Component({
    selector: 'app-add',
    templateUrl: 'add.component.html'
})
export class AddComponent {
    constructor(private toDoService: ToDoService) { }
    
    toDoForm = this.toDoService.toDo;

    onSubmit() {
        if(this.toDoForm.get('id').value == null) {
            this.toDoService.addNote(this.toDoForm.value);
        } else {
            this.toDoService.editNote(this.toDoForm.value);
        }
        this.toDoForm.reset();
    }
}