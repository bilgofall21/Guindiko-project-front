import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }

  // Fonction sweet alert
  verifInfos(title: any, text: any, icon: any){
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    })
  }

  // Fonction pour bloquer un utilisateur
  blockUser(){
    this.verifInfos("Félicitation","Utilisateur bloqué avec succès","success")
  }

}
