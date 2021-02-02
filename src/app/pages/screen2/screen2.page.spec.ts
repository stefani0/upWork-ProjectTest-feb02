import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Screen2Page } from './screen2.page';

describe('Screen2Page', () => {
  let component: Screen2Page;
  let fixture: ComponentFixture<Screen2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Screen2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
