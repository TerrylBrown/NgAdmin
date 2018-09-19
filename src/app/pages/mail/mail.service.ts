import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MailService {

  private apiUrl = 'assets/data/mail.json';

  constructor(private http: Http) { }

  getMail() {
  	return this.http.get(this.apiUrl);
  }

  send() {
  }

  delete() {
  }

  save() {
  }

}