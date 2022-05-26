import React from "react";

const ImageSlide = () => {
  return (
    <div className="py-10">
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img
            src="https://thumbs.dreamstime.com/b/rubber-hamer-11296261.jpg"
            class="w-1/2"
          />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgP0MdlOiyCmrU-lx-7D-MD_SxdKISBXgjkLxjhYQnfuQ8gpKdQGWy5ZXZfQlCBbphB0&usqp=CAU"
            class="w-1/2"
          />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYjyDyKUEAPnSV8rS8NeLPDq9Kethx180M4zDlfSTdGH4S4g3V0wcmV5Hbu-rOXlQq2A&usqp=CAU"
            class="w-1/2"
          />
        </div>
      
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
        <a href="#item4" class="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default ImageSlide;
