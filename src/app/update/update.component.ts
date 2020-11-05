import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"],
})
export class UpdateComponent implements OnInit {
  list: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.list = new FormGroup({
      title: new FormControl(""),
      body: new FormControl(""),
      userId: new FormControl(1),
    });
    this.todoService.getOne().subscribe((res: any) => {
      this.list = new FormGroup({
        title: new FormControl(res.title),
        body: new FormControl(res.body),
      });
    });
  }
  UPDATE() {
    this.todoService.update(this.list.value).subscribe((res: any) => {
      console.log(res);
    });
    this.dialogRef.close(true);
  }
  onDismiss() {
    this.dialogRef.close(false);
  }
}
