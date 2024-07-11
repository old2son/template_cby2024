import { error } from '@sveltejs/kit';

export function load() {
	throw error(403, '缺少ID');
}
