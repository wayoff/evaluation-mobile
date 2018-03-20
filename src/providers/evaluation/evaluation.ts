import { Injectable } from '@angular/core';

@Injectable()
export class EvaluationProvider {
  public evaluations:Array<any> = [];
  constructor() {
    //
  }

  set(items:any) {
    this.evaluations = items;
  }

  get() {
    return this.evaluations;
  }

  forms() {
    let forms = [];

    if (!Array.isArray(this.evaluations)) {
      return forms;
    }

    this.evaluations.forEach( (evaluation) => {
      for (let i = forms.length - 1; i >= 0; i--) {
        if (evaluation.form.id == forms[i].id) {
          break;
        }
      }

      forms.push(evaluation.form);
    });

    return forms;
  }

  answersByFormId(formId) {
    return this.evaluations.find( (evaluation) => {
      return evaluation.form.id == formId;
    });
  }

  studentAnswers(formId) {
    let studentAnswers = [];

    return studentAnswers;
  }

}
