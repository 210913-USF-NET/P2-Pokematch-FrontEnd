import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { quiz } from '../models/quiz';
import { QuizFormService } from '../service/quiz-form.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  quiz: quiz[] = []

  types = ['fire', 'water', 'grass']
  points = [0,0,0]
  type: string = ''

  answerSelected:boolean = false
  currQues = 0;

  constructor(private router: Router, private quizService: QuizFormService) { }

  ngOnInit(): void {
    this.quiz = this.quizService.getQuiz();
  }

  onAnswer(type: string, point: number)
  {
    this.currQues++

    if (type == 'fire') 
    {
      this.points[0] += point
    }
    else if (type == 'water') 
    {
      this.points[1] += point
    }
    else if (type == 'grass') 
    {
      this.points[2] += point
    }

    this.answerSelected = false
  }

  onSubmit() {
    this.currQues = 0
    this.points = [0,0,0]
  }

  result() {
    console.log(this.currQues)
    
  }
}
