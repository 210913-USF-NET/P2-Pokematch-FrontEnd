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
        { option: 'Super strength', type: 'fire', point: 1 },
        { option: 'Fly', type: 'grass', point: 1 },
        { option: 'Change body size', type: 'water', point: 1 }
      ]
    },
    {
      question: 'What is your favorite dessert?',
      answer: 
      [
        { option: 'Cheesecake', type: 'fire', point: 2 },
        { option: 'Brownie', type: 'grass', point: 2 },
        { option: 'Ice cream', type: 'water', point: 2 }
      ]
    },
    {
      question: 'What is your favorite movie genre?',
      answer: 
      [
        { option: 'Thriller', type: 'fire', point: 1 },
        { option: 'Fantasy', type: 'grass', point: 1 },
        { option: 'Romance', type: 'water', point: 1 }
      ]
    },
    {
      question: 'What is your best quality?',
      answer: 
      [
        { option: 'Passionate', type: 'fire', point: 2 },
        { option: 'Honest', type: 'grass', point: 2 },
        { option: 'Humble', type: 'water', point: 2 }
      ]
    }
  ]
  
  constructor() { }

  getQuiz() {
    return this.quiz;
  }
}
