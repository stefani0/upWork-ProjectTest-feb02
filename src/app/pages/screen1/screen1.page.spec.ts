import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Screen1Page } from './screen1.page';

describe('Screen1Page', () => {
  let component: Screen1Page;
  let fixture: ComponentFixture<Screen1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Screen1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
