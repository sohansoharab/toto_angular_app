import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { list_item } from './list_obj';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  table_label = {
    index: '#',
    title: 'Title',
    action: 'Action'
  }

  item: string = ""
  item_status: string = ""
  list_obj: list_item[] = [];
  editMode = false;
  searchtext: string = "";
  msg: string = "";

  onSubmit() {
    if ((this.item != "") && (this.item_status != "")) {

    
    const list_: list_item = {
      title: this.item,
      status: this.item_status,
      editMode: false
    }

    this.list_obj.push(list_)
    console.log(this.list_obj)
    this.msg = ""
    } else {
      this.msg = "Validation Error"
    }
  }

  onDelete(value: list_item) {
    let ind = this.list_obj.indexOf(value)
    this.list_obj.splice(ind, 1)

  }

  onEdit(value: list_item) {
    value.editMode = true;
  }

  onEditFalse(value: list_item) {
    value.editMode = false;
  }
}
