import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioProvider } from './../../providers/usuario-provider/usuario-provider';
import { HomePage } from './../home/home';
import { ProdutoProvider } from './../../providers/produto-provider/produto';
import { MesaProvider } from './../../providers/mesa-provider/mesa-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Mesa } from '../../models/mesa';
import { Produto } from '../../models/produto';


@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {

  mesaKey: any;
  mesaAtual:Mesa = new Mesa();
  //integrantes:Array<any>;
  produtos:Array<Produto> = [];
  total:number= 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,private mesaProvider:MesaProvider,
    private produtoProvider:ProdutoProvider,private usuarioProvider:UsuarioProvider,private afAuth: AngularFireAuth) {
    this.mesaAtual.id = this.navParams.data.mesaKey;
    this.mesaProvider.consultarMesa(this.mesaAtual.id).subscribe( r=>{
      this.mesaAtual = r;
      this.mesaAtual.integrantes.forEach( i =>{
        this.total += i.despesa;
      })
    })
   this.produtoProvider.consultarProdutos(this.mesaAtual.id).subscribe( p =>{
     this.produtos = p;
   })
  }

  fechaMesa(){
  this.mesaProvider.fecharMesa(this.mesaAtual.id);
  this.usuarioProvider.getUsuario(this.afAuth.auth.currentUser.uid).subscribe( usuario =>{
  this.navCtrl.setRoot(HomePage,{usuarioLogado:usuario});
  })
  }
}