import { Component, OnInit } from '@angular/core';
import { Dictionary } from '../data structure/dictionary';
import { quiz } from '../models/quiz';
import { QuizFormService } from '../Service/quiz-form.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  dict = new Dictionary();
  quiz: quiz[] = [];

  currQues = 0;

  constructor(private quizService: QuizFormService) { }

  ngOnInit(): void {
    this.quiz = this.quizService.getQuiz();
  }

  onAnswer(type: string, point: number)
  {
    if (type === 'fire')
    {
      if (!this.dict.has('fire'))
      {
        this.dict.set('fire', point);
      }
      else
      {
        this.dict.set('fire', this.dict.get('fire') + point);
      }

      this.currQues++;
    }
    else if (type == 'water')
    {
      if (!this.dict.has('water'))
      {
        this.dict.set('water', point);
      }
      else
      {
        this.dict.set('water', this.dict.get('water') + point);
      }

      this.currQues++;
    }
    else if (type == 'grass')
    {
      if (!this.dict.has('grass'))
      {
        this.dict.set('grass', point);
      }
      else
      {
        this.dict.set('grass', this.dict.get('grass') + point);
      }

      this.currQues++;
    }
  }
}
