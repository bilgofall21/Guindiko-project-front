import { Component } from '@angular/core';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent {
detailArticles : any[]= [
  {
    id :1,
    titreArticle: "Les Hackeurs deviennent incontrolable",
    Domaine : " Cyber Securité",
    auteurArticle : "Astou diouf",
    dateArticle : "08/12/2023",
    description : " Ces hackers poursuivent des objectifs politiques ou sociaux en utilisant des techniques de piratage. Leur motivation est souvent liée à des convictions idéologiques,",
    imageArticle : "https://img.freepik.com/photos-premium/garantir-cybersecurite-ere-numerique_810293-66520.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
  },
]
}
