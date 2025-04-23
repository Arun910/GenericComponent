import { Component } from '@angular/core';
import { GenericPtableComponent } from '../generic-ptable/generic-ptable.component';
import { TableData } from '../models/table-data.model';

@Component({
  selector: 'app-parent2',
  standalone: true,
  imports: [GenericPtableComponent],
  templateUrl: './parent2.component.html',
  styleUrl: './parent2.component.scss'
})
export class Parent2Component {

   tableData: TableData[] = []; // Array of table data
    tableColumns: any;
    ngOnInit(): void {
      this.tableData = this.generateElectronicProductsData(100); // Generate 100 rows of product data
      this.tableColumns = [
        { field: 'id', header: 'ID' },
        { field: 'brand', header: 'Brand' },
        { field: 'model', header: 'Model' },
        { field: 'category', header: 'Category' },
        { field: 'price', header: 'Price ($)' },
        { field: 'stock', header: 'Stock' },
        { field: 'rating', header: 'Rating' },
        { field: 'warranty', header: 'Warranty' },
        { field: 'releaseDate', header: 'Release Date' },
        { field: 'color', header: 'Color' },
        { field: 'weight', header: 'Weight' },
        { field: 'dimensions', header: 'Dimensions' },
        { field: 'batteryLife', header: 'Battery Life' },
        { field: 'connectivity', header: 'Connectivity' },
        { field: 'operatingSystem', header: 'Operating System' },
        { field: 'processor', header: 'Processor' },
        { field: 'gpu', header: 'GPU' },
        { field: 'description', header: 'Description' }
      ];
      
    }
    generateElectronicProductsData(count: number): TableData[] {
      const brands = ['Apple', 'Samsung', 'Sony', 'Dell', 'HP', 'LG', 'Asus', 'Lenovo', 'Microsoft', 'OnePlus'];
      const categories = ['Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Smartwatch', 'Monitor', 'Gaming Console', 'TV'];
      const models = ['Pro Max', 'Ultra', 'X200', 'Elite', 'ZenBook', 'ThinkPad', 'Surface', 'Note', 'Vision', 'Omni'];
      const colors = ['Black', 'White', 'Silver', 'Blue', 'Red', 'Gray'];
      const processors = ['Intel i7', 'Intel i9', 'AMD Ryzen 7', 'AMD Ryzen 9', 'Apple M1', 'Apple M2'];
      const gpus = ['NVIDIA RTX 3060', 'NVIDIA RTX 4080', 'AMD Radeon RX 6800', 'Intel Iris Xe'];
      const batteryLife = ['6 Hours', '10 Hours', '12 Hours', '15 Hours', '20 Hours'];
      const connectivity = ['Wi-Fi, Bluetooth', '5G, Wi-Fi', 'Wi-Fi only', 'Ethernet, Wi-Fi'];
      const os = ['Windows 11', 'MacOS', 'Linux', 'Android', 'iOS'];
      const descriptions = [
        'High performance with latest technology.',
        'Sleek design and powerful performance.',
        'Best for gaming and multitasking.',
        'Lightweight and long battery life.',
        'Crystal clear display and immersive experience.',
      ];
    
      return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        brand: brands[Math.floor(Math.random() * brands.length)],
        model: models[Math.floor(Math.random() * models.length)],
        category: categories[Math.floor(Math.random() * categories.length)],
        price: (Math.random() * 2000 + 100).toFixed(2), // Price between $100 and $2100
        stock: Math.floor(Math.random() * 50) + 1, // Stock between 1 and 50
        rating: (Math.random() * 5).toFixed(1), // Rating between 0.0 and 5.0
        warranty: `${Math.floor(Math.random() * 3) + 1} Years`, // 1 to 3 years warranty
        releaseDate: new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0], // Random past date
        color: colors[Math.floor(Math.random() * colors.length)],
        weight: `${(Math.random() * 5 + 1).toFixed(1)} kg`, // Weight between 1kg and 6kg
        dimensions: `${(Math.random() * 40 + 10).toFixed(1)} x ${(Math.random() * 30 + 5).toFixed(1)} x ${(Math.random() * 5 + 1).toFixed(1)} cm`,
        batteryLife: batteryLife[Math.floor(Math.random() * batteryLife.length)],
        connectivity: connectivity[Math.floor(Math.random() * connectivity.length)],
        operatingSystem: os[Math.floor(Math.random() * os.length)],
        processor: processors[Math.floor(Math.random() * processors.length)],
        gpu: gpus[Math.floor(Math.random() * gpus.length)],
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
      }));
    }
    

}
