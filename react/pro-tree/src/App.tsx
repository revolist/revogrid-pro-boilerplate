import React, { useRef, useMemo } from 'react';
import { RevoGrid } from '@revolist/react-datagrid';
import {
  TreeDataPlugin,
  TREE_EXPAND_ALL_EVENT,
  TREE_COLLAPSE_ALL_EVENT,
} from '@revolist/revogrid-pro';
import '@revolist/revogrid-pro/dist/revogrid-pro.css';

const App: React.FC = () => {
  const gridRef = useRef<HTMLRevoGridElement>(null);

  const source = useMemo(() => [
    { id: 1, parentId: null, name: 'Engineering', department: 'Division' },
    { id: 2, parentId: 1,    name: 'Frontend',    department: 'Team' },
    { id: 3, parentId: 2,    name: 'Alice',       department: 'Engineer' },
    { id: 4, parentId: 2,    name: 'Bob',         department: 'Engineer' },
    { id: 5, parentId: 1,    name: 'Backend',     department: 'Team' },
    { id: 6, parentId: 5,    name: 'Carol',       department: 'Engineer' },
  ], []);

  const columns = useMemo(() => [
    { name: 'Name', prop: 'name', size: 260, tree: true },
    { name: 'Department', prop: 'department', size: 160 },
  ], []);

  const plugins = useMemo(() => [TreeDataPlugin], []);

  const additionalData = useMemo(() => ({
    tree: {
      idField: 'id',
      parentIdField: 'parentId',
      rootParentId: null,
      expandAll: true,
    },
  }), []);

  const expandAll = () => {
    gridRef.current?.dispatchEvent(new CustomEvent(TREE_EXPAND_ALL_EVENT));
  };

  const collapseAll = () => {
    gridRef.current?.dispatchEvent(new CustomEvent(TREE_COLLAPSE_ALL_EVENT));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', gap: '8px', padding: '8px' }}>
        <button onClick={expandAll}>Expand All</button>
        <button onClick={collapseAll}>Collapse All</button>
      </div>
      <RevoGrid
        ref={gridRef}
        style={{ flex: 1 }}
        theme="material"
        resize={true}
        columns={columns}
        source={source}
        plugins={plugins}
        additionalData={additionalData}
      />
    </div>
  );
};

export default App;
