import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  usercn = JSON.parse(localStorage.getItem("usercn")) || {};
  erreur = true;

  constructor(private router: Router) {
    if (localStorage.getItem("usercn")) {
      this.usercn = JSON.parse(localStorage.getItem("usercn"));
    } else {
      this.usercn = null;
    }
    console.log(this.usercn);
  }
  reg(register) {
    const reg = JSON.parse(localStorage.getItem("user")) || [];
    reg.push(register);
    localStorage.setItem("user", JSON.stringify(reg));
    this.router.navigateByUrl("login");
  }
  log(login) {
    const log = JSON.parse(localStorage.getItem("user")) || [];
    log.map((e) => {
      if (e.password === login.password && e.email === login.email) {
        this.usercn = e;
        localStorage.setItem("usercn", JSON.stringify(this.usercn));
        this.router.navigateByUrl("list");
      } else {
        this.erreur = false;
      }
    });
  }
}
