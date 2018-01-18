import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-p-box',
  templateUrl: './p-box.component.html',
  styleUrls: ['./p-box.component.scss']
})
export class PBoxComponent implements OnInit {

  @Input() pBox: any;

  constructor() { }

  ngOnInit() {
  }

}
