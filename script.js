// Script for navigation bar
const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close = document.getElementById("close")

bar.addEventListener("click", function(){
    nav.classList.add("active")
})

close.addEventListener("click", function(){
    nav.classList.remove("active")
})

//for rating shop items
// Select all product containers
const products = document.querySelectorAll('.pro')

// Iterate over each product container
products.forEach(product => {
    // Select the stars within the current product container
    const stars = product.querySelectorAll('.star i')

    // Add click event listeners to each star within the current product
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            // Loop through each star and set the color based on the clicked star
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.style.color = "rgb(243, 181, 25)"
                } else {
                    s.style.color = "black"
                }
            })
        })
    })
})
