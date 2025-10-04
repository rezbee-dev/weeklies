<!-- Src: https://www.youtube.com/watch?v=9HcxHDS2w1s (Web Dev Simplified) -->
<script lang="ts">
    import CrabrangoonImg from "$lib/assets/crabrangoon.jpg"
    import ShrimprollImg from "$lib/assets/shrimproll.jpg"
    import PhoImg from "$lib/assets/hero-img.png"
    import VermImg from "$lib/assets/vermicelli.jpg"

    let carouselImgs: HTMLUListElement;

    function onclick(direction: string){
        const children = carouselImgs.children
        // convert to items (HTMLCollection) to array
        const childrenArr = [...children]

        // get index of active
        let active = carouselImgs.querySelector("[data-active]")

        if(!active){
            console.log("Error, [data-active] not found!")
            return
        }

        let indexActive = childrenArr.indexOf(active)
        

        if(direction === "left"){
            if(indexActive === 0) {
                indexActive = childrenArr.length-1
            } else {
                indexActive -= 1
            }
        } else {
            if(indexActive === childrenArr.length-1) {
                indexActive = 0
            } else {
                indexActive += 1
            }
        }

        active.removeAttribute("data-active")
        // set new active image
        active = childrenArr[indexActive]
        active.setAttribute("data-active", "")
    }
</script>

<div class="carousel" aria-label="Pictures of meals">
    <button onclick={() => onclick("left")} class="carousel-btn-left" >&#10092;</button>
    <button onclick={() => onclick("right")} class="carousel-btn-right">&#10093;</button>
    <ul bind:this={carouselImgs} class="carousel-imgs">
        <li class="carousel-img" data-active><img src={CrabrangoonImg} alt="Crab Rangoon"></li>
        <li class="carousel-img"><img src={ShrimprollImg} alt="Shrimp Roll"></li>
        <li class="carousel-img"><img src={PhoImg} alt="Pho"></li>
        <li class="carousel-img"><img src={VermImg} alt="Vermicelli"></li>
    </ul>
</div>

<style>
    .carousel {
        height: 500px;
        width: 80%;
        max-width: 1000px;
        margin: 6rem auto;
        position: relative;
    }

    .carousel button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 5;
        font-size: 1.5em;
        font-weight: bold;
        color: rgb(250,250,250);
        border: 1px solid rgba(250,250,250, 0.6);
        padding: 0.2em 0.6em;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .carousel button:hover,
    .carousel button:focus {
        cursor: pointer;
        color: rgb(255,255,255);
        background-color: rgba(50, 50, 50, 1);
        border: 1px solid rgba(250,250,250, 1);

    }

    .carousel-btn-left {
        left: 2em;
    }

    .carousel-btn-right {
        right: 2em;
    }

    .carousel-imgs {
        margin: 0;
        padding: 0;
        list-style: none;
        width: 100%;
        height: 100%;
        position: relative;
    }

    .carousel-img {
        width: 100%;
        height: 100%;
        inset: 0;
        position: absolute;
        opacity: 0;
    }

    .carousel-img[data-active] {
        opacity: 1;
    }

    .carousel-img img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        border-radius: 1em;
    }

</style>