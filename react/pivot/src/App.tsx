import React, { useEffect, useMemo, useRef } from 'react';
import { RevoGrid } from '@revolist/react-datagrid';
import { PivotPlugin, type PivotConfig } from '@revolist/pivot';
import { commonAggregators } from '@revolist/revogrid-pro';
import '@revolist/pivot/styles.css';

const App: React.FC = () => {
  const source = useMemo(() => [
    { region: 'North', product: 'Laptop', sales: 1200, quantity: 10 },
    { region: 'North', product: 'Phone',  sales: 800,  quantity: 20 },
    { region: 'South', product: 'Laptop', sales: 950,  quantity: 8  },
    { region: 'South', product: 'Phone',  sales: 1100, quantity: 25 },
    { region: 'East',  product: 'Laptop', sales: 700,  quantity: 6  },
    { region: 'East',  product: 'Phone',  sales: 600,  quantity: 15 },
  ], []);

  const pivotConfig = useMemo<PivotConfig>(() => {
    const dimensions: PivotConfig['dimensions'] = [
      { prop: 'region',   sortable: true, filter: ['selection'] },
      { prop: 'product',  sortable: true },
      { prop: 'sales',    aggregators: { sum: commonAggregators.sum, avg: commonAggregators.avg } },
      { prop: 'quantity', aggregators: { sum: commonAggregators.sum } },
    ];
    return {
      dimensions,
      rows: ['region'],
      columns: ['product'],
      values: [
        { prop: 'sales',    aggregator: 'sum' },
        { prop: 'quantity', aggregator: 'sum' },
      ],
      hasConfigurator: true,
    };
  }, []);

  const plugins = useMemo(() => [PivotPlugin], []);
  const gridRef = useRef<HTMLRevoGridElement>(null);

  useEffect(() => {
    const grid = gridRef.current as (HTMLRevoGridElement & { pivot?: PivotConfig }) | null;
    if (!grid) return;
    grid.pivot = pivotConfig;
  }, [pivotConfig]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const onConfigUpdate = (event: Event) => {
      console.log('Pivot config updated:', (event as CustomEvent<PivotConfig>).detail);
    };
    grid.addEventListener('pivot-config-update', onConfigUpdate);
    return () => grid.removeEventListener('pivot-config-update', onConfigUpdate);
  }, []);

  return (
    <div style={{  height: '100vh' }}>
      <RevoGrid
        ref={gridRef}
        style={{ flex: 1 }}
        theme="material"
        resize={true}
        readonly={true}
        source={source}
        plugins={plugins}
      />
    </div>
  );
};

export default App;
