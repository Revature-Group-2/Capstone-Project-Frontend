import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';
import { isNgTemplate } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  chats : any = {
    public: [],
  };

  tab: string = 'public';

  rooms : any = [];

  private stompClient: any;

  public userData : any = {
    username: '',
    name: '',
    connected: false,
    message: '',
  };

  public roomName : any = '';

  constructor(
    private authService : AuthService,
    private http : HttpClient,
  ) {}

  ngOnInit() {
    this.authService.restoreSession().subscribe(response => {
      this.userData.username = response.email;
      this.userData.name = response.firstName + " " + response.lastName;
    });
    this.http.get(environment.baseUrl + "/chatrooms").subscribe((response) => {
      this.rooms = response;
    })
    this.connect();
  }

  connect = ()  => {
    const socket = new SockJS(environment.baseUrl + '/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, this.onConnected, this.onError);
  }

  onConnected = () => {
    this.userData.connected = true;
    this.stompClient.subscribe('/chatroom/public', this.onMessageReceived);
    //this.stompClient.subscribe('/user/' + this.userData.username + '/private', this.onPrivateMessage);
  }

  userJoin = () => {
    let chatMessage = {
      senderName: this.userData.username,
      status:"JOIN",
    };
    this.stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  }

  onMessageReceived = (payload: any) => {
    let payloadData = JSON.parse(payload.body);
    switch(payloadData.status) {
      case "JOIN":
        if(!this.chats[payloadData.roomName]) {
          this.chats[payloadData.roomName] = [];
          this.chats[payloadData.roomName] = new Map(this.chats[payloadData.roomName]);
        }
        break;
      case "MESSAGE":
        if(!this.chats[payloadData.roomName]) {
          this.chats[payloadData.roomName] = [];
        }
        this.chats[payloadData.roomName].push(payloadData);
        //this.chats[payloadData.roomName] = new Map(this.chats[payloadData.roomName]);
      }
  }


  onError = (error: any) => {
    console.log(error);
  }

  handleMessage = (event: any) => {
    const {value} = event.target;
    this.userData.message = value;
    console.log(this.userData.message);
  }

  sendValue = () => {
    if (this.stompClient) {
      let chatMessage = {
        senderName: this.userData.name,
        roomName: this.tab,
        message: this.userData.message,
        status: "MESSAGE"
      };
      console.log('from sendvalue', `/app/message/${this.tab}`);
      this.stompClient.send(`/app/message/${this.tab}`, {}, JSON.stringify(chatMessage));
      this.userData.message = '';
    }
  }

  createRoom = () => {
    this.stompClient.subscribe(`/chatroom/${this.roomName}`, this.onMessageReceived);
    this.tab = this.roomName;
    this.roomName = "";
    this.http.get(environment.baseUrl + "/chatrooms").subscribe((response) => {
      this.rooms = response;
      console.log("rooms", this.rooms);
      console.log("tab", this.tab);
    })
  }

  handleRoom = (event: any) => {
    this.roomName = event.target.value;
  }

  reloadRooms = () => {
    this.http.get(environment.baseUrl + "/chatrooms").subscribe((response) => {
      this.rooms = response;
    })
  }

  joinRoom = (event: any) => {
    let roomName = event.target.value;
    this.stompClient.subscribe(`/chatroom/${roomName}`, this.onMessageReceived);
    this.tab = roomName;
  }

  changeTab = (event: any) => {
    this.tab = event.target.textContent;
    console.log(this.tab);
  }

}