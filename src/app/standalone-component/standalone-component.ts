import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-component.html',
})
export class StandaloneComponent implements OnInit {
  timeDifference: any;
  waitingTime: any = 1;
  patients = [
    { patientName: 'A', standardWaitingTime: '10 Minutes', waitingTime: 10 },
    { patientName: 'B', standardWaitingTime: '20 Minutes', waitingTime: 20 },
    { patientName: 'C', standardWaitingTime: '30 Minutes', waitingTime: 30 },
    { patientName: 'D', standardWaitingTime: '40 Minutes', waitingTime: 40 },
  ];
  patientss: any;
  constructor() {
    setInterval(() => {
      this.timeDifference = new Date().toString().split(' ')[4];
    }, 1);
    setInterval(() => {
      this.patients.map((item) => {
        return (item.waitingTime = item.waitingTime + 1);
      });
    }, 60000);
  }
  ngOnInit(): void {}
}
