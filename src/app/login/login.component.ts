import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public input: any;
  Auth: any;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.input = {
      "login": "",
      "password": ""
    };
  }
  
  ngOnInit() {
  }

  postProfile() {
    console.log(this.input)
    this.httpClient.post('http://localhost:5000/Login',
      this.input
    )
      .subscribe(
        (data: any) => {
          console.log(data);
          if(data=='400'){
            alert('Wrong login or password, try again')
          }
          if(data=='200'){
            this.router.navigateByUrl('/dashboard');
          }
        }
      );
  }

}
