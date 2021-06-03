import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { AboutComponent } from './pages/about/about.component';
import { TableComponent } from './components/table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SupplierComponent } from './components/supplier/supplier.component';

const appRoutes: Routes = [{
  path: 'suppliers',
  component: SuppliersComponent
},
{
  path: 'about',
  component: AboutComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SuppliersComponent,
    AboutComponent,
    TableComponent,
    SupplierComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgxDatatableModule.forRoot(
      {
        messages: {
          emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
          totalMessage: 'total', // Footer total message
          selectedMessage: 'selected' // Footer selected message
        }
      }
    )

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
