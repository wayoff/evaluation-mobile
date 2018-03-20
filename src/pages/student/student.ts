import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EvaluationProvider } from '../../providers/evaluation/evaluation';
import { AnswersPage } from '../answers/answers';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html'
})
export class StudentPage {
  public answer:any = {
    studentAnswers: []
  };

  constructor(
    public navCtrl: NavController,
    public evaluationProvider: EvaluationProvider,
    public navParams: NavParams
  ) {
    this.answer = this.navParams.get('answer');
    console.log(this.answer);
  }

}
