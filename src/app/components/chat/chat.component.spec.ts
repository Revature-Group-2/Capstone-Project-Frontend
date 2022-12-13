import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import * as SockJS from 'sockjs-client';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { over } from 'stompjs';


import { ChatComponent } from './chat.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let authService: AuthService;
  let user = new User(1,"email","first_name","last_name");
  let authSpy: jasmine.SpyObj<AuthService>;
  let wsSpy;
  let clientSpy;

  beforeEach(async () => {
    httpSpy = jasmine.createSpyObj('HttpClient',['get','post']);
    authSpy = jasmine.createSpyObj('AuthService',['restoreSession']);
    authSpy.restoreSession.and.returnValue(of(user));
    httpSpy.get.and.returnValue(of(user))
    authService = new AuthService(httpSpy);
    wsSpy = jasmine.createSpyObj('window',['SockJS']);
    clientSpy = jasmine.createSpyObj('Stomp', ['over']);


    await TestBed.configureTestingModule({
      declarations: [ ChatComponent ],
      providers: [
        {provide: AuthService, useValue: authSpy},
        {provide: HttpClient, useValue: httpSpy},
        {provide: SockJS, useValue: wsSpy},
        {provide: over, useValue: clientSpy},
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
