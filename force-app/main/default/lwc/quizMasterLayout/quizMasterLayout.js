import { LightningElement, wire, track } from "lwc";
import { refreshApex } from "@salesforce/apex";
import getRandomQuestion from "@salesforce/apex/QuizMasterController.getRandomQuestion";
import getTotalQuestionsCount from "@salesforce/apex/QuizMasterController.getRandomQuestion";

export default class QuizMasterLayout extends LightningElement {
  @wire(getRandomQuestion)
  questionRecord;

  @wire(getTotalQuestionsCount)
  totalQuesitons;

  @track currentQuestion;

  getTitle(){
    return "Question XX pf "+this.totalQuesitons;
  }

  renderedCallback(){
    this.currentQuestion = this.questionRecord.data;
  }

  handleNextClick() {
    refreshApex(this.questionRecord);
    this.currentQuestion = this.questionRecord.data;
  }
}
