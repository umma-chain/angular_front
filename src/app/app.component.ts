import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    AOS.init({once: true});
  }
  title = 'Dust Foundation'; 

}
