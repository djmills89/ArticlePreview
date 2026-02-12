const shareButton = document.querySelector('.share-button')
const profileCard = document.getElementById('profileCard')
const cardShare = document.getElementById('cardShare')

shareButton.addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect()
    const cardRect = cardShare.getBoundingClientRect()
    const left = rect.left + rect.width / 2 - cardRect.width / 2
    const top = rect.top - cardRect.height - 10
    cardShare.style.left = `${left - 8}px`
    cardShare.style.top = `${top - 20}px`
    cardShare.classList.toggle('active')
})
