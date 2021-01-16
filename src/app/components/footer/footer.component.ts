import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  x: number = 5;
  y: number = 2;

  scroll() {
    window.scrollTo(0, 760);
}
// scroll-behavior: smooth;




}
