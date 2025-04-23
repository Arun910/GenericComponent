import { Component } from '@angular/core';

import { GenericPtableComponent } from '../generic-ptable/generic-ptable.component';
import { Parent1Data } from '../models/parent1-data.model';

@Component({
  selector: 'app-parent1',
  standalone: true,
  imports: [GenericPtableComponent],
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.scss'
})
export class Parent1Component {

   tableData: Parent1Data[] = []; // Array of table data
      tableColumns: any;
      ngOnInit(): void {
        this.tableData = this.generateMockData(100); // Generate 100 rows of product data
    this.tableColumns = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Product Name' },
      { field: 'category', header: 'Category' },
      { field: 'brand', header: 'Brand' },
      { field: 'price', header: 'Price' }
    ];
      }
    
      generateMockData(count: number): Parent1Data[] {
        const products = [
          'T-Shirt', 'Jeans', 'Dress', 'Jacket', 'Sneakers', 
          'Hat', 'Skirt', 'Blouse', 'Sweater', 'Shorts'
        ];
        const categories = ['Men', 'Women', 'Kids', 'Unisex'];
        const brands = ['Nike', 'Adidas', 'Zara', 'H&M', 'Uniqlo', 'Levi\'s', 'Gap'];
    
        return Array.from({ length: count }, (_, i) => ({
          id: i + 1,
          name: products[Math.floor(Math.random() * products.length)],
          category: categories[Math.floor(Math.random() * categories.length)],
          brand: brands[Math.floor(Math.random() * brands.length)],
          price: '$' + (Math.random() * (2000 - 50) + 50).toFixed(2)  // Price between $50 and $2000
        }));
      }
}
