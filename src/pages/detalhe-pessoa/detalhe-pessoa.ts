import { AddProdIndivPage } from './../add-prod-indiv/add-prod-indiv';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePessoaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-pessoa',
  templateUrl: 'detalhe-pessoa.html',
})
export class DetalhePessoaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addProdIndiv(){
    this.navCtrl.push(AddProdIndivPage);
  }

}
