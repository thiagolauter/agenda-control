import { Component } from '@angular/core'
import { GoogleApiService, UserInfo } from './google-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'front-end';
  mailSnippets: string[] = []
  userInfo?: UserInfo

  constructor(private readonly googleApi: GoogleApiService) {

    googleApi.userProfileSubject.subscribe(info => {
      this.userInfo = info
    })
    googleApi.userProfileSubject.subscribe(info => {
      googleApi.userProfileSubject.next(info)
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }
}