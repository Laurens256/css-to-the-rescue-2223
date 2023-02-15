const ranges: NodeListOf<HTMLInputElement> =
	document.querySelectorAll('input[type=range]')!;
const head = document.querySelector('head')!;

ranges.forEach((range) => {
	range.addEventListener('input', () => {
		range.setAttribute('data-value', range.value);

		if (head) {
			head.setAttribute(`data-value-${range.id}`, range.value);
		}
	});
	range.dispatchEvent(new Event('input'));
});