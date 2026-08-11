/**
 * RevoGrid Pivot starter (Svelte)
 *
 * Required dependencies:
 *   @revolist/svelte-datagrid
 *   @revolist/pivot
 *   @revolist/revogrid-pro
 */

import App from './App.svelte';
import { mount } from 'svelte';

const app = mount(App, { target: document.getElementById('app')! });

export default app;
