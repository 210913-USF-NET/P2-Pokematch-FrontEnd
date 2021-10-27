import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PokeApiService } from '../service/poke-api.service';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {

  constructor(private auth: AuthService, private pokeService: PokeApiService) { }

  flag: boolean = false;

  ngOnInit(): void {
    this.auth.user$.subscribe(profile => {
      this.pokeService.getUserList().then(result => {
        for (let i = 0; i < result.length; i++) {
          if (result[i].email == profile.email) {
            this.flag = true
            console.log("hello")
            this.auth.loginWithRedirect({ appState: { target: '/userprofile'} });
          }
        }

        if (this.flag !== true) {
          this.auth.loginWithRedirect({ appState: { target: '/user-creation'} });
        }
      })
    })
  }

}
