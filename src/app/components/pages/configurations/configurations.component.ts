import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  theme: boolean;

  constructor() {
    this.theme = true;
  }
  
  ngOnInit(): void {
  }

  toggleTheme(): void {
    if (this.theme) {
      document.documentElement.style.setProperty('--color-1', '#00BFFF');
      document.documentElement.style.setProperty('--color-3', '#FF8200');
    } else {
      document.documentElement.style.setProperty('--color-1', '#FF8200');
      document.documentElement.style.setProperty('--color-3', '#00BFFF');
    }
  }

}
