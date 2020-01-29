import { LightningElement, wire, track } from "lwc";
import { refreshApex } from "@salesforce/apex";
import getRandomQuestion from "@salesforce/apex/QuizMasterController.getRandomQuestion";

export default class QuizMasterLayout extends LightningElement {
  @wire(getRandomQuestion)
  questionRecord;

  @track currentQuestion;

  renderedCallback(){
    this.currentQuestion = this.questionRecord.data;
  }

  handleNextClick() {
    refreshApex(this.questionRecord);
    this.currentQuestion = this.questionRecord.data;
  }
}
