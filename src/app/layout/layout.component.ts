import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  selectedSize: string;
  sizes: string[] = ['sm', 'md', 'lg'];

  constructor() { }

  ngOnInit(): void {
    this.selectedSize = this.sizes[0];
  }

}
