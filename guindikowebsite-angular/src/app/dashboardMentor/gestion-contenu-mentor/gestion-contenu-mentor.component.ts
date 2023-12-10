import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-contenu-mentor',
  templateUrl: './gestion-contenu-mentor.component.html',
  styleUrls: ['./gestion-contenu-mentor.component.css']
})
export class GestionContenuMentorComponent {
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }
}
