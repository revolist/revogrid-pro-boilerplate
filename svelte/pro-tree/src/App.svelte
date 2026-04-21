<script lang="ts">
  import { RevoGrid } from '@revolist/svelte-datagrid';
  import {
    TreeDataPlugin,
    TREE_EXPAND_ALL_EVENT,
    TREE_COLLAPSE_ALL_EVENT,
  } from '@revolist/revogrid-pro';
  import '@revolist/revogrid-pro/dist/revogrid-pro.css';

  let gridEl: HTMLRevoGridElement;

  const source = [
    { id: 1, parentId: null, name: 'Engineering', department: 'Division' },
    { id: 2, parentId: 1,    name: 'Frontend',    department: 'Team' },
    { id: 3, parentId: 2,    name: 'Alice',       department: 'Engineer' },
    { id: 4, parentId: 2,    name: 'Bob',         department: 'Engineer' },
    { id: 5, parentId: 1,    name: 'Backend',     department: 'Team' },
    { id: 6, parentId: 5,    name: 'Carol',       department: 'Engineer' },
  ];

  const columns = [
    { name: 'Name', prop: 'name', size: 260, tree: true },
    { name: 'Department', prop: 'department', size: 160 },
  ];

  const plugins = [TreeDataPlugin];

  const additionalData = {
    tree: {
      idField: 'id',
      parentIdField: 'parentId',
      rootParentId: null,
      expandAll: true,
    },
  };

  function expandAll() {
    gridEl?.dispatchEvent(new CustomEvent(TREE_EXPAND_ALL_EVENT));
  }

  function collapseAll() {
    gridEl?.dispatchEvent(new CustomEvent(TREE_COLLAPSE_ALL_EVENT));
  }
</script>

<div style="display: flex; flex-direction: column; height: 100vh">
  <div style="display: flex; gap: 8px; padding: 8px">
    <button on:click={expandAll}>Expand All</button>
    <button on:click={collapseAll}>Collapse All</button>
  </div>
  <RevoGrid
    bind:element={gridEl}
    style="flex: 1"
    theme="material"
    resize={true}
    {source}
    {columns}
    {plugins}
    {additionalData}
  />
</div>
