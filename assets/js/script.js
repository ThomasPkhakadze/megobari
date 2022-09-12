(function() {    
    // Testimonials Carousel
    const paginationWrapper = document.getElementById("pagination-wrapper");
    const testimonialsContainer = document.getElementById("testimonials-container");
    const slideWidth = 285;
    window.addEventListener('load', () => {
        let moveSlider = (event) => {
            const activePagination = document.getElementsByClassName('pagination active')[0]; 
            const targetPagination = event.target;
            activePagination.classList.remove('active');
            targetPagination.classList.add('active');
            // console.log(targetPaginationId, activePaginationId);
            if( targetPagination.id == activePagination.getAttribute('id')){
                return false;
            }else if(targetPagination.id > activePagination.getAttribute('id')){
                testimonialsContainer.scrollLeft += (targetPagination.id - activePagination.getAttribute('id')) * slideWidth;            
            }else{
                
                testimonialsContainer.scrollLeft -= (activePagination.getAttribute('id') - targetPagination.id ) * slideWidth;
            }
        };

        // Function to check if there is overflow
        let checkForOverflow = () => {
            let testimonialWrapperWidth = document.querySelector("#testimonials-wrapper").scrollWidth;
            let testimonialsContainerWidth = document.querySelector("#testimonials-container").scrollWidth;        
            let overflow = testimonialsContainerWidth - testimonialWrapperWidth; 
            return overflow;
        }
        let overflow = checkForOverflow();
        if(overflow > 0){
            const paginationQuantity = Math.ceil(overflow/slideWidth);
            for(let i = 1; i <= paginationQuantity + 1; i++){
                const pagination = document.createElement("div");
                pagination.setAttribute("id", i);
                pagination.classList.add("pagination");
                pagination.addEventListener("click", moveSlider);
                if(i == 1){
                    pagination.classList.add("active");
                }
                paginationWrapper.appendChild(pagination);
            }
            // console.log(Math.ceil(overflow/slideWidth))
        }         
        // console.log(checkForOverflow());        
        window.addEventListener('resize', () =>  {
            // console.log(checkForOverflow());        
        })
        // let paginations = document.getElementsByClassName("pagination");
        // for(let i = 0; i < paginations.length; i++){
        //     paginations[i].addEventListener("click", () => {

        //     })
        // }
    })
})()
