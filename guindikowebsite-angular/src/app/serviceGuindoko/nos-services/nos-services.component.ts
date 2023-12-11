import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css']
})
export class NosServicesComponent implements OnInit {

  domaines : any []=[
    {
      id :1,
      titreDomaine: "Informatique",
      description : " Le mentorat en informatique, c’est bien plus qu’une profession, c’est une passerelle vers l’excellence numérique. En tant que mentor en informatique, vous avez le pouvoir de guider les esprits avides de connaissances à travers le paysage complexe de la technologie, en partageant votre expertise ....",
      imageDomaine : "../../../assets/fullProject/imgServive/informatique.png"
    },
    {
      id :2,
      titreDomaine: "Sciences",
      description : " Le mentorat en sciences est une aventure passionnante vers la découverte,  l’apprentis-  sage et l’innovation. En tant que mentor en sciences, vous avez le privilège de g     uider des esprits curieux avides de comprendre les mystères de l’univers, en partageant votre expertise pour les inspirer à explorer,.... ",
      imageDomaine : "../../../assets/fullProject/imgServive/science.png"
    },
    {
      id :3,
      titreDomaine: "Gestion et Management",

      description : "Le mentorat en gestion est une profession dédiée à façonner les futurs leaders et à renforcer les compétences en gestion. En tant que mentor en gestion, vous partagez votre expérience et vos connaissances pour guider les aspirants gestionnaires dans la compréhension des défis complexe .......",
      imageDomaine: "../../../assets/fullProject/imgServive/gestman.png"
    },
    {
      id :4,
      titreDomaine: "Art",

      description : " Le mentorat en art est une forme d’accompagnement artistique qui transcende les techniques et les médiums. En tant que mentor en art, vous avez le pouvoir de guider des artistes en herbe, des créateurs et des passionnés d’art dans leur voyage de découverte artistique, ....",
      imageDomaine: "../../../assets/fullProject/imgServive/art.png"
    },
    {
      id :5,
      titreDomaine: "Technique",

      description : "Le mentorat en technique est une opportunité de partager une expertise technique précieuse avec ceux qui cherchent à maîtriser les aspects pratiques et les compétences essentielles de divers domaines techniques. En tant que mentor en technique, vous guidez les apprenants, les étudiants ....",
      imageDomaine: "../../../assets/fullProject/imgServive/technique.png"
    },
    {
      id :6,
      titreDomaine: "Hôtellerie",
      description : " Le mentorat en  hôtellerie vous ouvre les portes d'une aventure exceptionnelle, taillée sur mesure pour façonner votre chemin vers l'excellence professionnelle. C'est une immersion personnalisée dans le monde dynamique de l'accueil et de la gestion hôtelière,....",
      imageDomaine: "../../../assets/fullProject/imgServive/hotelerie.png"
    }

  ];
  filterValue: string = '';
element: any;
originalDomaines: any[] = [];
// filterValue: string = '';

ngOnInit(): void {

  this.originalDomaines = [...this.domaines];
}


// onSearch() {
//   // Implement your search logic here
//   console.log('Search triggered with value:', this.filterValue);
//   // Example: Filter the domaines array based on the title
//   this.domaines = this.domaines.filter(element =>
//     element.titreDomaine.toLowerCase().includes(this.filterValue.toLowerCase())
//   );
// }
onSearch() {
  // If the search input is empty, reset the domaines array
  if (this.filterValue.trim() === '') {
    this.domaines = [...this.originalDomaines];
  } else {
    // Filter the domaines array based on the title
    this.domaines = this.originalDomaines.filter(element =>
      element.titreDomaine.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }
}

}
