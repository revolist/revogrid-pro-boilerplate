import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RevoGrid } from '@revolist/angular-datagrid';
import { PivotPlugin, type PivotConfig } from '@revolist/pivot';
import { commonAggregators } from '@revolist/revogrid-pro';

const INITIAL_PIVOT: PivotConfig = {
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RevoGrid],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="height: 100vh">
      <revo-grid
        #grid
        style="height: 100%"
        theme="material"
        [resize]="true"
        [readonly]="true"
        [source]="source"
        [plugins]="plugins"
        (pivot-config-update)="onConfigUpdate($event)"
      ></revo-grid>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('grid', { read: ElementRef }) private gridRef!: ElementRef<HTMLRevoGridElement>;

  readonly source = [
    { region: 'North', product: 'Laptop', sales: 1200, quantity: 10 },
    { region: 'North', product: 'Phone',  sales: 800,  quantity: 20 },
    { region: 'South', product: 'Laptop', sales: 950,  quantity: 8  },
    { region: 'South', product: 'Phone',  sales: 1100, quantity: 25 },
    { region: 'East',  product: 'Laptop', sales: 700,  quantity: 6  },
    { region: 'East',  product: 'Phone',  sales: 600,  quantity: 15 },
  ];

  readonly plugins = [PivotPlugin];

  readonly pivotConfig = signal<PivotConfig>({ ...INITIAL_PIVOT });

  ngAfterViewInit() {
    this.setPivot(this.pivotConfig());
  }

  onConfigUpdate(event: CustomEvent<PivotConfig>) {
    this.pivotConfig.set(event.detail);
    this.setPivot(event.detail);
  }

  private setPivot(config: PivotConfig) {
    (this.gridRef.nativeElement as HTMLRevoGridElement & { pivot?: PivotConfig }).pivot = config;
  }
}
