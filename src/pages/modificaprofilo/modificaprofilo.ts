import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfiloPage} from "../profilo/profilo";
import {HomePage} from "../home/home";

/**
 * Generated class for the ModificaprofiloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificaprofilo',
  templateUrl: 'modificaprofilo.html',
})
export class ModificaprofiloPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificaprofiloPage');
  }
    onAnnulla() {
        this.navCtrl.push(ProfiloPage);
    }
    onSignup() {
        this.navCtrl.setRoot(HomePage);
    }
}
