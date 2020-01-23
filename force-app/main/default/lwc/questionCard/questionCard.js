import { LightningElement, api, track } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class QuestionCard extends LightningElement {
  @api question;
  @api answer1;
  @api answer2;
  @api answer3;
  @api answer4;
  @api answer5;
  @api identifycorrectanswer;
  @api questiontype;

  @track selectedAnswer = [];

  get isSingleSelect() {
    return this.questiontype === "Single-Select";
  }

  handleSubmitClick() {
    if (
      this.selectedAnswer[0] === this.identifycorrectanswer ||
      this.selectedAnswer.sort().toString() ===
        this.identifycorrectanswer
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
      this.identifycorrectanswer.split(";").length
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

  handleRadioOptionsClick(event) {
    this.selectedAnswer[0] = event.target.value;
  }

  handleCheckboxOptionsClick(event) {
    if (event.target.checked) {
      this.selectedAnswer.push(event.target.value);
    } else {
      this.selectedAnswer = this.selectedAnswer.filter(
        value => value !== event.target.value
      );
    }
  }
}
