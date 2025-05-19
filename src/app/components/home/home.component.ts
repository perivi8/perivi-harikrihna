import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  words: string[] = ["ML Engineer","AI Developer", "Data Scientist" ,"Web Developer","ECE Student"];
  currentWord: string = "";
  currentWordIndex = 0;
  typingSpeed = 50; // Speed of typing (ms per letter)
  deletingSpeed = 50; // Speed of deleting (ms per letter)
  pauseBetweenWords = 1000; // Pause before deleting

  constructor() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const word = this.words[this.currentWordIndex];

      if (!isDeleting) {
        this.currentWord = word.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === word.length) {
          setTimeout(() => (isDeleting = true), this.pauseBetweenWords);
        }
      } else {
        this.currentWord = word.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        }
      }

      setTimeout(type, isDeleting ? this.deletingSpeed : this.typingSpeed);
    };

    type();
  }
}
