import { writable } from 'svelte/store';

export const selectedCatagory = writable<string>('all');

export function selectCatagory(catagory:string) {
	selectedCatagory.set(catagory);
}

