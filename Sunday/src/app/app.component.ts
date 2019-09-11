import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sunday';
  ngOnInit() {
    AOS.init({
      delay:200,
    }
    );
  }
}

