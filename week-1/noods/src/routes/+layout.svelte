<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import "../styles.css"

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
		padding: 1.5em 0;
		font-family: "Inter", sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		color: #fff;
	}

	.navbar ul {
		list-style-type: none;
		padding: 0;
	}

	.navbar ul li {
		display: inline-block;
		padding-right: 2.5em;
	}
/* 
	.navbar ul li:nth-child(n+1) {
		padding: 0 1.5em;
	} */

</style>