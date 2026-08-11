<script lang="ts">
  import { RevoGrid } from '@revolist/svelte-datagrid';
  import { PivotPlugin, type PivotConfig } from '@revolist/pivot';
  import { commonAggregators } from '@revolist/revogrid-pro';
  import { onMount } from 'svelte';
  import '@revolist/pivot/styles.css';

  const source = [
    { region: 'North', product: 'Laptop', sales: 1200, quantity: 10 },
    { region: 'North', product: 'Phone',  sales: 800,  quantity: 20 },
    { region: 'South', product: 'Laptop', sales: 950,  quantity: 8  },
    { region: 'South', product: 'Phone',  sales: 1100, quantity: 25 },
    { region: 'East',  product: 'Laptop', sales: 700,  quantity: 6  },
    { region: 'East',  product: 'Phone',  sales: 600,  quantity: 15 },
  ];

  const plugins = [PivotPlugin];
  let getWebComponent: (() => HTMLRevoGridElement) | undefined;

  let pivotConfig: PivotConfig = {
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

  onMount(() => {
    const grid = getWebComponent?.() as (HTMLRevoGridElement & { pivot?: PivotConfig }) | undefined;
    if (!grid) return;
    grid.pivot = pivotConfig;
    const onConfigUpdate = (event: Event) => {
      pivotConfig = (event as CustomEvent<PivotConfig>).detail;
      grid.pivot = pivotConfig;
    };
    grid.addEventListener('pivot-config-update', onConfigUpdate);
    return () => grid.removeEventListener('pivot-config-update', onConfigUpdate);
  });
</script>

<div style="height: 100vh">
  <RevoGrid
    bind:getWebComponent
    style="height: 100%"
    theme="material"
    resize={true}
    readonly={true}
    {source}
    {plugins}
  />
</div>
