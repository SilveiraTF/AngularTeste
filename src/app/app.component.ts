import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
//import { GitService } from './app.service';
import { Git } from './app.model';
import { FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  git = {} as Git;
  gits: Git[];

  queryField = new FormControl();
  url = 'https://api.github.com/users';
  gits$: Observable<any>

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {

  }

  getGit() {
    let value = this.queryField.value

    this.gits$= this.httpClient.get(this.url + '/' + value)
    .pipe(
      tap((data : any) => this.git = data))
      map((res : any) => res.json().items)

  }


}
