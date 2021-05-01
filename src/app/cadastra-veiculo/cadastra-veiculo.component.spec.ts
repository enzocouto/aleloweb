import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraVeiculoComponent } from './cadastra-veiculo.component';

describe('CadastraVeiculoComponent', () => {
  let component: CadastraVeiculoComponent;
  let fixture: ComponentFixture<CadastraVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
