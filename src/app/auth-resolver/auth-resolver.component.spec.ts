import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResolverComponent } from './auth-resolver.component';

describe('AuthResolverComponent', () => {
  let component: AuthResolverComponent;
  let fixture: ComponentFixture<AuthResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthResolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
