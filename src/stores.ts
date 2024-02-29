import { writable } from 'svelte/store';
import { type Tag, type Category } from './types';
export const categories = writable<Category[] | []>([]);
export const tags = writable<Tag[] | []>([]);
