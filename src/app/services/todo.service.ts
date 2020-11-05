import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  tableau = JSON.parse(localStorage.getItem("add")) || [];
  index;
  constructor(private router: Router, private http: HttpClient) {}
  add(list) {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", list);
  }
  get() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  getOne() {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/posts/1`
    );
  }
  delete() {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/posts/${this.index}`
    );
  }
  update(list) {
    return this.http.patch(
      `https://jsonplaceholder.typicode.com/posts/${this.index}`,
      list
    );
  }
  saveIndex(data) {
    this.index = data;
    return data;
  }
}
