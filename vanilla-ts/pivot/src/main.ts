/**
 * RevoGrid Pivot starter (Vanilla TS)
 *
 * Required dependencies:
 *   @revolist/revogrid
 *   @revolist/pivot
 *   @revolist/revogrid-pro
 */

import { defineCustomElements } from '@revolist/revogrid/loader';
import { PivotPlugin, type PivotConfig } from '@revolist/pivot';
import { commonAggregators } from '@revolist/revogrid-pro';
import '@revolist/pivot/styles.css';

defineCustomElements();

const source = [
  { region: 'North', product: 'Laptop', sales: 1200, quantity: 10 },
  { region: 'North', product: 'Phone',  sales: 800,  quantity: 20 },
  { region: 'South', product: 'Laptop', sales: 950,  quantity: 8  },
  { region: 'South', product: 'Phone',  sales: 1100, quantity: 25 },
  { region: 'East',  product: 'Laptop', sales: 700,  quantity: 6  },
  { region: 'East',  product: 'Phone',  sales: 600,  quantity: 15 },
];

const pivotConfig: PivotConfig = {
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
};

const grid = document.createElement('revo-grid') as HTMLRevoGridElement;
grid.theme = 'material';
grid.resize = true;
grid.readonly = true;
grid.plugins = [PivotPlugin];
grid.pivot = pivotConfig;

grid.addEventListener('pivot-config-update', (e: Event) => {
  const updated = (e as CustomEvent<PivotConfig>).detail;
  grid.pivot = updated;
});

document.querySelector('#app')?.appendChild(grid);
grid.source = source;
