import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import QUESTION_FIELD from '@salesforce/schema/Question__c.Question__c';

export default class QuizMasterLayout extends LightningElement {
    @wire(getRecord, { recordId: 'a006D000002Wk0lQAC', fields: [QUESTION_FIELD], optionalFields: [] })
    questionRecord;

     get question() {
        return getFieldValue(this.questionRecord.data, QUESTION_FIELD);
    }
}