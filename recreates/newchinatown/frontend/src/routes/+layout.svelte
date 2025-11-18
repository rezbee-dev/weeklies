<script>
	import favicon from '$lib/assets/favicon.ico';
    import Navbar from '$lib/components/Navbar.svelte';
	import "../styles.css"

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

{@render children()}

