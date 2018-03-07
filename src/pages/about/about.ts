import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	monnaie: any;

  constructor(public navCtrl: NavController, public http: Http) {
  	this.http.get('https://api.coinmarketcap.com/v1/ticker/')
 			.map(res => res.json())
 			.subscribe(data => {
		this.monnaie = data;
		console.log(this.monnaie);
		});

  }

}
