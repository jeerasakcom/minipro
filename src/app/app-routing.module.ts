import { PaymentComponent } from './pages/frontend/payment/payment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { AllProductsComponent } from './pages/frontend/all-products/all-products.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { InformationComponent } from './pages/frontend/information/information.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ReportsComponent } from './pages/backend/reports/reports.component';

const routes: Routes = [
  // Route สำหรับเรียกหน้า Frontend Layout
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'info',
        component: InformationComponent,
      },
      {
        path: 'product',
        component: AllProductsComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ]
  },
  // Route สำหรับเรียกหน้า Backend Layout
  {
    path: 'backend',
    component: BackendLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "stock",
        component: StockComponent,
      },
      {
        path: "report",
        component: ReportsComponent,
      },
    ]
  },
  // Route สำหรับเรียกหน้า Login/Register Layout
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
