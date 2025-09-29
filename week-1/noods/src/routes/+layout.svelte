<script lang="ts">
	import favicon from '/favicon.ico';
	import "../styles.css"

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<nav class="navbar">
	<ul>
		<li>About</li>
		<li>Menu</li>
		<li>Contact</li>
	</ul>
</nav>

{@render children?.()}

<style>
	.navbar {
		position: sticky;
		top: 0;
		text-align: center;
		background-color: rgb(251 191 36);
		padding: 2em 0;
	}

	.navbar ul {
		list-style-type: none;
	}

	.navbar ul li {
		display: inline-block;
		padding: 0 1em;
	}

</style>