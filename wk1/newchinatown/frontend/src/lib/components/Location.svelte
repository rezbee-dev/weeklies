<div class="location-container">
    <div class="location pt-sans-regular">
        <div class="location__info">
            <h1 class="pt-serif-bold">New China Town</h1>
            <div>
                <p>1020 20th St S</p>
                <p>Birmingham, AL 35205</p>
                <p>Phone: (205) 251-2373</p>
                <a href="http://newchinatown.net">http://newchinatown.net</a>
            </div>
            <h1 class="pt-serif-bold">Store Hours</h1>
            <div class="location__hours">
                <div>
                    <p>Monday</p>
                    <p>11:00 AM - 10:00 PM</p>
                </div>
                <div>
                    <p>Tuesday</p>
                    <p>11:00 AM - 10:00 PM</p>
                </div>
                <div>
                    <p>Wednesday</p>
                    <p>11:00 AM - 10:00 PM</p>
                </div>
                <div>
                    <p>Thursday</p>
                    <p>11:00 AM - 10:00 PM</p>
                </div>
                <div>
                    <p>Friday</p>
                    <p>11:00 AM - 11:00 PM</p>
                </div>
                <div>
                    <p>Saturday</p>
                    <p>11:00 AM - 10:00 PM</p>
                </div>
                <div>
                    <p>Sunday</p>
                    <p>Closed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                </div>
            </div>
        </div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6654.0149037740475!2d-86.79941502424535!3d33.50118324662674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891bc380a46317%3A0xc5bbf2f825f7d54!2sNew%20China%20Town!5e0!3m2!1sen!2sus!4v1763420271016!5m2!1sen!2sus" 
            width="600" height="450" style="border:0;"  loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" title="restaurant location">
        </iframe>
    </div>
</div>

<style>

    .location-container {
        width: 100%;
        padding: 6% 0;
    }

    .location {
        display: flex;
        justify-content: space-between;
        gap: 4rem;
        width: 75%;
        margin: auto;
        line-height: 20px;
    }

    .location iframe {
        flex-grow: 2;
    }

    .location__info {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .location__info h1 {
        color: #544;
        font-size: 36px;
    }

    .location__info a {
        color: #ac0000;
        text-decoration: none;
    }

    .location__info a:hover,a:focus {
        color: #600000;
        text-decoration: underline
    }

    .location__hours div {
        display: flex;
        justify-content: space-between;
    }

    @media only screen and (max-width: 979px) {
        .location {
            flex-direction: column;
            width: 90%;
        }

        .location__hours div {
            width: 50%;
        }

        iframe {
            width: 95%;
            margin: auto;
        }
    }
</style>