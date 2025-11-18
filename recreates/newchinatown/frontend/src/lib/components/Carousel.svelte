<script>
    import bg from '$lib/assets/bg.jpg'
    import food from '$lib/assets/food.jpg'
</script>

<div class="carousel" aria-label="Pictures of meals">
    <div class="carousel__img"><img src={bg} alt="restaurant pictures #1"></div>
    <div class="carousel__img"><img src={food} alt="restaurant pictures #2"></div>
</div>

<style>
    .carousel {
        width: 100%;
        display: flex;
        position: relative;
        overflow-x: scroll;
        overflow: hidden;
        scroll-snap-type: x mandatory;
        anchor-name: --my-carousel;
        scroll-behavior: smooth;
    }

    .carousel::scroll-button(*) {
        border: 0;
        font-size: 2rem;
        background: #ac0000;
        color: white;
        opacity: 1;
        cursor: pointer;
        position: absolute;
        position-anchor: --my-carousel;
        top: anchor(50%);
        transform: translateY(-50%);
    }

    .carousel::scroll-button(*):hover,
    .carousel::scroll-button(*):focus {
        opacity: 1;
    }

    .carousel::scroll-button(*):active {
        translate: 1px 1px;
    }

    .carousel::scroll-button(*):disabled {
        opacity: 0.2;
        cursor: unset;
    }

    .carousel::scroll-button(left) {
        right: calc(anchor(left) - 70px);
        content: '';
        background-image: url("./slider-nav.png");
        width: 36px;
        height: 36px;
        background-size: cover;
        border-radius: 6px;
    }

    .carousel::scroll-button(right) {
        left: calc(anchor(right) - 70px);
        content: '';
        background-image: url("./slider-nav.png");
        width: 36px;
        height: 36px;
        background-size: cover;
        background-position: 35px 0;
        border-radius: 6px;
    }

    .carousel__img {
        min-width: 100%;
        min-height: 100%;
        flex: 0 0 100%;
        scroll-snap-align: center;
    }
</style>