import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-i-box',
  templateUrl: './i-box.component.html',
  styleUrls: ['./i-box.component.scss','../css/font-awesome.min.css']
})
export class IBoxComponent implements OnInit {

  @Input() iBox: any;
  constructor() { }

  ngOnInit() {
  }

}
