import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { SubTwoComponent } from './sub-two.component';

describe('SubTwoComponent', () => {
  let component: SubTwoComponent;
  let fixture: ComponentFixture<SubTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(SubTwoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SubTwo'`, () => {
    const fixture = TestBed.createComponent(SubTwoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SubTwo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SubTwoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to SubTwo!');
  });
});
