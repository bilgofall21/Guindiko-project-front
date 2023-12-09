import { Component } from '@angular/core';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css']
})
export class NosServicesComponent {
  // searchTerm: string = '';

  // filtrerParNom = (item: any) => {
  //   // Ajoutez ici la logique de filtrage par nom
  //   // Vous pouvez utiliser this.searchTerm pour accéder à la valeur de recherche
  //   return item.nom.toLowerCase().includes(this.searchTerm.toLowerCase());
  // };
  filterValue = '';
  filteredElement: any;

  // ... Autres propriétés et méthodes

  // Méthode de recherche automatique
//   onSearch() {
//     // La recherche se fait selon le nom ou le prénom
//     this.filteredElement = this.tabDomaine.filter(
//       (elt: any) =>
//         (elt?.domaine.toLowerCase().includes(this.filterValue.toLowerCase())) ||
//         elt?.prenomContact.toLowerCase().includes(this.filterValue.toLowerCase())
//     );
// }

}
