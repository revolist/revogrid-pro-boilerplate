<template>
  <div style="display: flex; flex-direction: column; height: 100vh">
    <div style="display: flex; gap: 8px; padding: 8px">
      <button @click="expandAll">Expand All</button>
      <button @click="collapseAll">Collapse All</button>
    </div>
    <RevoGrid
      ref="gridRef"
      style="flex: 1"
      theme="material"
      resize
      :columns="columns"
      :source="source"
      :plugins="plugins"
      :additionalData="additionalData"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import RevoGrid from '@revolist/vue3-datagrid';
import {
  TreeDataPlugin,
  TREE_EXPAND_ALL_EVENT,
  TREE_COLLAPSE_ALL_EVENT,
} from '@revolist/revogrid-pro';
import '@revolist/revogrid-pro/styles.css';

const gridRef = ref<{ $el: HTMLRevoGridElement } | null>(null);

const source = shallowRef([
  { id: 1, parentId: null, name: 'Engineering', department: 'Division' },
  { id: 2, parentId: 1,    name: 'Frontend',    department: 'Team' },
  { id: 3, parentId: 2,    name: 'Alice',       department: 'Engineer' },
  { id: 4, parentId: 2,    name: 'Bob',         department: 'Engineer' },
  { id: 5, parentId: 1,    name: 'Backend',     department: 'Team' },
  { id: 6, parentId: 5,    name: 'Carol',       department: 'Engineer' },
]);

const columns = shallowRef([
  { name: 'Name', prop: 'name', size: 260, tree: true },
  { name: 'Department', prop: 'department', size: 160 },
]);

const plugins = shallowRef([TreeDataPlugin]);

const additionalData = shallowRef({
  tree: {
    idField: 'id',
    parentIdField: 'parentId',
    rootParentId: null,
    expandAll: true,
  },
});

function expandAll() {
  gridRef.value?.$el.dispatchEvent(new CustomEvent(TREE_EXPAND_ALL_EVENT));
}

function collapseAll() {
  gridRef.value?.$el.dispatchEvent(new CustomEvent(TREE_COLLAPSE_ALL_EVENT));
}
</script>
