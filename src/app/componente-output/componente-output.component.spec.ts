import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteOutputComponent } from './componente-output.component';

describe('ComponenteOutputComponent', () => {
  let component: ComponenteOutputComponent;
  let fixture: ComponentFixture<ComponenteOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
