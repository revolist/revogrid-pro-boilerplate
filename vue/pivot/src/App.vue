<template>
  <div style="height: 100vh">
    <RevoGrid
      style="height: 100%"
      theme="material"
      resize
      readonly
      :source="source"
      :plugins="plugins"
      :pivot.prop="pivotConfig"
      @pivot-config-update="onConfigUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import RevoGrid from '@revolist/vue3-datagrid';
import { PivotPlugin, type PivotConfig } from '@revolist/pivot';
import { commonAggregators } from '@revolist/revogrid-pro';
import '@revolist/pivot/styles.css';

const source = shallowRef([
  { region: 'North', product: 'Laptop', sales: 1200, quantity: 10 },
  { region: 'North', product: 'Phone',  sales: 800,  quantity: 20 },
  { region: 'South', product: 'Laptop', sales: 950,  quantity: 8  },
  { region: 'South', product: 'Phone',  sales: 1100, quantity: 25 },
  { region: 'East',  product: 'Laptop', sales: 700,  quantity: 6  },
  { region: 'East',  product: 'Phone',  sales: 600,  quantity: 15 },
]);

const plugins = shallowRef([PivotPlugin]);

const pivotConfig = shallowRef<PivotConfig>({
  dimensions: [
    { prop: 'region',   sortable: true, filter: ['selection'] },
    { prop: 'product',  sortable: true },
    { prop: 'sales',    aggregators: { sum: commonAggregators.sum, avg: commonAggregators.avg } },
    { prop: 'quantity', aggregators: { sum: commonAggregators.sum } },
  ],
  rows: ['region'],
  columns: ['product'],
  values: [
    { prop: 'sales',    aggregator: 'sum' },
    { prop: 'quantity', aggregator: 'sum' },
  ],
  hasConfigurator: true,
});

function onConfigUpdate(e: CustomEvent<PivotConfig>) {
  pivotConfig.value = e.detail;
}
</script>
