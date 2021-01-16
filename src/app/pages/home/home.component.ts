import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: true, showIndicators: true } }
  ]
})

export class HomeComponent implements OnInit {
  itemsPerSlide = 4;
  singleSlideOffset = true
  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {image: '../../../assets/slide1.jpg'},
    {image: '../../../assets/slide2.jpg'},
    {image: '../../../assets/slide3.jpg'},
    {image: '../../../assets/slide4.jpg'},
    {image: '../../../assets/slide5.jpg'},
    {image: '../../../assets/slide6.jpg'},
    {image: '../../../assets/slide7.jpg'},
    {image: '../../../assets/slide8.jpg'},


  ];

  
}
