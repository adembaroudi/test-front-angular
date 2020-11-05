import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  detail ;
  constructor(
    private activateRoute: ActivatedRoute,
    private todoService: TodoService
  ) {}
  id = this.activateRoute.snapshot.paramMap.get("id");
  ngOnInit(): void {
    this.todoService.getOne().subscribe((res: any) => {
      console.log(res);
      
      this.detail = res;
    });
  }
}
