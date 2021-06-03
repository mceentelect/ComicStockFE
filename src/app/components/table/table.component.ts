import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rows: Supplier[];
  temp: Supplier[];
  loadingIndicator = true;
  reorderable = true;
  selected: any[] = [];

  columns = [{ prop: 'name' }, { name: 'City' }, { name: 'Reference', sortable: false }];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor(private supplierService: SupplierService) {

  }

  ngOnInit(): void {
    this.getSuppliers();
  }

  public getSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(
      (response: Supplier[]) => {
        this.temp = response;
        this.rows = response;
      },
      (error) => {
        console.error(error);
        alert("An error occured...");
      }
    );
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d: any) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect(event: any) {
    //go to edit page
    console.log('Event: select', event, this.selected);
  }

  onActivate(event: any) {
    //HIGHLIGHT THE row
    console.log('Event: activate', event);
  }
}
