import { Component, Input, OnInit } from '@angular/core';
// import bug from '../../../assets/types/bug.png';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {
  @Input() typeName: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
