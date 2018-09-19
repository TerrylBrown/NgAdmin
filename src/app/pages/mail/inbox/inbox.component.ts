import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

	public mail: any;

  constructor(@Inject('mailService') private service) { 
  	this.getMail();
  }

  ngOnInit() {
  }

  getMail() {
  	this.service.getMail().subscribe((res) => {
  		this.mail = res.json();
  	});
  }

}
