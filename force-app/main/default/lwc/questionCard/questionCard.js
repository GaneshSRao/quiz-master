import { LightningElement, api, track } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class QuestionCard extends LightningElement {
  @api question;

  @track questionType;
  @track identifyCorrectAnswer;
  @track selectedAnswer = [];

  get options() {
    return [
      {
        styleClass: "slds-m-around_xx-small lgc-bg-option",
        type: this.questionType === "Single-Select" ? "radio" : "checkbox",
        checked: false,
        name: "options",
        value: "Answer1",
        label: this.question.Answer1__c
      },
      {
        styleClass: "slds-m-around_xx-small lgc-bg-option",
        type: this.questionType === "Single-Select" ? "radio" : "checkbox",
        checked: false,
        name: "options",
        value: "Answer2",
        label: this.question.Answer2__c
      },
      {
        styleClass: "slds-m-around_xx-small lgc-bg-option",
        type: this.questionType === "Single-Select" ? "radio" : "checkbox",
        checked: false,
        name: "options",
        value: "Answer3",
        label: this.question.Answer3__c
      },
      {
        styleClass: "slds-m-around_xx-small lgc-bg-option",
        type: this.questionType === "Single-Select" ? "radio" : "checkbox",
        checked: false,
        name: "options",
        value: "Answer4",
        label: this.question.Answer4__c
      },
      {
        styleClass: "slds-m-around_xx-small lgc-bg-option",
        type: this.questionType === "Single-Select" ? "radio" : "checkbox",
        checked: false,
        name: "options",
        value: "Answer5",
        label: this.question.Answer5__c
      }
    ];
  }

  renderedCallback() {
    this.selectedAnswer = [];
    this.identifyCorrectAnswer = this.question.Identify_Correct_Answer__c;
    this.questionType = this.question.Question_Type__c;
  }

  handleSubmitClick() {
    if (
      this.selectedAnswer[0] === this.identifyCorrectAnswer ||
      this.selectedAnswer.sort().toString() ===
        this.identifyCorrectAnswer
          .split(";")
          .sort()
          .toString()
    ) {
      const evt = new ShowToastEvent({
        title: "",
        message: "You have selected the Correct answer(s)",
        variant: "success"
      });
      this.dispatchEvent(evt);
    } else if (
      this.selectedAnswer.length !==
      this.identifyCorrectAnswer.split(";").length
    ) {
      const evt = new ShowToastEvent({
        title: "",
        message: "Select correct number of options",
        variant: "warning"
      });
      this.dispatchEvent(evt);
    } else {
      const evt = new ShowToastEvent({
        title: "",
        message: "You have selected the Wrong answer(s)",
        variant: "error"
      });
      this.dispatchEvent(evt);
    }
  }

  handleOptionsClick(event) {
    if(this.questionType === "Single-Select"){
      this.selectedAnswer[0] = event.target.value;
    }else{
      if (event.target.checked) {
        this.selectedAnswer.push(event.target.value);
      } else {
        this.selectedAnswer = this.selectedAnswer.filter(
          value => value !== event.target.value
        );
      }
    }
  }

  handleNextClick() {
    this.dispatchEvent(new CustomEvent("next"));
  }
}
