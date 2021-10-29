import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserCreationComponent } from './user-creation.component';
import { AuthModule } from '@auth0/auth0-angular';
import auth_config from '../../../../auth_config.json';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('UserCreationComponent', () => {
  let component: UserCreationComponent;
  let fixture: ComponentFixture<UserCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      AuthModule.forRoot(
        {
            domain: auth_config.domain,
            clientId: auth_config.clientId
      }
      )],
      declarations: [ UserCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
