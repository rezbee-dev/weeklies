<script>
    import bg from '$lib/assets/bg.jpg'
    import food from '$lib/assets/food.jpg'

    /*** @type {HTMLDivElement} */
    let img1;
    /*** @type {HTMLDivElement} */
    let img2;

    let currentImg = $state("img1")

     /*** @param {string} dir */
    function onclick(dir) {
        if (dir == "right") {
                if(currentImg === "img1") {
                    img2.style.transform = ""
                    img1.style.transform = `translateX(-100%)`
                    currentImg = "img2"
                    console.log("Moving to the right!")
                } 
            } else {
                if(currentImg === "img2"){
                    img1.style.transform = ""
                    img2.style.transform = "translateX(100%)"
                    currentImg = "img1"
                    console.log("Moving to the left!")
                }
            }
    }
</script>

<!-- src: https://dev.to/shubhamtiwari909/auto-sliding-carousel-with-javascript-5h47 -->
<div class="carousel" aria-label="Pictures of meals">
    <div class="carousel__img" bind:this={img1}><img src={bg} alt="bg"></div>
    <div class="carousel__img" bind:this={img2}><img src={food} alt="bg"></div>
    <div class="carousel__img"><img src={bg} alt="bg"></div>
    <div class="carousel__img"><img src={food} alt="bg"></div>
    <div class="carousel__img"><img src={bg} alt="bg"></div>
    <div class="carousel__img"><img src={food} alt="bg"></div>
    <!-- <button class="btn btn__left" onclick={() => onclick("left")}>Prev</button> -->
    <!-- <button class="btn btn__right" onclick={() => onclick("right")}>Next</button> -->
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
        /* border: 1px solid black; */
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
        /* content: "◄"; */
        right: calc(anchor(left) - 70px);
        content: '';
        background-image: url("./slider-nav.png");
        width: 36px;
        height: 36px;
        background-size: cover;
        /* background-position: -35px 0; */
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
        /* transition: all 0.5s linear; */
        scroll-snap-align: center;
    }

    
    .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .btn__left {
        left: 2em;
    }

    .btn__right {
        right: 2em;
    }
</style>