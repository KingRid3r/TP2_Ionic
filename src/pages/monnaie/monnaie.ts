import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the MonnaiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monnaie',
  templateUrl: 'monnaie.html',
})
export class monnaiePage {
	infos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.infos = this.navParams.get('data');
  	console.log(this.infos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonnaiePage');
  }

  closeMonnaie(){
    console.log("test")
  	this.viewCtrl.dismiss();
  }

}
