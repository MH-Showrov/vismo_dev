
const dash = document.querySelector('.section-li1')
const dashSection =document.querySelector('.inner1section');

const links = document.querySelector('.section-li2')
const linksSection = document.querySelector('.Links')

const payments = document.querySelector('.section-li3')
const paymentsSection = document.querySelector('.paymentsSection')


const Support = document.querySelector('.section-li4')
const supportSection = document.querySelector('.supportSection')


const Profile = document.querySelector('.section-li5')
const profileSection = document.querySelector('.profile-section')


    dash.classList.add("section-li1-coler")
    paymentsSection.classList.add("paymentsSection-diaplay")


    links.onclick= ()=>{
        dash.classList.remove("section-li1-coler")
        linksSection.classList.remove("link-display")
        dashSection.classList.add("inner1section-display")
        links.classList.add("section-li1-coler")
        payments.classList.remove("section-li1-coler")
        paymentsSection.classList.add("paymentsSection-diaplay")

        Support.classList.remove("section-li1-coler")
    supportSection.classList.add("paymentsSection-diaplay")
    Profile.classList.remove("section-li1-coler")
    profileSection.classList.add("paymentsSection-diaplay")
        
    }

    dash.onclick= ()=>{
        dash.classList.add("section-li1-coler")
        linksSection.classList.add("link-display")
        dashSection.classList.remove("inner1section-display")
        links.classList.remove("section-li1-coler")
        payments.classList.remove("section-li1-coler")
        paymentsSection.classList.add("paymentsSection-diaplay")

        Support.classList.remove("section-li1-coler")
    supportSection.classList.add("paymentsSection-diaplay")
    Profile.classList.remove("section-li1-coler")
    profileSection.classList.add("paymentsSection-diaplay")
    }
    payments.onclick=()=>{
        dash.classList.remove("section-li1-coler")
        links.classList.remove("section-li1-coler")
        dashSection.classList.add("inner1section-display")
        payments.classList.add("section-li1-coler")
        linksSection.classList.add("link-display")
        paymentsSection.classList.remove("paymentsSection-diaplay")

        Support.classList.remove("section-li1-coler")
    supportSection.classList.add("paymentsSection-diaplay")
    Profile.classList.remove("section-li1-coler")
    profileSection.classList.add("paymentsSection-diaplay")
    }

    Support.onclick=()=>{
        dash.classList.remove("section-li1-coler")
        links.classList.remove("section-li1-coler")
        payments.classList.remove("section-li1-coler")

        dashSection.classList.add("inner1section-display")
        Support.classList.add("section-li1-coler")
        supportSection.classList.remove("paymentsSection-diaplay")
        linksSection.classList.add("link-display")
        paymentsSection.classList.add("paymentsSection-diaplay")
        Profile.classList.remove("section-li1-coler")
        profileSection.classList.add("paymentsSection-diaplay")
    }


    
    Profile.onclick=()=>{
        dash.classList.remove("section-li1-coler")
        links.classList.remove("section-li1-coler")
        payments.classList.remove("section-li1-coler")

        dashSection.classList.add("inner1section-display")
        Support.classList.remove("section-li1-coler")
        supportSection.classList.add("paymentsSection-diaplay")
        linksSection.classList.add("link-display")
        paymentsSection.classList.add("paymentsSection-diaplay")

        Profile.classList.add("section-li1-coler")
        profileSection.classList.remove("paymentsSection-diaplay")
    }


    










