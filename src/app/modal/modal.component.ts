import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { TodoService } from "../services/todo.service";
import { ListComponent } from "../todo/list/list.component";
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  list: FormGroup;
  constructor(
    public dialog: MatDialogRef<ListComponent>,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.list = new FormGroup({
      title: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required),
      userId: new FormControl(1),
    });
  }

  ADD() {
    this.todoService.add(this.list.value).subscribe((res: any) => {
      console.log(res);
    });
  }
}
