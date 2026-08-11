/**
 * RevoGrid Tree Plugin starter (Svelte)
 *
 * Required dependencies:
 *   @revolist/svelte-datagrid
 *   @revolist/revogrid-pro
 */

import App from './App.svelte';
import { mount } from 'svelte';

const app = mount(App, { target: document.getElementById('app')! });

export default app;
