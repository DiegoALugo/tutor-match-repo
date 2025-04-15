import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRequestsComponent } from './session-requests.component';

describe('SessionRequestsComponent', () => {
  let component: SessionRequestsComponent;
  let fixture: ComponentFixture<SessionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
