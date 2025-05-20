export const pastorCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 10000,
  appendDots: dots => (
    <div style={{ marginTop: "20px" }}>
      <ul style={{ display: "flex", justifyContent: "center", padding: 0 }}>{dots}</ul>
    </div>
  ),
  customPaging: i => (
    <div className="custom-dot" />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
        {
      breakpoint: 786,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};