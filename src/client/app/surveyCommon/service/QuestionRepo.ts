
import {Injectable} from "@angular/core";
type QuestionType = 'single' | 'multi';
export type Choice = {
    id: string, label: string,
};

interface SurveyQuestionQuestion {
    text: string;
    type: QuestionType;
}

interface SurveyQuestionInput {
    choices: Choice[]
}

export type SurveyQuestion = SurveyQuestionQuestion & SurveyQuestionInput;

@Injectable()
export class QuestionRepo {
    constructor() { }

    get surveyId() {
        return 'ng2demo';
    }

    get questions():SurveyQuestion[] {
        return [{
            text: "What's your experience with Angular?",
            type: 'multi',
            choices: [
                { id: '1', label: "Nothing, but eager to learn!" },
                { id: '2', label: "I played around with Angular 1" },
                { id: '3', label: "I am using Angular 1 in Production" },
                { id: '4', label: "I use [React, Vue.js, Cycle.js, Ember]" },
                { id: '5', label: "I am playing around with Angular 2" },
                { id: '6', label: "I have already migrated to Angular 2, why haven't you?" },
            ]
        }, {
            text: "Which topics are you interested in learning more?",
            type: 'multi',
            choices: [
                { id: '1', label: "Ng2 Change Detection deep dive" },
                { id: '2', label: "Ng2 Application State Pattern (ngrx/store)" },
                { id: '3', label: "Ng2 on Mobile" },
                { id: '4', label: "Ng1 -> Ng2" },
                { id: '5', label: "Using RxJS in Ng2" },
                { id: '6', label: "Getting started with Typescript" },
            ]
        }]
    }
}