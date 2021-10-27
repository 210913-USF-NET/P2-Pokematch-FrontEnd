import { Injectable } from '@angular/core';
import { quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizFormService {
  quiz: quiz[] = 
  [
    {
      question: 'What superpower do you want?',
      answer: 
      [
        { option: 'Super strength', type: 'Fire', point: 5 },
        { option: 'Fly', type: 'Grass', point: 5 },
        { option: 'Change body size', type: 'Water', point: 5 }
      ]
    },
    {
      question: 'What is your favorite dessert?',
      answer: 
      [
        { option: 'Cheesecake', type: 'Fire', point: 3 },
        { option: 'Brownie', type: 'Grass', point: 3 },
        { option: 'Ice cream', type: 'Water', point: 3 }
      ]
    },
    {
      question: 'What is your favorite movie genre?',
      answer: 
      [
        { option: 'Thriller', type: 'Fire', point: 3 },
        { option: 'Fantasy', type: 'Grass', point: 3 },
        { option: 'Romance', type: 'Water', point: 3 }
      ]
    },
    {
      question: 'What is your best quality?',
      answer: 
      [
        { option: 'Passionate', type: 'Fire', point: 2 },
        { option: 'Honest', type: 'Grass', point: 2 },
        { option: 'Humble', type: 'Water', point: 2 }
      ]
    }
  ]
  
  constructor() { }

  getQuiz() {
    return this.quiz;
  }
}
