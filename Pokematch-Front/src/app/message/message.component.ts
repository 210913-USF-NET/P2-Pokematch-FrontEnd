import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // on initialize, grab the ids of the current logged in user and the match of theirs
    // then, display their messages if any
  }

}
