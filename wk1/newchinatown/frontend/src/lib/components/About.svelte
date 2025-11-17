<script>
    import qr from "$lib/assets/qrcode.png"
    import logo2 from "$lib/assets/logo_2.png"
</script>

<div class="about-container">
    <div class="about pt-sans-regular">
        <div class="about__one">
            <button class="pt-sans-bold">ORDER ONLINE</button>
            <div class="pt-sans-bold" style="text-align: center; text-transform: uppercase;">
                <p>NEW CHINA TOWN</p>
                <p>1020 20th St S</p>
                <p>Birmingham, AL 35205</p>
            </div>
            <div>
                <p class="pt-sans-regular-italic" style="text-align: center;">
                    "Welcome to <span class="pt-sans-bold" style="text-transform: uppercase;">New China Town.</span>" located at Birmingham, AL. 
                    This is how you are greeted when you come into our welcoming, caring, high-energy restaurant, 
                    and we promise to do whatever it takes to serve high-quality Chinese food to every guest consistently. 
                    Welcome! We are glad you are here.
                </p>
            </div>
            <div class="about__one__separator">
            </div>
        </div>
        <div>
            <p>
                Menu contain all the classic and popular dishes and we only using high quality ingredients, and we can cook no M.S.G. 
                Most requests can be satisfied and surely we welcome you comment and suggestions. 
                We appreciate your business. And we have added deliver and online order for customer convenience.
            </p>
            <h3>Open 6 Days a Week</h3>
            <p>Our store opens 6 days a week. Check contact / location to see the details.</p>
            <h3>Order Your Foods Online</h3>
            <p>For takeout, you can order your food online. The benefit is you have enough time to customize your order without errors in communication.</p>
        </div>
        <div>
            <h3>Scan & Order</h3>
            <img src={qr} alt="QR Code">
            <p>https://www.newchinatown.net/</p>
            <img src={logo2} alt="Logo">
        </div>
    </div>
</div>

<style>

    .about-container {
        width: 100vw;
        background-image: url("./paper.png");
        padding: 6% 0;
    }

    .about {
        display: flex;
        gap: 1.5em;
        margin: 6rem;
        line-height: 20px;
    }

    .about__one {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
    }

    .about__one button {
        background-color: #ac0000;
        color: white;
        border: none;
        border-radius: 3px;;
        font-size: 22px;
        padding: 8px 12px;
        margin-bottom: 12px;
        line-height: 26px;
    }

    .about__one__separator {
        width: 133px;
        height: 5px;
        background: #ac0000;
        margin: 30px auto;
    }
</style>