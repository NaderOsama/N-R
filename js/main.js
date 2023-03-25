// Slider 
$(window).on("load",function(){
      let slideIndex = $(`.slide.active`).index();
      let slideLen = $(`.slide`).length;

      function slideShow(){
            $(`.slide`).removeClass("active").eq(slideIndex).addClass("active");
            if(slideIndex == slideLen-1){
                  slideIndex = 0;
            }
            else{
                  slideIndex++;
            }
            setTimeout(slideShow,5000);
      }
      slideShow();
})

// toggle cards 

$(document).ready(function(){
      peopleFilter($(`.filter-btn.active`).attr("data-target"))
      $(`.filter-btn`).click(function(){
            if(!$(this).hasClass(`active`)){
                  peopleFilter($(this).attr("data-target"))
            }
      })
      function peopleFilter(target){
            $(".filter-btn").removeClass("active");
            $(".filter-btn[data-target='"+target+"']").addClass("active");
            $(".card").hide();
            $(".card[data-category='"+target+"']").fadeIn();

      }

      // gallery popup
      const wHeight =$(window).height();
      $(`.gallery-popup img`).css(`max-height`,wHeight + `px`)

      let itemIndex = 0 ;
      const totalGalleryItems = $(`.gallery-item`).length;
      $(`.gallery-item`).click(function(){
            itemIndex = $(this).index();
            $(`.gallery-popup`).addClass("open")
            $(`.gallery-popup .gp-img`).hide()
            gpSlideShow()

            console.log(itemIndex)
      })
      // Next Img 
      $(`.gp-cotrols .gp-next`).click(function(){
            if(itemIndex == totalGalleryItems-1){
                  itemIndex = 0;
            }
            else{
                  itemIndex++;
            }
            $(`.gallery-popup .gp-img`).fadeOut(function(){
                  gpSlideShow();
            });
      })

      // Prev Img 
      $(`.gp-cotrols .gp-prev`).click(function(){
            if(itemIndex == 0){
                  itemIndex = totalGalleryItems-1;
            }
            else{
                  itemIndex--;
            }
            $(`.gallery-popup .gp-img`).fadeOut(function(){
                  gpSlideShow();
            });
      })
      
      // Close Img 
      $(`.gallery-popup .gp-close`).click(function(){
            $(`.gallery-popup`).removeClass("open");

      })

      // hide gallery popup when clicked outside of container
      $(`.gallery-popup`).click(function(event){
            if($(event.target).hasClass("open")){
                  $(`.gallery-popup`).removeClass("open");
            }
            

      })

      function gpSlideShow(){
            const imgSrc = $(`.gallery-item`).eq(itemIndex).find("img").attr("data-large");
            console.log(imgSrc)
            $(`.gallery-popup .gp-img`).fadeIn().attr("src",imgSrc);
            $(`.gp-counter`).text(`${itemIndex+1} /${totalGalleryItems}`);
      }
      
      document.addEventListener("keydown" , function(e){
      if(e.keyCode == 39){
            if(itemIndex == totalGalleryItems-1){
                  itemIndex = 0;
            }
            else{
                  itemIndex++;
            }
            $(`.gallery-popup .gp-img`).fadeOut(function(){
                  gpSlideShow();
            });
      }
      else if (e.keyCode == 37){
            if(itemIndex == 0){
                  itemIndex = totalGalleryItems-1;
            }
            else{
                  itemIndex--;
            }
            $(`.gallery-popup .gp-img`).fadeOut(function(){
                  gpSlideShow();
            });
      }
      else if (e.keyCode == 27 ){
            $(`.gallery-popup`).removeClass("open");
      }
})

      
})