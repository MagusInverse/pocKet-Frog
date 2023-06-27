import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaErrorPage } from './pagina-error.page';

describe('PaginaErrorPage', () => {
  let component: PaginaErrorPage;
  let fixture: ComponentFixture<PaginaErrorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
