import { Component, Input, OnInit } from '@angular/core';
import { Stat } from 'src/app/types/Stat';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent implements OnInit {
  @Input() stat!: Stat;

  constructor() {}

  ngOnInit(): void {}
}
