import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css'],
})
export class StarratingComponent implements OnInit {
  user = [{ rate: '4.2' }, { rate: '2.5' }, { rate: '4.2' }, { rate: '4.2' }];
  constructor() {}

  ngOnInit(): void {}
}
