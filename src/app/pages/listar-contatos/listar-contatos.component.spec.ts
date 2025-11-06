import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListarContatosComponent } from './listar-contatos.component';

describe('ListarContatosComponent', () => {
  let component: ListarContatosComponent;
  let fixture: ComponentFixture<ListarContatosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListarContatosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
