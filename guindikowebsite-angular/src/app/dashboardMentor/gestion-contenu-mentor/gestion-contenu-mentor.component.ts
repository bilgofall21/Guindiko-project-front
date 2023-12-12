import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { User } from 'src/app/models/User';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-contenu-mentor',
  templateUrl: './gestion-contenu-mentor.component.html',
  styleUrls: ['./gestion-contenu-mentor.component.css']
})
export class GestionContenuMentorComponent {

  listeArticles!: any;
  listeUsers: any;
  titre:string="";
  contenu:string="";
  image:string="";
  domaine:string="";

   // Attribut pour la pagination
   articlesParPage = 3; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle

    article :any={
    // id: '',
    titre: '',
    domaine: '',
    contenu: '',
    image: '',
  }


  constructor(
    private articleService: ArticleService,
    private http : HttpClient,
    private route: ActivatedRoute,
    private userService : UserService){}

  ngOnInit(): void {

    this.getArticles();
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }

    // Sweetalert
    showAlert(title:any, text:any, icon:any){
      Swal.fire({
        title:title,
        text:text,
        icon:icon,
        timer: 3000
      });
    }
  
    // Méthode pour vider les champs
      viderChapms(){
        this.titre = "",
        this.contenu = "",
        this.image = "",
        this.domaine = ""
      }

        // Méthode pour récupérer les données
   getArticles(): void {
    this.articleService.getArticles().subscribe(
      (data: Article[]) => {
        this.listeArticles = data;
        console.log("Voici les articles", this.listeArticles);
      },
      (error) => {
        console.error('Erreur lors de la récupération des articles', error);
      }
    );
  }
  // Méthode pour ajouter un domaine
  addArticle(){
    this.articleService.ajoutArticle(this.mapToArticle()).subscribe((data: any) =>{
      this.getArticles();
      this.showAlert("Félicitation","Domaine ajouté avec succes","success")
      this.viderChapms()
    })
  }

  mapToArticle(): Article {
    // Crée une nouvelle instance de Domaine en utilisant l'instance existante
    const article: any = this.article;
    article.titre = this.titre;
    article.contenu = this.contenu;
    article.image = this.image;
    article.domaine = this.domaine;

    console.log(article);
    return this.article;
  }
  getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    return this.listeArticles.slice(indexDebut, indexFin);
  }
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this.listeArticles.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.listeArticles.length / this.articlesParPage);
  }
 
}




// addDomaine(){
//   this.domaineService.ajoutDomaine(this.mapToDomaine()).subscribe((data: any) =>{
//   })
//   this.showAlert("Félicitation","Domaine ajouté avec succes","success")
//   this.viderChapms()
// }





