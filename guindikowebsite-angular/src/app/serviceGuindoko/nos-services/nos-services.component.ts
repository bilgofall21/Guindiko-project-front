import { Component, OnInit } from '@angular/core';
import { Domaine } from 'src/app/models/Domaine';
import { DomaineService } from '../../services/domaine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css']
})
export class NosServicesComponent implements OnInit {
  domaines: Domaine[] = [];
  filterValue: string = '';
  originalDomaines: Domaine[] = [];
  errorMessage: string = "Ce domaine n'existe pas.";
  location: any;

  constructor(
    private domaineService: DomaineService,
    private router : Router,
    ) {}
  ngOnInit(): void {
    this.loadDomaines();
  }
    loadDomaines(): void {
    this.domaineService.getDomaines().subscribe(
      (domaines: Domaine[]) => {
        this.domaines = domaines;
        this.originalDomaines = [...this.domaines];
      },
      (error: any) => {
        console.error('Erreur lors du chargement des domaines depuis l\'API :', error);
      }
    );
  }
  onSearch() {
    if (this.filterValue.trim() === '') {
      this.domaines = [...this.originalDomaines];
    } else {
      this.domaines = this.originalDomaines.filter(element =>
        element.nomDomaine.toLowerCase().includes(this.filterValue.toLowerCase())
      );
    }
    if (this.domaines.length === 0) {
      this.errorMessage = "Ce domaine n'existe pas.";
    } else {
      this.errorMessage = '';
    }
  }
showMentors() {
  this.router.navigate(['/listes-mentor']);
  this.location.reload();
}
}
