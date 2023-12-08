import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-contenu',
  templateUrl: './gestion-contenu.component.html',
  styleUrls: ['./gestion-contenu.component.css']
})
export class GestionContenuComponent {
  recupArticle: any;
  // Attribut pour la pagination
  articlesParPage = 10; // Nombre d'articles par page
  pageActuelle = 1; // Page actuelle

    // Méthode pour déterminer les articles à afficher sur la page actuelle
    getArticlesPage(): any[] {
      const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
      const indexFin = indexDebut + this.articlesParPage;
      return this.recupArticle.slice(indexDebut, indexFin);
    }
     // Méthode pour générer la liste des pages
     get pages(): number[] {
      const totalPages = Math.ceil(this.recupArticle.length / this.articlesParPage);
      return Array(totalPages).fill(0).map((_, index) => index + 1);
    }
  
    // Méthode pour obtenir le nombre total de pages
    get totalPages(): number {
      return Math.ceil(this.recupArticle.length / this.articlesParPage);
    }
}
