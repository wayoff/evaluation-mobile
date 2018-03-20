import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { EvaluationProvider } from '../../providers/evaluation/evaluation';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public user:any = null;

  constructor(public navCtrl: NavController, public userProvider: UserProvider, public evaluation: EvaluationProvider) {
    this.user = this.userProvider.get();
  }

  logout() {
    console.log('logout')

    this.userProvider.set({});
    this.evaluation.set([]);

    this.navCtrl.popToRoot();
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }

}
