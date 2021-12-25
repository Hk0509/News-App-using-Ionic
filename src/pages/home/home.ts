import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newsList:any = [];

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
  ionViewDidLoad(){
    this.http.get("https://newsapi.org/v2/everything?q=tesla&from=2021-11-19&sortBy=publishedAt&apiKey=abd6c573ace74f2dbbc2a6f1454e5326")
    .subscribe(
      (response:any)=>{
        this.newsList = response.articles;
      }
        
    )
    }

  }


