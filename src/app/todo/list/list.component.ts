import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DeleteComponent } from "src/app/delete/delete.component";
import { ModalComponent } from "src/app/modal/modal.component";
import { TodoService } from "src/app/services/todo.service";
import { UpdateComponent } from "src/app/update/update.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  table = [];
  hide = true;
  list: FormGroup;
  index: any;

  constructor(
    private todoService: TodoService,
    public dialog: MatDialog,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todoService.get().subscribe((res: any) => {
      this.table = res;
    });
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe((res) => {
      console.log(`result : ${res}`);
    });
  }
  openDeleteDialog(data) {
    const dialogRef = this.dialog.open(DeleteComponent);
    this.todoService.saveIndex(data);
    dialogRef.afterClosed().subscribe((res) => {
      console.log(`result : ${res}`);
    });
  }
  openUpdateDialog(data) {
    const dialogRef = this.dialog.open(UpdateComponent);
    this.todoService.saveIndex(data);
    dialogRef.afterClosed().subscribe((res) => {
      console.log(`res:${res}`);
    });
  }
  Detail(id: number) {
    this.router.navigate(["/detail", id]);
  }
}
