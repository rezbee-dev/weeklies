<div class="testimonial-container">
    <div class="testimonial pt-serif-regular-italic ">
        <div style="font-size: 48px; letter-spacing: -7px;">• • •</div>
        <blockquote>
            <p>
                “Absolutely 100% the best restaurant in Birmingham,
                Chinese or otherwise. The owner is so incredibly sweet, and she
                always remembers you when you return! She even knows my order (and
                my mom's order) by heart, and always remembers - By S Gilbreath”
            </p>
        </blockquote>
        <blockquote>
            <p>
                “I've been coming here for years. 
                The lady who runs it is always so friendly no matter how busy they are. 
                I love their delicious vegetarian dishes they may even have vegan options, 
                but I'm not sure. Service is quick, and I love the location. - Posted by Y Lane ”
            </p>
        </blockquote>
        <blockquote style="margin-bottom: 1em;">
            <p>
                “My favorite Chinese Restaurant... Ever. 
                Love the food, love the people, love the atmosphere. 
                Been patronizing them for decades. Posted by J Newton ”
            </p>
        </blockquote>
        <div class="testimonial__separator"></div>
        <button class="testimonial__button pt-sans-regular" onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
    </div>
</div>

<style>
    .testimonial-container {
        min-height: 400px;
        width: 100%;
        background: url("./wall.png") 50% 50% repeat fixed;
        padding: 6% 0;
    }

    .testimonial {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        line-height: 20px;
        width: 50%;
        margin: auto;
        color: white;
        text-align: center;
        line-height: 24px;
        font-size: 20px;
    }

    .testimonial__separator {
        width: 133px;
        height: 5px;
        background: white;
        margin: auto;
    }

    .testimonial__button {
        border: none;
        background: none;
        color: white;
        font-size: 14px;
        margin-top: 2em;
    }

    .testimonial__button:hover {
        cursor: pointer;
    }

    .testimonial__button::before {
        content: url("./top.png");
        margin-right: 0.5em;
        vertical-align: top;
    }

    @media only screen and (min-width: 1200px) {
        .testimonial {
            width: 35%;
        }
    }
</style>