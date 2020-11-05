import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class DeleteComponent implements OnInit {
  title: string;
  message: string;
  index;
  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {}

  onConfirm() {
    this.todoService.delete().subscribe((res: any) => {
      console.log(res);
    });
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
