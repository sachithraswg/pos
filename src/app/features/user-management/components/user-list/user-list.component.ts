import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class UserListComponent {
  private router = inject(Router);

  users: User[] = [
    {
      id: '1',
      name: 'Dr. Emily Carter',
      username: 'emily.carter',
      email: 'emily.carter-pawpals.com',
      role: 'Admin',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Dr. David Lee',
      username: 'david.lee',
      email: 'david.lee-pawpals.com',
      role: 'Veterinarian',
      status: 'Active'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      username: 'sarah.johnson',
      email: 'sarah.johnson-pawpals.com',
      role: 'Receptionist',
      status: 'Active'
    },
    {
      id: '4',
      name: 'Mark Thompson',
      username: 'mark.thompson',
      email: 'mark.thompson-pawpals.com',
      role: 'Technician',
      status: 'Inactive'
    },
    {
      id: '5',
      name: 'Dr. Olivia Brown',
      username: 'olivia.brown',
      email: 'olivia.brown-pawpals.com',
      role: 'Veterinarian',
      status: 'Active'
    }
  ];

  onViewUserDetails(userId: string): void {
    this.router.navigate(['/users', userId]);
  }

  onCreateUser(): void {
    this.router.navigate(['/users/new']);
  }

  getStatusClass(status: string): string {
    return status.toLowerCase() === 'active' ? 'status-active' : 'status-inactive';
  }

  trackByUserId(index: number, user: User): string {
    return user.id;
  }
}
