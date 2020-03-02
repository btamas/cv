<script>
	export let icon;
</script>

<style>
	svg {
		width: 1em;
		height: 1em;
		overflow: visible;
		display: inline-block;
	}
</style>

<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${icon.icon[0]} ${icon.icon[1]}`}>
	<path fill="currentColor" d={icon.icon[4]} />
</svg>
