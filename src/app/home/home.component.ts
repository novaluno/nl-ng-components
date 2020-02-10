import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sliderValue: number[] = [1, 100];
  public minSliderValue = this.sliderValue[0];
  public maxSliderValue = this.sliderValue[1];

  constructor() { }

  ngOnInit() {
  }

  onSliderChange(e: any) {
    console.log(e);
    this.minSliderValue = e.newValue[0];
    this.maxSliderValue = e.newValue[1];
  }
}
