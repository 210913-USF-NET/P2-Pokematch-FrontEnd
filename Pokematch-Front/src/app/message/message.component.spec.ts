import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModule } from '@auth0/auth0-angular';
import auth_config from '../../../auth_config.json';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthModule.forRoot(
        {
            domain: auth_config.domain,
            clientId: auth_config.clientId
      }
      )],
      declarations: [ MessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
