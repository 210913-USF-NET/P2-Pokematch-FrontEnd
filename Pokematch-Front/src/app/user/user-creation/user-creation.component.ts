import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AsyncValidator, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';
import { UserCreationService } from 'src/app/service/user-creation.service';
import { of, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

import { Router } from '@angular/router';

@Component({
  selector: 'user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  username!: FormControl
  gender: FormControl
  interest: FormControl

  usernames = []

  constructor(private router: Router, private currRoute: ActivatedRoute, private auth:AuthService, private userService: UserCreationService, private pokeService: PokeApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.username = this.fb.control(
      null,
      Validators.required,
      this.userValidator()
    )

    this.gender = this.fb.control(
      null,
      Validators.required
    )

    this.interest = this.fb.control(
      null,
      Validators.required
    )
  }

  private userExists(username: string): Observable<boolean> {
    this.pokeService.getUserList().then(result => {
      for(let i = 0; i < result.length; i++) {
        this.usernames[i] = result[i].username.toLowerCase()
      }
    })

    console.log(of(this.usernames.includes(username.toLowerCase())))

    return of(this.usernames.includes(username.toLowerCase()))
  }

  private userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      this.userExists(control.value).pipe(
        map((response) => (response ? {
           userExists: true, flag : true } : null))
      )
  }

  onSubmit() {
    if (this.username.valid) {
      this.userService.username = this.username.value

      this.auth.user$.subscribe(profile => {
        this.userService.email = profile.email
      })

      this.userService.gender = this.gender.value
      this.userService.interest = this.interest.value

      this.router.navigate(['quiz'])
    }
  }
}
