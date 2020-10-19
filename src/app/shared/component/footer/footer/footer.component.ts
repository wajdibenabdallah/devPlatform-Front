import { Component, OnInit } from '@angular/core';
// import { version } from '../../../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  version: string;
  constructor() {}

  ngOnInit(): void {
    this.version = '1.0.0';
  }
}
