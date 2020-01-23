public with sharing class QuizMasterController {
    @AuraEnabled(cacheable=true)
    public static Question__c getRandomQuestion() {
        Integer rand = Math.floor(Math.random() * 2).intValue();
        return [
            SELECT Id, Question__c, Answer1__c, Answer2__c, Answer3__c, Answer4__c, Answer5__c,Identify_Correct_Answer__c, Question_Type__c from Question__c LIMIT 1 OFFSET :rand
        ];
    }
}