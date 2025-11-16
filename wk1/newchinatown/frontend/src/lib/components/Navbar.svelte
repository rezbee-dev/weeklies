<script>
    import logo from "$lib/assets/logo.png"
</script>

<nav class="pt-sans-bold">
    <div class="navbar">
        <div class="navbar__group">
            <button>HOME</button>
            <button>ORDER ONLINE</button>
        </div>
        <div>
            <img src={logo} alt="Website Logo">
        </div>
        <div class="navbar__group">
            <button>MENU</button>
            <button>LOCATION</button>
        </div>
    </div>
</nav>

<style>
    nav {
        position: sticky;
        width: 100vw;
        top: 0;
        background-image: url("./brick.jpg");
    }

    .navbar {
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
    }

    .navbar__group button {
        background: none;
        border: 0;
        color: white;
    }

    .navbar__group > :first-child {
        margin-right: 1.5rem;
    }
</style>