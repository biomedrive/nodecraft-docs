// Prefixes the site's base path onto root-relative links in Markdown/MDX.
//
// Pages link to each other as `/guides/themes/`. On GitHub Pages the site lives
// under `/<repo>/`, and Markdown links are not base-aware, so without this they
// would point at the domain root and 404. Relative links (`../themes/`) avoid
// that but break whenever the address is opened without a trailing slash.
export default function rehypeBaseLinks({ base = '/' } = {}) {
	const prefix = base.replace(/\/$/, '');
	if (!prefix) return () => {};

	const fix = (value) =>
		typeof value === 'string' &&
		value.startsWith('/') &&
		!value.startsWith('//') &&
		value !== prefix &&
		!value.startsWith(prefix + '/')
			? prefix + value
			: value;

	const walk = (node) => {
		if (node.type === 'element' && node.properties) {
			if ('href' in node.properties) node.properties.href = fix(node.properties.href);
			if ('src' in node.properties) node.properties.src = fix(node.properties.src);
		}
		if (node.children) node.children.forEach(walk);
	};

	return (tree) => walk(tree);
}
