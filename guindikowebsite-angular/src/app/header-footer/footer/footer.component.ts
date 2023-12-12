import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  soumettreFormulaire() {
    // Obtenez la valeur de l'input email
    const emailInput: HTMLInputElement | null = document.getElementById('mail') as HTMLInputElement;

    if (emailInput) {
      const email: string = emailInput.value;

      // Validez l'e-mail (vous pouvez ajouter une validation plus robuste si nécessaire)
      if (email.trim() === '' || !this.estEmailValide(email)) {
        // Affichez une alerte d'e-mail invalide avec SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Veuillez entrer une adresse e-mail valide.',
        });
      } else {
        // Affichez une alerte de succès avec SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Inscription réussie à la newsletter!',
        });

        // Vous pouvez soumettre le formulaire ici si nécessaire
        // document.getElementById('myForm').submit();
      }
    }
  }

  estEmailValide(email: string): boolean {
    // Ajoutez votre logique de validation d'e-mail ici
    // Par exemple, vous pouvez utiliser une expression régulière
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

  }
}
