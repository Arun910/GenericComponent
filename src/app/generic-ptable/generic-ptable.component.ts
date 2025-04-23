import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableData } from '../models/table-data.model';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-generic-ptable',
  standalone: true,
  imports: [TableModule, NgFor, NgIf, CommonModule, FormsModule, TableModule, InputTextModule],
  templateUrl: './generic-ptable.component.html',
  styleUrl: './generic-ptable.component.scss'
})
export class GenericPtableComponent implements OnChanges {
  
  @Input() columns: any[] = [];  // Column definitions
  @Input() tableData: any[] = [];

  filteredTableData: TableData[] = []; // ✅ Ensure it's initialized properly
  filters: { [key: string]: string } = {}; // Object to hold filter values

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData'] && changes['tableData'].currentValue) {
      this.filteredTableData = [...this.tableData]; // ✅ Set initial data when tableData changes
    }
  }

  applyFilter() {
    this.filteredTableData = this.tableData.filter(item => {
      return Object.keys(this.filters).every(key => 
        !this.filters[key] || 
        item[key]?.toString().toLowerCase().includes(this.filters[key].toLowerCase())
      );
    });
  }
}
