<script>
    import { goto } from "$app/navigation";
    import logo from "$lib/assets/logo.png"

    let mobileNav = $state("")
    
    /**
     * @type {HTMLSelectElement}
     */
    let mobileDropdown;

    function onchangeDropDown() {
        mobileNav = mobileDropdown.value
        goto(mobileNav)
    }
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
    <div class="navbar-mobile">
        <div>
            <img src={logo} alt="Website Logo">
        </div>
        <div>
            <select bind:this={mobileDropdown} class="dropdown" name="nav" id="nav" value={mobileNav} onchange={onchangeDropDown}>
                <!-- <option value=""></option> -->
                <option value="">Navigate to...</option>
                <option value="/">&nbsp;Home</option>
                <option value="#">&nbsp;Order Online</option>
                <option value="/menu">&nbsp;Menu</option>
                <option value="#">&nbsp;Location</option>
            </select>
        </div>
    </div>
</nav>

<style>
    nav {
        position: sticky;
        height: 72px;
        width: 100vw;
        top: 0;
        background-image: url("./brick.jpg");
        display: flex;
        justify-content: center;
    }

    .navbar-mobile {
        display: none;
    }

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
    }

    .navbar__group button {
        border: 0;
        padding: 11px 10px;
        font-size: 19px;
        color: white;
        background: none;
    }

    .navbar__group button:hover {
        cursor: pointer;
        background-color: #ac0000;
        border-radius: 6px;
    }

    .navbar__group > :first-child {
        margin-right: 1.5rem;
    }

    @media only screen and (max-width: 979px) {
        .navbar {
            display: none;
        }

        .navbar-mobile {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
        }

        .dropdown {
            appearance: none; 
            width: 196px;
            height: 34px;
            font-size: 16px;
            background-image: url('./select-arrow.png'); /* Or .png, .jpg */
            background-repeat: no-repeat;
            background-position: right 10px center; /* Adjust position as needed */
            background-size: 20px 20px; /* Adjust size as needed */
            padding-right: 30px; /* Make space for the custom arrow */
            padding-left: 14px;
            border-radius: 6px;
        }

        .dropdown:hover {
            cursor: pointer;
        }
    }
</style>