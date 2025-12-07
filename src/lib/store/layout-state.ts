import { writable } from 'svelte/store';

export type Layout = 'GRID' | 'LIST';

export const layoutState = writable<Layout>('GRID');

export function toggleLayout() {
	layoutState.update((v) => (v === 'GRID' ? 'LIST' : 'GRID'));
}

