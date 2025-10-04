<main class="hero">
    <div class="hero-img">
        <div class="hero-content">
            <h1>GOSHEN<br>NOODLES</h1>
            <h2>Discover the authentic taste of Vietnam.</h2>
        </div>
    </div>
</main>

<style>

    .hero {
        height: 100vh;
        color: #fff;
    }

    .hero-img {
        background-image: url("$lib/assets/hero-img.png");
        background-color: #cccccc;
        background-size: cover;
        background-position: center;
        height: 100%;
        position: relative;
    }

    .hero-img::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(71,71,71,.7);
        z-index: 1;
    }

    .hero-content {
        z-index: 2;
        position: relative;
        font-family: "Afacad", sans-serif;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hero-content h1 {
        font-weight: 100;
        font-size: 8rem;
        line-height: 1.1;
        text-align: center;
    }

    .hero-content h2 {
        font-weight: 100;
        font-size: 2em;
        text-align: center;
    }
</style>