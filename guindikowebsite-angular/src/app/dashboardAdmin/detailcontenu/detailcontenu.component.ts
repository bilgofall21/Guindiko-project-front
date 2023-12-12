import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomaineService } from 'src/app/services/domaine.service';
import { ActivatedRoute } from '@angular/router';
import { SousDomaineService } from 'src/app/services/sous-domaine.service';
import { Sousdomaine } from 'src/app/models/Sousdomaine';
import Swal from 'sweetalert2';
import { url } from 'src/app/services/api-url.service';

@Component({
  selector: 'app-detailcontenu',
  templateUrl: './detailcontenu.component.html',
  styleUrls: ['./detailcontenu.component.css']
})
export class DetailcontenuComponent implements OnInit{
  detailContenu:any;
  listeSousDomaines:any;
  
  nomSousD:string="";
  descripSousD:string="";
   // Déclaration de domaineId en tant que variable de classe
   domaineId: string = '';

  sousdomaine :Sousdomaine={
    id: '',
    nomSousDomaine: '',
    image: '',
    description: '',
    createdAt: '',
    estArchive: false,
    updatedAt: '',
    createdBy: '',
    updatedBy: ''
  }

  constructor(
    private domaineService: DomaineService,
    private sousdomaineService: SousDomaineService,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    const domaineId = this.route.snapshot.paramMap.get('id');
  
    if (domaineId) {
      this.domaineService.getById(domaineId).subscribe(
        (data) => {
          this.detailContenu = data;
          // Appeler getSousDomaines avec l'ID du domaine pour récupérer les sous-domaines spécifiques
          this.getSousDomaines(domaineId);
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails du domaine', error);
        }
      );
    }
  }

  // Méthode pour récupérer les sous-domaines spécifiques à un domaine
  getSousDomaines(domaineId: string): void {
    // console.log('ID du domaine:', domaineId);
    this.sousdomaineService.getSousDomaines(domaineId).subscribe(
      (data: Sousdomaine[]) => {
        this.listeSousDomaines = data;
        console.log(this.listeSousDomaines); // Vérifiez ici la structure de 'detailContenu'
      },
      (error) => {
        console.error('Erreur lors de la récupération des sous domaines', error);
      }
    );
  }

      // Sweetalert
  showAlert(title:any, text:any, icon:any){
    Swal.fire({
      title:title,
      text:text,
      icon:icon
    })
  }

  viderChapms(){
    this.nomSousD = "",
    this.descripSousD = ""
  }

  addSousDomaine() {
    // Utilisation de this.domaineId dans la méthode addSousDomaine()
    console.log('ID du domaine:', this.domaineId);
    // this.sousdomaineService.ajoutSousDomaine(this.mapToDomaine(), this.domaineId).subscribe((data: any) => {
      // this.showAlert("Félicitation", "Sous domaine ajouté avec succès", "success");
      // this.viderChapms();
      // console.log(this.domaineId);
      // console.log(this.sousdomaine);
    // });
  }
  mapToDomaine(): Sousdomaine {
    // Crée une nouvelle instance de Domaine en utilisant l'instance existante
    const sousdomaine: Sousdomaine = this.sousdomaine;
    sousdomaine.nomSousDomaine = this.nomSousD;
    sousdomaine.description = this.descripSousD;    
    return this.sousdomaine;
  }
}
