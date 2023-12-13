import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-home',
  templateUrl: './article-home.component.html',
  styleUrls: ['./article-home.component.css']
})
export class ArticleHomeComponent implements OnInit {
  articles : any []=[
    {
      id :1,
      titreArticle: "L'IA nouveau moteur du numérique",
      Domaine : "Inteligence artificielle",
      auteurArticle : "Marie Laure Coly",
      dateArticle : "08/12/2023",
      description : "L'intelligence artificielle (IA) se réfère à la simulation de processus intelligents chez les machines, permettant à celles-ci d'effectu",
      imageArticle : "https://img.freepik.com/vecteurs-libre/illustration-concept-innovation_114360-5848.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
    },
    {
      id :2,
      titreArticle: "Les Hackeurs deviennent incontrolable",
      Domaine : " Cyber Securité",
      auteurArticle : "Astou diouf",
      dateArticle : "08/12/2023",
      description : " Ces hackers poursuivent des objectifs politiques ou sociaux en utilisant des techniques de piratage. Leur motivation est souvent liée à des convictions idéologiques,",
      imageArticle : "https://img.freepik.com/photos-premium/garantir-cybersecurite-ere-numerique_810293-66520.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
    },
    {
      id :1,
      titreArticle: "L'IA nouveau moteur du numérique",
      Domaine : "Inteligence artificielle",
      auteurArticle : "Marie Laure Coly",
      dateArticle : "08/12/2023",
      description : "L'intelligence artificielle (IA) se réfère à la simulation de processus intelligents chez les machines, permettant à celles-ci d'effectu",
      imageArticle : "https://img.freepik.com/vecteurs-libre/illustration-concept-innovation_114360-5848.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
    },
    {
      id :2,
      titreArticle: "Les Hackeurs deviennent incontrolable",
      Domaine : " Cyber Securité",
      auteurArticle : "Astou diouf",
      dateArticle : "08/12/2023",
      description : " Ces hackers poursuivent des objectifs politiques ou sociaux en utilisant des techniques de piratage. Leur motivation est souvent liée à des convictions idéologiques,",
      imageArticle : "https://img.freepik.com/vecteurs-libre/voler-concept-cyberattaque-donnees_23-2148535004.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
    }

  ]
  dataArticle : any;
  constructor(private articleService : ArticleService){}
  ngOnInit(): void {
    this.listesArticles();
  }
  // methode pour recuperer ts les articles de l'api
  listesArticles (){
    this.articleService.getAllArticles().subscribe((datanew : any)=>{
      console.log("datanew");
      console.warn(datanew);
      this.dataArticle = datanew;

    })
  }
  // methode pour ajouter un nouvel article
  ajouterNouvelArtcle (){

      // initialise les proprietes du nouveao article
    const nouvelArticle : Article ={
      id :"",
    titre :"",
    domaine :"",
    contenu :"",
    image :"",
    nombreClique :0,
    createdAt :"",
    updatedAt :"",
    createdBy :"",
    updatedBy :"",
    }
    this.articleService.ajoutArticle(nouvelArticle).subscribe((reponse) =>{
      this.listesArticles();
    })
  }



}
