import { error } from '@sveltejs/kit';

export function load() {
	throw error(403, '药品缺少ID');
}
