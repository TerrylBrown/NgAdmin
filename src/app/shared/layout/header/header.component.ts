import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggle.emit();
  }

}
