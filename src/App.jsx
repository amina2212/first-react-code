import './App.css'
import Header from './Header'
// import Slider from './Slider'


function App() {
 
  let slideIndex = 0;
  showSlides();
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    //  Hide all slides
    //  for (let i = 0; i < slides.length; i++) {
    //   slides[i].style.display = "none";  
    //  }
    
    //  Increment slide index
    //  slideIndex++;
    
    //  Reset slide index if it exceeds number of slides
    // if (slideIndex > slides.length) {slideIndex = 1}    
    
    //  Display the current slide
    // slides[slideIndex-1].style.display = "block";  
  
    //  Set timeout for next slide
    // setTimeout(showSlides, 5000); 
    // Change image every 2 seconds
   }

  return (
    
    <>
    <Header/>
  
  
    <div class="slideshow">
  <div class="slide">
    <img src="https://www.kfcpakistan.com/images/89abb5b0-e03e-11ee-af2f-d94d527aa364-995x356-final_desktop_image-2024-03-12070249.png" alt="" />
  </div>

  <div class="slide">
    <img src="https://www.kfcpakistan.com/images/a4214300-f29b-11ee-84d7-dbdd7f31cafb-1copy_desktop_image-2024-04-04155438.jpg" alt="" />
  </div>

  <div class="slide">
    <img src="https://www.kfcpakistan.com/images/a4214300-f29b-11ee-84d7-dbdd7f31cafb-1copy_desktop_image-2024-04-04155438.jpg" alt="" /> 
  </div>

  {/* <button class="btn-display" onclick="plusDivs(-1)">&#10094;</button>
  <button class="btn-display" onclick="plusDivs(+1)">&#10095;</button> */}
</div>

     <button id='btn1'>REORDER </button>
    
    <section className='centre'>
        <div>
        <h3>KRUNCH BURGER</h3>
           <button className='price'>RS.290</button>
      <img src="https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png" alt="" />
      <button>add to bucket</button>
     
      </div>

      <div>
      <h3>KRUNCH COMBO</h3>
        <button className='price'>RS.500</button>
      <img src="https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png" alt="" />
     <button>add to bucket</button>
      </div>

      <div>
        <h3>HOT WINGS</h3>
      <button className='price'>RS.490</button>
      <img src="https://www.kfcpakistan.com/images/38718ee0-bc17-11ee-97ca-ad9c0958c4fc-Plain-wings-min_variant_0-2024-01-26065041.png" alt="" />
      <button>add to bucket</button>
      </div>

       <div>
       <h3>MIGHTY ZINGER</h3>
       <button className='price'>RS.600</button>
      <img src="https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png" alt="" />
      <button>add to bucket</button>

      </div>


    </section>
    

     <section className='footer'>
      <div className='icons'>
     <i class="fa-brands fa-facebook"></i>
     <i class="fa-brands fa-youtube"></i>
     <i class="fa-brands fa-instagram"></i>
     </div> 
     </section>



   </>
    
  )
}

export default App
