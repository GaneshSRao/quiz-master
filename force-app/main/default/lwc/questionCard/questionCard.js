import { LightningElement, api } from 'lwc';

export default class QuestionCard extends LightningElement {
    @api question;
    @api answer1;
    @api answer2;
    @api answer3;
    @api answer4;
    @api answer5;
    @api identifyCorrectAnswer;

    
}