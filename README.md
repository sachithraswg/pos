# PetPal POS - Angular Application

A modern Point of Sale system for veterinary clinics built with Angular 20.

## 🚀 Features

- **Dashboard**: Real-time metrics and overview
- **Animal Management**: Patient records and history
- **Billing**: Invoice generation and payment processing
- **Owner Management**: Client information and communication
- **Treatment Tracking**: Medical procedures and follow-ups
- **Catalog Management**: Inventory and product catalog
- **Reporting**: Analytics and business insights
- **User Management**: Role-based access control
- **Settings**: System configuration and preferences

## 🛠️ Technology Stack

- **Framework**: Angular 20 (Standalone Components)
- **Language**: TypeScript 5.8
- **Styling**: SCSS
- **Testing**: Jasmine & Karma
- **Linting**: ESLint with Angular rules
- **Formatting**: Prettier
- **Build Tool**: Angular CLI

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pos
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
```bash
   npm start
```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📜 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/                 # Singleton services, guards, interceptors
│   ├── features/             # Feature modules (lazy-loaded)
│   │   ├── dashboard/
│   │   ├── animal/
│   │   ├── billing/
│   │   └── ...
│   ├── models/              # TypeScript interfaces and types
│   ├── services/            # Shared services
│   ├── shared/              # Shared components, directives, pipes
│   └── types/               # Global type definitions
├── environments/            # Environment configurations
└── styles.scss             # Global styles
```

## 🎯 Angular Best Practices Implemented

### 1. **Standalone Components**
- All components use the new standalone approach
- Reduced bundle size and improved tree-shaking
- Better dependency management

### 2. **Feature-based Architecture**
- Lazy-loaded feature modules
- Clear separation of concerns
- Scalable folder structure

### 3. **Type Safety**
- Strict TypeScript configuration
- Comprehensive interface definitions
- Proper type checking

### 4. **Error Handling**
- Centralized error handling in services
- User-friendly error messages
- Graceful fallbacks

### 5. **Performance Optimization**
- OnPush change detection strategy
- Signal-based state management
- Lazy loading for all routes

### 6. **Code Quality**
- ESLint with Angular-specific rules
- Prettier for consistent formatting
- Comprehensive testing setup

## 🔧 Development Guidelines

### Component Structure
```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ExampleComponent {
  // Use signals for reactive state
  public data = signal<Data[]>([]);
  public loading = signal(false);
  
  // Use inject() for dependency injection
  private service = inject(ExampleService);
  
  // Implement OnDestroy for cleanup
  ngOnDestroy(): void {
    // Cleanup subscriptions
  }
}
```

### Service Pattern
```typescript
@Injectable({ providedIn: 'root' })
export class ExampleService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiUrl}/data`)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong'));
  }
}
```

### Model Definitions
```typescript
export interface Example {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum ExampleStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}
```

## 🧪 Testing

### Unit Tests
- Each component has a corresponding `.spec.ts` file
- Services are thoroughly tested
- Use Angular testing utilities

### Running Tests
```bash
npm test                    # Run all tests
npm test -- --watch        # Run tests in watch mode
npm test -- --coverage     # Generate coverage report
```

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

### Environment Configuration
- `environment.ts` - Development settings
- `environment.prod.ts` - Production settings

## 🤝 Contributing

1. Follow the established code style
2. Write tests for new features
3. Update documentation as needed
4. Use conventional commit messages

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please contact the development team.
