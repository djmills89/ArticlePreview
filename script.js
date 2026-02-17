const shareButton = document.querySelector('.share-button')
const profileCard = document.getElementById('profileCard')
const cardShare = document.getElementById('cardShare')
const desktopQuery = window.matchMedia('(min-width: 712px)')
const cardFooter = document.querySelector('.card__footer')

shareButton.addEventListener('click', (e) => {
    if (desktopQuery.matches) {
        const rect = e.currentTarget.getBoundingClientRect()
        const cardRect = cardShare.getBoundingClientRect()
        const left = rect.left + rect.width / 2 - cardRect.width / 2
        const top = rect.top - cardRect.height - 10
        cardShare.style.left = `${left - 8}px`
        cardShare.style.top = `${top - 20}px`
        cardShare.classList.toggle('active')
    }
    else {
        profileCard.classList.toggle('hidden')
        cardShare.classList.toggle('hidden')
        cardFooter.classList.toggle('share__styles')
        console.log(profileCard.classList)
    }

})