import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { quiz } from '../models/quiz';
import { QuizFormService } from '../service/quiz-form.service';
import { UserCreationService } from '../service/user-creation.service';
import { PokeApiService } from '../service/poke-api.service';
import { user } from '../models/user';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  quiz: quiz[] = []

  types:string[] = ['Fire', 'Grass', 'Water']
  points:number[] = [0,0,0]
  type: string = ''
  currQues = 0;

  user: user = {
    username: '',
    email: '',
    gender: '',
    interest: '',
    profilepic: '',
    element: '',

    pokemons: []
  };

  constructor(private router: Router, private quizService: QuizFormService, private userService:UserCreationService, private pokeService:PokeApiService) { }

  ngOnInit(): void {
    this.quiz = this.quizService.getQuiz();
  }

  onAnswer(type: string, point: number)
  {
    this.currQues++

    if (type == 'Fire')
    {
      this.points[0] += point
    }
    else if (type == 'Grass')
    {
      this.points[1] += point
    }
    else if (type == 'Water')
    {
      this.points[2] += point
    }
  }

  onSubmit() {
    for (let i = 0; i < this.points.length; i++) {
      for (let j = i + 1; j < this.points.length; j++) {
        if (this.points[i] < this.points[j]) {
          let tempNum = this.points[i]
          this.points[i] = this.points[j]
          this.points[j] = tempNum

          let tempStr:string = this.types[i]
          this.types[i] = this.types[j]
          this.types[j] = tempStr
        }
      }
    }

    this.type = this.types[0];
  }

  restart() {
    this.currQues = 0
    this.types = ['Fire', 'Grass', 'Water']
    this.points = [0,0,0]
    this.type = ''
  }

  submitUser() {
    this.user.username = this.userService.username
    this.user.email = this.userService.email
    this.user.gender = this.userService.gender
    this.user.interest = this.userService.interest

    if (this.type == 'Fire') {
      this.user.elementId = 1
    }
    else if (this.type == 'Grass') {
      this.user.elementId = 2
    }
    else if (this.type == 'Water') {
      this.user.elementId = 3
    }

    console.log(this.user)

    this.pokeService.addUser(this.user)

    this.router.navigate(['pokemon'])
  }
}
