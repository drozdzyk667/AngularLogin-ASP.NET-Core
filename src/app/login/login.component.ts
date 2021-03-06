import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public input: any;
  Auth: any;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.input = {
      login: "",
      password: ""
    };
  }

  ngOnInit() {}

  postProfile() {
    (document.querySelector(".fourth") as HTMLElement).style.visibility =
      "hidden";
    setTimeout(() => {
      (document.querySelector(".loader") as HTMLElement).style.visibility =
        "visible";
    }, 300);
    console.log(this.input);
    this.httpClient
      .post("http://localhost:5000/Login", this.input)
      .subscribe((data: any) => {
        console.log(data);
        if (data === "400") {
          (document.querySelector(".alert") as HTMLElement).classList.add(
            "alertError"
          );

          // (document.querySelector('.alert') as HTMLElement).style.visibility = 'visible';
          setTimeout(() => {
            (document.querySelector(
              ".loader"
            ) as HTMLElement).style.visibility = "hidden";
            (document.querySelector(
              ".fourth"
            ) as HTMLElement).style.visibility = "visible";

            // (<HTMLInputElement> document.querySelector('.fourth')).disabled = true;
            this.input.login = "";
            this.input.password = "";
          }, 500);
          setTimeout(() => {
            (document.querySelector(".alert") as HTMLElement).classList.remove(
              "alertError"
            );

            // (document.querySelector('.alert') as HTMLElement).style.visibility = 'hidden';
          }, 6000);
        }
        if (data === "200") {
          (document.querySelector(".loader") as HTMLElement).style.visibility =
            "hidden";
          (document.querySelector(".alert") as HTMLElement).classList.remove(
            "alertError"
          );

          // (document.querySelector('.alert') as HTMLElement).style.visibility = 'hidden';
          setTimeout(() => {
            this.router.navigateByUrl("/dashboard");
          }, 200);
        }
      });
  }
}
