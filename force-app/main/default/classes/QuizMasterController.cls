public with sharing class QuizMasterController {
    @AuraEnabled(cacheable=true)
    public static Question__c getRandomQuestion() {

        Integer count = getTotalQuestionsCount();
        Integer offset = Math.floor(Math.random() * count).intValue();

        return [
            SELECT Id, Question__c, Answer1__c, Answer2__c, Answer3__c, Answer4__c, Answer5__c,Identify_Correct_Answer__c, Question_Type__c FROM Question__c ORDER BY Name ASC LIMIT 1 OFFSET :offset
        ];
    }

    @AuraEnabled(cacheable=true)
    public static Integer getTotalQuestionsCount(){
        return [Select COUNT() FROM Question__c];
    }
}