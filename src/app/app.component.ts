import { Component, OnInit, HostBinding } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imageSrc = "assets/dark-sun.svg";
  moonSrc = "assets/dark-moon.svg"

  linkedinSrc = "assets/dark-linkedin";
  githubSrc = "assets/dark-github";

  isLinksVisible: boolean = false;

  toggleLinks(): void {
    this.isLinksVisible = !this.isLinksVisible;
  }
  
  constructor() {
    
  };
  
  ngOnInit(): void { 
    this.applySystemThemePreference();
    this.updateThemeIcon();

    // Listen for changes in the system's color scheme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const isDarkMode = event.matches;
      this.setTheme(isDarkMode);
    });

  };

  public toggle() {
    document.body.classList.toggle('dark-theme');
    this.updateThemeIcon();
  }

  private applySystemThemePreference() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(isDarkMode);
  }

  private setTheme(isDarkMode: boolean) {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    this.updateThemeIcon();
  }

  private updateThemeIcon() {
    if (document.body.classList.contains('dark-theme')) {
      this.imageSrc = "assets/light-sun.svg";  // Image for dark mode
    } else {
      this.imageSrc = "assets/dark-sun.svg";  // Image for light mode
    }

    if (document.body.classList.contains('dark-theme')) {
      this.moonSrc = "assets/light-moon.svg";  // Image for dark mode
    } else {
      this.moonSrc = "assets/dark-moon.svg";  // Image for light mode
    }

    if (document.body.classList.contains('dark-theme')) {
      this.linkedinSrc = "assets/light-linkedin.svg";  // Image for dark mode
    } else {
      this.linkedinSrc = "assets/dark-linkedin.svg";  // Image for light mode
    }

    if (document.body.classList.contains('dark-theme')) {
      this.githubSrc = "assets/light-github.svg";  // Image for dark mode
    } else {
      this.githubSrc = "assets/dark-github.svg";  // Image for light mode
    }
    

  }
}

