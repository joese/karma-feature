import { TestBed, async } from '@angular/core/testing';
import { SubOneComponent } from './sub-one.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubOneComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SubOneComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SubOne'`, () => {
    const fixture = TestBed.createComponent(SubOneComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SubOne');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SubOneComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to SubOne!');
  });
});
