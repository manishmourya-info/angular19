import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-client',
  imports: [CommonModule],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css'
})
export class HttpClientComponent implements OnInit {

  data$:any = [];

  constructor(private service : HomeService) {

  }

  ngOnInit(): void {
      this.data$ = this.service.getToDoList();
  }

}

