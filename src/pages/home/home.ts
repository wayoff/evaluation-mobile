import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { EvaluationProvider } from '../../providers/evaluation/evaluation';
import { AnswersPage } from '../answers/answers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public forms:any = [];

  constructor(
    public navCtrl: NavController,
    public evaluationProvider: EvaluationProvider,
    public modalCtrl: ModalController
  ) {

  }

  ionViewDidEnter() {
    console.log(this.evaluationProvider.get());
    this.forms = this.evaluationProvider.forms();
  }

  onClickForm(form) {

    let modal = this.modalCtrl.create(AnswersPage, {
      form
    });

    modal.present();
  }


}
