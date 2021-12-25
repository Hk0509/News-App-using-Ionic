import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: any;
  password: any;
  usersList: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.http.get("../../assets/credentials.json").subscribe(
      (response:any)=>{
        this.usersList = response.users;

      }
    )
  }
  loginFunction(){
    for(let i=0;i<this.usersList.length;i++){
      if(this.username==this.usersList[i].uname && this.usersList[i].password == this.password){
        this.navCtrl.setRoot(HomePage);   
      }
    }
    }
  }


