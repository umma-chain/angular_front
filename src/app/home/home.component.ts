import { Component, OnInit, ViewChild } from "@angular/core";
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options: AnimationOptions = {
    path: './assets/animation.json',
  };
  ngOnInit() {

  }
}