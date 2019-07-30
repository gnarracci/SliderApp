import { Injectable } from '@angular/core';
import { Albums } from './../interfaces/albums';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(
    private http: HttpClient
  ) { }
}
