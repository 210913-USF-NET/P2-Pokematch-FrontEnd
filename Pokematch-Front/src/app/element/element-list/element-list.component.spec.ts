import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementListComponent } from './element-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import auth_config from '../../../../auth_config.json';

describe('ElementListComponent', () => {
  let component: ElementListComponent;
  let fixture: ComponentFixture<ElementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,
        AuthModule.forRoot(
          {
              domain: auth_config.domain,
              clientId: auth_config.clientId
        }
        )],
      declarations: [ ElementListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
