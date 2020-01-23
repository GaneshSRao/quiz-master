import { LightningElement, wire } from "lwc";
import { getSObjectValue, refreshApex } from "@salesforce/apex";
import getRandomQuestion from "@salesforce/apex/QuizMasterController.getRandomQuestion";
import QUESTION_FIELD from "@salesforce/schema/Question__c.Question__c";
import ANSWER1 from "@salesforce/schema/Question__c.Answer1__c";
import ANSWER2 from "@salesforce/schema/Question__c.Answer2__c";
import ANSWER3 from "@salesforce/schema/Question__c.Answer3__c";
import ANSWER4 from "@salesforce/schema/Question__c.Answer4__c";
import ANSWER5 from "@salesforce/schema/Question__c.Answer5__c";
import IDENTIFY_CORRECT_ANSWER from "@salesforce/schema/Question__c.Identify_Correct_Answer__c";
import QUESTION_TYPE from "@salesforce/schema/Question__c.Question_Type__c";

export default class QuizMasterLayout extends LightningElement {
  @wire(getRandomQuestion)
  questionRecord;

  get question() {
    return this.questionRecord.data
      ? getSObjectValue(this.questionRecord.data, QUESTION_FIELD)
      : "";
  }
  get answer1() {
    return this.questionRecord.data
      ? getSObjectValue(this.questionRecord.data, ANSWER1)
      : "";
  }
  get answer2() {
    return this.questionRecord.data
      ? getSObjectValue(this.questionRecord.data, ANSWER2)
      : "";
  }
  get answer3() {
    return this.questionRecord.data
      ? getSObjectValue(this.questionRecord.data, ANSWER3)
      : "";
  }
  get answer4() {
    return this.questionRecord.data
      ? getSObjectValue(this.questionRecord.data, ANSWER4)
      : "";
  }
  get answer5() {
    return this.questionRecord.data
      ? getSObjectValue(this.questionRecord.data, ANSWER5)
      : "";
  }
  get questiontype() {
    return this.questionRecord.data
      ? getSObjectValue(this.questionRecord.data, QUESTION_TYPE)
      : "";
  }
  get identifycorrectanswer() {
    return this.questionRecord.data
      ? getSObjectValue(this.questionRecord.data, IDENTIFY_CORRECT_ANSWER)
      : "";
  }

  handleNextClick() {
    refreshApex(this.questionRecord);
  }
}
