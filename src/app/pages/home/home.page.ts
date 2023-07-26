import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  swiper = new Swiper('.swiperContainer', {
    effect: 'cards',
    autoplay: {
      delay: 1000,
    },
    speed: 400,
    spaceBetween: 100,
  });

  //swiperBox = document.querySelector('.swiper').swiper;
}
