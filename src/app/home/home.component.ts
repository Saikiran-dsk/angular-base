import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
   data = null;
  ngOnInit(){
    this.data = this.getData();
    console.log(this.data);
  }

  getData(){
    this.homeService.getData().subscribe(data => {
     this.data = data;
    })

  }
}
