import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { element } from '../models/element';
import { match } from '../models/match';
import { user } from '../models/user';
import { PokeApiService } from  '../service/poke-api.service';

describe('PokeApiService', () => {
  let service: PokeApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PokeApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //GET *************************
  it('getElementList should get a list of elements', () => {
    let fakeData: element[] = [
      {
        id: 1,
        name: "Fire",
        user: [],
        move: []
      },
      {
        id: 2,
        name: "Grass",
        user: [],
        move: []
      }
    ];

    spyOn(service, 'getElementList').and.returnValue(Promise.resolve(fakeData));

    service.getElementList().then((res) => {
      expect(service.getElementList).toHaveBeenCalled();
      expect(res.length).toEqual(2);
    });
  });
  
it('getUserList should get a user list', () => {
  let fakeData: user[] = [
    {
      id: 5,
      username: "Bao",
      email: "test",
      gender: "m",
      interest: "m",
      profilepic: "test",
      element: "Fire"

    },
    {
      id: 6,
      username: "lare_bear",
      email: "test",
      gender: "m",
      interest: "m",
      profilepic: "test",
      element: "Grass"
    }
  ];
  spyOn(service,'getUserList').and.returnValue(Promise.resolve(fakeData));

    service.getUserList().then((res) => {
      expect(service.getUserList).toHaveBeenCalled();
      expect(res.length).toEqual(2);
});
});


it('GetMatchList should get a list of matches', () => {
  let fakeData: match[] = [
    {
      id: 1,
    name: "test",
    imgUrl: "test",
    userId: 5,
    userId2: 6,
    messages: []
    },
    {
    id: 2,
    name: "test",
    imgUrl: "test",
    userId: 7,
    userId2: 8,
    messages: []
    }
  ];

  spyOn(service, 'getMatchList').and.returnValue(Promise.resolve(fakeData));

  service.getMatchList().then((res) => {
    expect(service.getMatchList).toHaveBeenCalled();
    expect(res.length).toEqual(2);
  });
});

//ADDING *************************
  it('addUser should create a user', () => {
    let fakeUser = {
      id: 5,
      username: "Bao",
      email: "test",
      gender: "m",
      interest: "m",
      profilepic: "test",
      element: "Fire"
    }
  
  spyOn(service, 'addUser').and.returnValue(Promise.resolve(fakeUser));

  service.addUser(fakeUser).then((res) => {
    expect(service.addUser).toHaveBeenCalled();
    expect(res).toEqual(fakeUser);
  });
});

it('addPokemon should create a pokemon', () => {
  let fakePokemon = {
    id: 1,
    name: "bulby",
    Hp: 50,
    imgUrl: "test",
    UserId: 5
  }

spyOn(service, 'addPokemon').and.returnValue(Promise.resolve(fakePokemon));

service.addPokemon(fakePokemon).then((res) => {
  expect(service.addPokemon).toHaveBeenCalled();
  expect(res).toEqual(fakePokemon);
});
});

it('addMatch should create a match', () => {
  let fakeMatch = {
    id: 1,
    name: "test",
    imgUrl: "test",
    userId: 7,
    userId2: 10,
    messages: []
  }

spyOn(service, 'addMatch').and.returnValue(Promise.resolve(fakeMatch));

service.addMatch(fakeMatch).then((res) => {
  expect(service.addMatch).toHaveBeenCalled();
  expect(res).toEqual(fakeMatch);
});
});

it('postMessage should create a message', () => {
  let fakeMessage = {
    id: 1,
    toUser: "test",
    fromUser: "testington",
    send: "bruh",
    recieve: "this is kinda sus",
    matchId: 1
  }

spyOn(service, 'postMessage').and.returnValue(Promise.resolve(fakeMessage));

service.postMessage(fakeMessage).then((res) => {
  expect(service.postMessage).toHaveBeenCalled();
  expect(res).toEqual(fakeMessage);
});
});

});
