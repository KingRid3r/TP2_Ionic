import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { monnaiePage } from '../monnaie/monnaie'
import 'rxjs/add/operator/map';
import { ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	monnaie: any;

  constructor(public navCtrl: NavController, public http: Http, public modalCtrl: ModalController) {
  	this.http.get('https://api.coinmarketcap.com/v1/ticker/')
 			.map(res => res.json())
 			.subscribe(data => {
		this.monnaie = data;
		});

  }
  rafraichirListe(refresher){
  	  	this.http.get('https://api.coinmarketcap.com/v1/ticker/')
 			.map(res => res.json())
 			.subscribe(data => {
		this.monnaie = data;
		});
 		refresher.complete();
  }

   selectMonnaie(monnaie: any){
   	let infos = this.modalCtrl.create(monnaiePage, { data: monnaie });
   infos.present();
  }

}
