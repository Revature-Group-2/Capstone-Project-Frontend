import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/Profile';

@Component({
  selector: 'app-search-user-card',
  templateUrl: './search-user-card.component.html',
  styleUrls: ['./search-user-card.component.css']
})
export class SearchUserCardComponent implements OnInit {

  user: IUser = {
    id: 0,
    email: 'vova96.1996@gmail.com',
    firstName: 'Volodymyr',
    lastName: 'Melnychenko',
    avatarImageUrl: 'https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
