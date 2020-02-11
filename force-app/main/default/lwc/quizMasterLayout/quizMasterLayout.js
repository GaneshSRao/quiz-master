import { LightningElement, wire, track } from "lwc";
import { refreshApex } from "@salesforce/apex";
import getRandomQuestion from "@salesforce/apex/QuizMasterController.getRandomQuestion";
import getTotalQuestionsCount from "@salesforce/apex/QuizMasterController.getTotalQuestionsCount";

export default class QuizMasterLayout extends LightningElement {
  @wire(getRandomQuestion)
  questionRecord;

  @wire(getTotalQuestionsCount)
  totalQuesitons;

  @track currentQuestion;
  @track totalQuestionCount;

  get title(){
    return "Question XX of "+this.totalQuestionCount;
  }

  renderedCallback(){
    this.currentQuestion = this.questionRecord.data;
    this.totalQuestionCount = this.totalQuesitons.data;
  }

  handleNextClick() {
    refreshApex(this.questionRecord);
    this.currentQuestion = this.questionRecord.data;
  }
}
