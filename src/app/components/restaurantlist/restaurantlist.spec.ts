import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurantlist } from './restaurantlist';

describe('Restaurantlist', () => {
  let component: Restaurantlist;
  let fixture: ComponentFixture<Restaurantlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restaurantlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Restaurantlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
