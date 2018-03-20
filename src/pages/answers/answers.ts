import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { EvaluationProvider } from '../../providers/evaluation/evaluation';
import { StudentPage } from '../student/student';

@Component({
  selector: 'page-answers',
  templateUrl: 'answers.html'
})
export class AnswersPage {
  public form:any = {
    title: 'Answers',
    questions: []
  };
  public answers:any = {
    answers: []
  };
  public segment:String = 'questions';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public evaluationProvider: EvaluationProvider) {
    this.form = this.navParams.get('form');
    console.log(this.form);

    console.log(this.answers);
    this.answers = this.evaluationProvider.answersByFormId(this.form.id);
    this.segment = 'questions';
  }

  overAllCountByAnswer(val) {
    let count:any = 0;
    let studentAnswers = [];

    this.answers.answers.forEach( (answer) => {
      studentAnswers = [ ...studentAnswers, ...answer.student_answers];
    })

    studentAnswers.forEach( (answer) => {
      if (answer.value == val) {
        count+= 1;
      }
    })

    return count;
  }

  overAllCountByQuestionAnswer(questionId:any, val:String) {
    let count:any = 0;
    let studentAnswers = [];

    this.answers.answers.forEach( (answer) => {
      studentAnswers = [ ...studentAnswers, ...answer.student_answers];
    })

    studentAnswers.forEach( (answer) => {
      if (answer.question.id == questionId && answer.value == val) {
        count+= 1;
      }
    })

    let divident = count / this.answers.answers.length;

    return `${(divident * 100)} %`;
  }

  onClickListItem(answer) {
    let modal = this.modalCtrl.create(StudentPage, {
      answer
    });

    modal.present();
  }
}
