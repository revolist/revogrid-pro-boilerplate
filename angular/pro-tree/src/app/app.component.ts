import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { RevoGrid } from '@revolist/angular-datagrid';
import {
  TreeDataPlugin,
  TREE_EXPAND_ALL_EVENT,
  TREE_COLLAPSE_ALL_EVENT,
} from '@revolist/revogrid-pro';
import '@revolist/revogrid-pro/dist/revogrid-pro.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RevoGrid],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="display: flex; flex-direction: column; height: 100vh">
      <div style="display: flex; gap: 8px; padding: 8px">
        <button (click)="expandAll()">Expand All</button>
        <button (click)="collapseAll()">Collapse All</button>
      </div>
      <revo-grid
        #grid
        style="flex: 1"
        theme="material"
        [resize]="true"
        [columns]="columns"
        [source]="source"
        [plugins]="plugins"
        [additionalData]="additionalData"
      ></revo-grid>
    </div>
  `,
})
export class AppComponent {
  @ViewChild('grid', { read: ElementRef }) gridRef!: ElementRef;

  source = [
    { id: 1, parentId: null, name: 'Engineering', department: 'Division' },
    { id: 2, parentId: 1,    name: 'Frontend',    department: 'Team' },
    { id: 3, parentId: 2,    name: 'Alice',       department: 'Engineer' },
    { id: 4, parentId: 2,    name: 'Bob',         department: 'Engineer' },
    { id: 5, parentId: 1,    name: 'Backend',     department: 'Team' },
    { id: 6, parentId: 5,    name: 'Carol',       department: 'Engineer' },
  ];

  columns = [
    { name: 'Name', prop: 'name', size: 260, tree: true },
    { name: 'Department', prop: 'department', size: 160 },
  ];

  plugins = [TreeDataPlugin];

  additionalData = {
    tree: {
      idField: 'id',
      parentIdField: 'parentId',
      rootParentId: null,
      expandAll: true,
    },
  };

  expandAll() {
    this.gridRef.nativeElement.dispatchEvent(new CustomEvent(TREE_EXPAND_ALL_EVENT));
  }

  collapseAll() {
    this.gridRef.nativeElement.dispatchEvent(new CustomEvent(TREE_COLLAPSE_ALL_EVENT));
  }
}
