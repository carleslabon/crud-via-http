import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';

import { ToDo } from './todo.model';

@Injectable({providedIn: 'root'})
export class ToDoService {
    public dbUrl: string = "http://localhost:3000/todos";

    id: number;
    toDoObj: {};
    toDo: FormGroup;

    constructor(private http: HttpClient) {
        this.toDo = new FormGroup({
            'id': new FormControl,
            'title': new FormControl
        });
     }

    retrieveList(): Observable<ToDo[]> {
        return this.http.get<ToDo[]>(this.dbUrl);
    }

    addNote(todo) {
        this.toDoObj = {
            'id': todo.id,
            'title': todo.title
        }
        return this.http.post(this.dbUrl, this.toDoObj).subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    createForm(todo) {
        this.toDo.setValue(todo);
    }

    editNote(todo) {
        this.toDoObj = {
            'id': todo.id,
            'title': todo.title
        }
        return this.http.put(`${this.dbUrl}/${todo.id}`, this.toDoObj).subscribe(
            (response: Response) => {
                console.log(response); 
            }
        );
    }

    deleteNote(id: number): Observable<void> {
        return this.http.delete<void>(`${this.dbUrl}/${id}`);
    }
}