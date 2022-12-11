import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  privateChats : any = {};
  
  publicChats : any = {};

  tab: any;

  private stompClient: any;

  userData = {
    username: '',
    receivername: '',
    connected: false,
    message: '',
  }

  constructor() {}

  ngOnInit() {
    this.connect();
  }

  connect() {
    const socket = new SockJS(environment.baseUrl + '/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, this.onConnected, this.onError);
  }

  onConnected() {
    this.userData.connected = true;
    this.stompClient.subscribe('/chatroom/public', this.onMessageReceived);
    this.stompClient.subscribe('/user/' + this.userData.username + '/private', this.onPrivateMessage);
  }

  userJoin() {
    let chatMessage = {
      senderName: this.userData.username,
      status:"JOIN",
    };
    this.stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  }

  onMessageReceived(payload: any) {
    let payloadData = JSON.parse(payload.body);
    switch(payloadData.status) {
      case "JOIN":
        if(!this.privateChats[payloadData.senderName]) {
          this.privateChats[payloadData.senderName] = [];
          this.privateChats = new Map(this.privateChats);
        }
        break;
      case "MESSAGE":
        this.publicChats.push(payloadData);
        this.publicChats = [...this.publicChats];
    }
  }

  onPrivateMessage(payload: any) {
    let payloadData = JSON.parse(payload.body);
    if(this.privateChats[payloadData.senderName]) {
      this.privateChats[payloadData.senderName].push(payloadData);
      this.privateChats[payloadData.senderName] = new Map(this.privateChats);
    } else {
      let list = [];
      list.push(payloadData);
      this.privateChats[payloadData.senderName] = list;
      this.privateChats = new Map(this.privateChats);
    }
  }

  onError(error: any) {
    console.log(error);
  }

  handleMessage(event: any) {
    const {value} = event.target;
    this.userData.message = value;
  }

  sendValue() {
    if (this.stompClient) {
      let chatMessage = {
        senderName: this.userData.username,
        receiverName: this.userData.receivername,
        message: this.userData.message,
        status: "MESSAGE"
      };
      this.stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      this.userData.message = '';
    }
  }

  sendPrivateValue() {
    if (this.stompClient) {
      let chatMessage = {
        senderName: this.userData.username,
        receiverName: this.tab,
        messge: this.userData.message,
        status:"MESSAGE"
      };

      if (this.userData.username !== this.tab) {
        this.privateChats[this.tab].push(chatMessage);
        this.privateChats = new Map(this.privateChats);
      }
      this.stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      this.userData.message = '';
    }
  }


}
