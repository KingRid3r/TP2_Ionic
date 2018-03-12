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
  public isToggled: boolean;
	infos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.infos = this.navParams.get('data');
    this.isToggled = false;

  	console.log(this.infos);
  }

  public notify(event) {
    console.log(event.checked);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonnaiePage');
  }

  closeMonnaie(){
    console.log("test")
  	this.viewCtrl.dismiss();
  }

}
