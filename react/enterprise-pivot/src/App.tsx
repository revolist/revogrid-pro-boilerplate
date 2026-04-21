import React, { useMemo } from 'react';
import { RevoGrid } from '@revolist/react-datagrid';
import { PivotPlugin, type PivotConfig } from '@revolist/revogrid-enterprise';
import { commonAggregators } from '@revolist/revogrid-pro';
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css';

const App: React.FC = () => {
  const source = useMemo(() => [
    { region: 'North', product: 'Laptop', sales: 1200, quantity: 10 },
    { region: 'North', product: 'Phone',  sales: 800,  quantity: 20 },
    { region: 'South', product: 'Laptop', sales: 950,  quantity: 8  },
    { region: 'South', product: 'Phone',  sales: 1100, quantity: 25 },
    { region: 'East',  product: 'Laptop', sales: 700,  quantity: 6  },
    { region: 'East',  product: 'Phone',  sales: 600,  quantity: 15 },
  ], []);

  const pivotConfig: PivotConfig = useMemo(() => ({
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
  }), []);

  const plugins = useMemo(() => [PivotPlugin], []);

  const additionalData = useMemo(() => ({ pivot: pivotConfig }), [pivotConfig]);

  return (
    <div style={{  height: '100vh' }}>
      <RevoGrid
        style={{ flex: 1 }}
        theme="material"
        resize={true}
        readonly={true}
        source={source}
        plugins={plugins}
        additionalData={additionalData}
        onPivot-config-update={(e: CustomEvent<PivotConfig>) => {
            // Note: In a real app, you might want to sync this back to state if needed
            console.log('Pivot config updated:', e.detail);
        }}
      />
    </div>
  );
};

export default App;
