import { Component } from '@angular/core';
import { ViewController, LoadingController, AlertController, NavController } from 'ionic-angular';
import { EvaluationProvider } from '../../providers/evaluation/evaluation';
import { UserProvider } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:string = ''
  password:string = '';

  constructor(
    public viewCtrl: ViewController,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public evaluationProvider: EvaluationProvider,
    public userProvider: UserProvider
  ) {

  }

  onClickLogin() {
    let loader = this.loadingCtrl.create();

    loader.present();

    this.http.post('http://app-evaluation.herokuapp.com/api/login', {
      username: this.username,
      password: this.password
    })
      .map( (res) => res.json())
      .subscribe(data => {
        loader.dismissAll();
        
        if (data.status == 'error') {
          let alert = this.alertCtrl.create({
            title: 'AMA',
            subTitle: data.message,
            buttons: ['Okay']
          });

          alert.present();
          return;
        }

        this.evaluationProvider.set(data.items.evaluations);
        this.userProvider.set(data.items.user);
        this.navCtrl.setRoot(TabsPage);
        // this.viewCtrl.dismiss();
      });
  }
}
