import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserBookingsPage } from './user-bookings.page';

describe('UserBookingsPage', () => {
  let component: UserBookingsPage;
  let fixture: ComponentFixture<UserBookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
