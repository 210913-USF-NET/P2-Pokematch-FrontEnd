import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AsyncValidator, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/Service/poke-api.service';
import { UserCreationService } from 'src/app/Service/user-creation.service';
import { of, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { user } from 'src/app/models/user';


@Component({
  selector: 'user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  // profileForm = new FormGroup({
  //   username: new FormControl('')
  // });

  username!: FormControl;

  user:user[] = []
  usernames = []

  constructor(private currRoute: ActivatedRoute, private userService: UserCreationService, private pokeService: PokeApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.username = this.fb.control(
      null,
      Validators.required,
      this.userValidator()
    )
  }

  private userExists(username: string): Observable<boolean> {
    this.pokeService.getUserList().then(result => {
      for(let i = 0; i < result.length; i++) {
        this.usernames[i] = result[i].username.toLowerCase()
      }
    })

    return of(this.usernames.includes(username.toLowerCase()))
  }

  private userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      this.userExists(control.value).pipe(
        map((response) => (response ? { userExists: true } : null))
      )
  }

  onSubmit() {

  }

}
