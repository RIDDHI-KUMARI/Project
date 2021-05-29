import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
slide = '15vh';
trans = '1s';
  constructor(
    private http: HttpClient

  ) {}
  ionViewDidEnter(){
    this.fetchUsers();
  }

  fetchUsers(){
    this.http.get("http//localhost:5000/provider/dth").subscribe((res) => {
    console.log(res);
  });
  }


  slideUp(){
    this.slide = '90vh'
  }
  slideDown(){
    this.slide = '15vh'
  }
}