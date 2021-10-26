import { Component, OnInit } from '@angular/core';
import { Dictionary } from '../data structure/dictionary';
import { quiz } from '../models/quiz';
import { QuizFormService } from '../service/quiz-form.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  
  dict = new Dictionary()
  quiz: quiz[] = []

  type = ['fire', 'water', 'grass']
  point = []


  currQues = 0;

  constructor(private quizService: QuizFormService) { }

  ngOnInit(): void {
    this.quiz = this.quizService.getQuiz();
  }

  onAnswer(type: string, point: number)
  {
    if (type === 'fire') 
    {
      point[0]++
      
      console.log(point[0]);

      this.currQues++;
    }
    else if (type == 'water') 
    {
      point[1]++
      console.log(point[1]);

      this.currQues++;
    }
    else if (type == 'grass') 
    {
      point[2]++
      console.log(point[2]);

      this.currQues++;
    }
  }
}
