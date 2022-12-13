import { Directive } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardHeader, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { Observable, defer } from 'rxjs';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

@Directive({
  selector: '[routerLink]'
})
class MockRouterLink{}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceStub: Partial<AuthService>;
  let routerStub: Partial<Router>;
  let routerSpy: jasmine.SpyObj<Router>;
  let loader = 
  routerSpy = jasmine.createSpyObj('Router',['navigate']);

  authServiceStub = {
    login(email: string, password: string): Observable<any> {
      let user = new User(0,"","","");
      return defer(()=>Promise.resolve(user));
    } 
  }

  routerStub = {
    navigate(args: String[]): Promise<boolean> {
      return Promise.resolve(true);
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatCardModule, MatFormFieldModule, MatInputModule, 
        BrowserAnimationsModule, RouterTestingModule, ReactiveFormsModule ],
      declarations: [ LoginComponent, MockRouterLink ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        //{provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// TODO: make work with RouterTestingModule instead of RouterSpy
/*   it('should navigate to post-feed on login', () => {
    routerSpy.navigate.and.returnValue(Promise.resolve(true))
    let mock = {preventDefault(){}};
    component.onSubmit(mock);
    setTimeout(()=>{
      expect(routerSpy.navigate).toHaveBeenCalled();
    },2000);
  });

  it('should navigate to register on calling register', () => {
    routerSpy.navigate.and.returnValue(Promise.resolve(true))
    component.register();
    expect(routerSpy.navigate).toHaveBeenCalled();
  }); */
});
