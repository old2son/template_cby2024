import { error } from '@sveltejs/kit';

export function load() {
	throw error(403, '列表缺少ID');
}
