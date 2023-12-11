import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, catchError, switchMap, tap } from 'rxjs';
import { Domaine } from 'src/app/models/Domaine';
import { DomaineService } from 'src/app/services/domaine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-contenu',
  templateUrl: './gestion-contenu.component.html',
  styleUrls: ['./gestion-contenu.component.css']
})
export class GestionContenuComponent {

  listeDomaines!: any;
  nom:string="";
  descrip:string="";
  domaine :Domaine={
    _id: '',
    nomDomaine: '',
    image: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    createdBy: '',
    updatedBy: ''
  }

    // Attribut pour la pagination
    articlesParPage = 3; // Nombre d'articles par page
    pageActuelle = 1; // Page actuelle

    // Attribut pour la recherche
    filterValue='';
    filteredElement:any;

    constructor(
      private domaineService: DomaineService,
      private http : HttpClient,
      private route: ActivatedRoute,){}

    ngOnInit(): void {
      const script = document.createElement('script');
      script.src = '../../../assets/js/script.js';
      document.body.appendChild(script);    
      
      // pour récupérer les domaies stockés
      this.getDomaines();
  }

  // Sweetalert
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
      this.descrip = ""
    }

  // Méthode pour récupérer les données
   getDomaines(): void {
    this.domaineService.getDomaines().subscribe(
      (data: Domaine[]) => {
        this.listeDomaines = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des domaines', error);
      }
    );
  }

  // Méthode pour ajouter un domaine
  addDomaine(){
    this.domaineService.ajoutDomaine(this.mapToDomaine()).subscribe((data: any) =>{
    })
    this.showAlert("Félicitation","Domaine ajouté avec succes","success")
    this.viderChapms()
  }

  mapToDomaine(): Domaine {
    // Crée une nouvelle instance de Domaine en utilisant l'instance existante
    const domaine: Domaine = this.domaine;
    domaine.nomDomaine = this.nom;
    domaine.description = this.descrip;    
    return this.domaine;
  }

   // Méthode pour supprimer un domaine
   deleteDomaine(id: string) {
    this.domaineService.delete(id).subscribe(() => {
      // Mettez à jour la liste des domaines après la suppression
      this.getDomaines();
      this.showAlert("Succès", "Domaine supprimé avec succès", "success");
    }, error => {
      console.error('Erreur lors de la suppression du domaine', error);
      this.showAlert("Erreur", "Une erreur s'est produite lors de la suppression du domaine", "error");
    });
  }
    // Variable pour stocker le domaine cliqué
    currentDomaine:any

    // Méthode pour charger les infos du contact à modifier
    chargerInfosDomaine(paramDomaine:any){
      this.currentDomaine =paramDomaine ;
      this.nom=paramDomaine.nomDomaine;
      this.descrip = paramDomaine.description;;
    }

    // Méthode pour modifier
   // Méthode pour modifier un domaine spécifique
   modifierDomaine(id: string) {
    const domaineToEdit = this.listeDomaines.find((domaine: Domaine) => domaine._id === id);
  
    if (domaineToEdit) {
      domaineToEdit.nomDomaine = this.nom;
      domaineToEdit.description = this.descrip;
  
      this.domaineService.edit(id, domaineToEdit).subscribe(
        () => {
          this.showAlert("Contact modifié", "", "success");
          this.getDomaines(); // Mettre à jour la liste des domaines après modification
        },
        (error) => {
          console.error('Erreur lors de la modification du domaine', error);
          this.showAlert("Erreur", "Une erreur s'est produite lors de la modification du domaine", "error");
        }
      );
    } else {
      console.error('Domaine non trouvé pour la modification');
    }
  }
  
      getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    return this.listeDomaines.slice(indexDebut, indexFin);
  }
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this.listeDomaines.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.listeDomaines.length / this.articlesParPage);
  }

  // Méthode pour effectuer la recherche basée sur le nom (titre) du domaine
  onSearch() {
    if (this.filterValue.trim() !== '') {
      this.filteredElement = this.listeDomaines.filter(
        (elt: any) => elt?.nomDomaine.toLowerCase().includes(this.filterValue.toLowerCase())
      );
      // Mettre à jour la liste des domaines filtrés
      this.listeDomaines = this.filteredElement;
    } else {
      // Si la barre de recherche est vide, réinitialiser la liste des domaines à sa valeur initiale
      this.getDomaines();
    }
  }
  
}
