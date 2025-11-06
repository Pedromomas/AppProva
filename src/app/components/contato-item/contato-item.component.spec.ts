import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContatoItemComponent } from './contato-item.component';

describe('ContatoItemComponent', () => {
  let component: ContatoItemComponent;
  let fixture: ComponentFixture<ContatoItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ContatoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContatoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
