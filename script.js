const shareButtons = document.querySelectorAll('.icon-container')
const profileCard = document.getElementById('profileCard')
const toastCard = document.getElementById('toastCard')

shareButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        profileCard.classList.toggle('hidden')
        toastCard.classList.toggle('hidden')
    })
})