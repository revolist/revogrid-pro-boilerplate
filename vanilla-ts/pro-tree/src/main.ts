/**
 * RevoGrid Pro — Tree Plugin starter (Vanilla TS)
 *
 * Required dependencies:
 *   @revolist/revogrid
 *   @revolist/revogrid-pro
 */

import { defineCustomElements } from '@revolist/revogrid/loader';
import { TreeDataPlugin, TREE_EXPAND_ALL_EVENT, TREE_COLLAPSE_ALL_EVENT } from '@revolist/revogrid-pro';
import '@revolist/revogrid-pro/dist/revogrid-pro.css';

defineCustomElements();

const source = [
  { id: 1, parentId: null, name: 'Engineering', department: 'Division' },
  { id: 2, parentId: 1,    name: 'Frontend',    department: 'Team' },
  { id: 3, parentId: 2,    name: 'Alice',       department: 'Engineer' },
  { id: 4, parentId: 2,    name: 'Bob',         department: 'Engineer' },
  { id: 5, parentId: 1,    name: 'Backend',     department: 'Team' },
  { id: 6, parentId: 5,    name: 'Carol',       department: 'Engineer' },
];

const grid = document.createElement('revo-grid') as HTMLRevoGridElement;
grid.resize = true;
grid.theme = 'material';

grid.source = source;

grid.columns = [
  { name: 'Name', prop: 'name', size: 260, tree: true },
  { name: 'Department', prop: 'department', size: 160 },
];

grid.plugins = [TreeDataPlugin];

grid.additionalData = {
  tree: {
    idField: 'id',
    parentIdField: 'parentId',
    rootParentId: null,
    expandAll: true,
  },
};

document.querySelector('#app')?.appendChild(grid);

// Toolbar buttons
const toolbar = document.querySelector('#toolbar')!;

const expandBtn = document.createElement('button');
expandBtn.textContent = 'Expand All';
expandBtn.onclick = () => grid.dispatchEvent(new CustomEvent(TREE_EXPAND_ALL_EVENT));

const collapseBtn = document.createElement('button');
collapseBtn.textContent = 'Collapse All';
collapseBtn.onclick = () => grid.dispatchEvent(new CustomEvent(TREE_COLLAPSE_ALL_EVENT));

toolbar.appendChild(expandBtn);
toolbar.appendChild(collapseBtn);
