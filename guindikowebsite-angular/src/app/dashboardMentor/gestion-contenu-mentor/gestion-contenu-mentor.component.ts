import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-contenu-mentor',
  templateUrl: './gestion-contenu-mentor.component.html',
  styleUrls: ['./gestion-contenu-mentor.component.css']
})
export class GestionContenuMentorComponent {
getArticlesPage(): any {
throw new Error('Method not implemented.');
}
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);

    this.getArticles ();
  }

  //  methode pour sweet alerte



  nom:string="";
  descrip:string="";
  domain : string = "";
  listeArticles! : any;
  article : Article ={
      _id: "",
      titre: "",
      domaine : "",
      contenu: "",
      image: "",
      nombreClique: 0,
      createdAt: "",
      updatedAt: "",
      createdBy: "",
      updatedBy: "",

  }

  showAlert(title:any, text:any, icon:any){
    Swal.fire({
      title:title,
      text:text,
      icon:icon
    })
  }

  // Méthode pour vider les champs
    // Methode pour vider les champs
    viderChapms(){
      this.nom = "",
      this.descrip = "",
      this.domain = ""
    }

  constructor(private articleService : ArticleService,
              private http : HttpClient,
              private route : ActivatedRoute
    ) {
  }


  getArticles () : void{
this.articleService.getAllArticles().subscribe((data:Article[])=>{
 this.listeArticles = data;
 console.log(data);

},

);
  }
// methode pour ajouter article
ajouterArticle () : void{
  this.articleService.addArticles(this.mapToArticle()).subscribe((data : any) =>{
  })
  this.showAlert("Félicitation","Article ajouté avec succes","success")
  this.viderChapms()
}

// creation d'une nouvelle instance de Article
  mapToArticle(): Article {
    const article: Article = this.article;
  article.titre = this.nom;
  article.contenu = this.descrip;
  article.domaine = this.domain;
  return this.article;
  }
}




// addDomaine(){
//   this.domaineService.ajoutDomaine(this.mapToDomaine()).subscribe((data: any) =>{
//   })
//   this.showAlert("Félicitation","Domaine ajouté avec succes","success")
//   this.viderChapms()
// }





