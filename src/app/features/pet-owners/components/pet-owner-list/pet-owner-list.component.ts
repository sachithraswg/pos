import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface PetOwner {
  id: string;
  name: string;
  phone: string;
  email: string;
  numberOfAnimals: number;
}

@Component({
  selector: 'app-pet-owner-list',
  templateUrl: './pet-owner-list.component.html',
  styleUrls: ['./pet-owner-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PetOwnerListComponent {
  private router = inject(Router);

  petOwners: PetOwner[] = [
    {
      id: '1',
      name: 'Sophia Carter',
      phone: '(555) 123-4567',
      email: 'sophia.carter-email.com',
      numberOfAnimals: 2
    },
    {
      id: '2',
      name: 'Ethan Bennett',
      phone: '(555) 987-6543',
      email: 'ethan.bennett-email.com',
      numberOfAnimals: 1
    },
    {
      id: '3',
      name: 'Olivia Hayes',
      phone: '(555) 246-8013',
      email: 'olivia.hayes-email.com',
      numberOfAnimals: 3
    },
    {
      id: '4',
      name: 'Liam Foster',
      phone: '(555) 369-1470',
      email: 'liam.foster-email.com',
      numberOfAnimals: 1
    },
    {
      id: '5',
      name: 'Ava Morgan',
      phone: '(555) 789-0123',
      email: 'ava.morgan-email.com',
      numberOfAnimals: 2
    },
    {
      id: '6',
      name: 'Noah Parker',
      phone: '(555) 456-7890',
      email: 'noah.parker-email.com',
      numberOfAnimals: 1
    },
    {
      id: '7',
      name: 'Isabella Reed',
      phone: '(555) 654-3210',
      email: 'isabella.reed-email.com',
      numberOfAnimals: 2
    },
    {
      id: '8',
      name: 'Jackson Cole',
      phone: '(555) 111-2222',
      email: 'jackson.cole-email.com',
      numberOfAnimals: 1
    },
    {
      id: '9',
      name: 'Mia Brooks',
      phone: '(555) 333-4444',
      email: 'mia.brooks-email.com',
      numberOfAnimals: 3
    },
    {
      id: '10',
      name: 'Aiden Gray',
      phone: '(555) 555-6666',
      email: 'aiden.gray-email.com',
      numberOfAnimals: 1
    }
  ];

  onViewPetOwnerDetails(petOwnerId: string): void {
    this.router.navigate(['/pet-owners', petOwnerId]);
  }

  onCreatePetOwner(): void {
    this.router.navigate(['/pet-owners/new']);
  }

  trackByPetOwnerId(index: number, petOwner: PetOwner): string {
    return petOwner.id;
  }
}
