// slick slider

$(document).ready(function () {
  $(".payment_item_wrapper, .ourbenfits_wrapper").slick({
    dots: true,
    autoplay: true,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    speed: 1000,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          items: 1,
        },
      },
    ],
  });
});

// deposit slider

$(document).ready(function () {
  $(".widraw_content_slider").slick({
    dots: true,
    autoplay: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          items: 1,
        },
      },
    ],
  });
});

// stcky header

let mainHeader = document.getElementById("myHeader");
let sticky = mainHeader.offsetTop;

window.addEventListener("scroll", function () {
  if (window.pageYOffset > sticky) {
    mainHeader.classList.add("sticky");
  } else {
    mainHeader.classList.remove("sticky");
  }
});

// accordion

{
  let acordionBtn = document.getElementsByClassName("faq_item_button");

  // try another
  [...acordionBtn].forEach((currentItem, i) => {
    let acordionItem = document.getElementsByClassName("faq_item")[i];

    currentItem.addEventListener("click", () => {
      let showClass = document.querySelector(".showAcordion");

      if (!acordionItem.classList.contains("showAcordion") && showClass) {
        showClass.classList.remove("showAcordion");
      }

      acordionItem.classList.toggle("showAcordion");
    });
  });
}

// online calculator

{
  let mainAmount = document.getElementById("amount");

  mainAmount.addEventListener("change", function () {
    calculator();
  });

  let getValue = document.getElementById("getInt");

  getValue.addEventListener("change", function () {
    calculator();
  });

  let calculator = function () {
    let getInt = document.getElementById("getInt").value;

    let inputAmount = document.getElementById("amount").value;

    let totalProfit = document.getElementById("totalProfit");

    let dailyProfit = document.getElementById("dailyProfit");

    // get input 5%

    if (getInt == 5) {
      if (inputAmount == "") {
      } else if (inputAmount < 20 || inputAmount > 100000) {
        if (inputAmount < 20) {
          alert("This Number is so Small");
        } else if (inputAmount > 100000) {
          alert("This Number is so Large");
        }
        return;
      }
    }

    // get input 170%
    else if (getInt == 107) {
      if (inputAmount == "") {
      } else if (inputAmount < 100 || inputAmount > 100000) {
        if (inputAmount < 100) {
          alert("This Number is so Small");
        } else if (inputAmount > 100000) {
          alert("This Number is so Large");
        }
        return;
      }
    }

    // get input 200%
    else if (getInt == 0.3) {
      if (inputAmount == "") {
      } else if (inputAmount < 50 || inputAmount > 100000) {
        if (inputAmount < 50) {
          alert("This Number is so Small");
        } else if (inputAmount > 100000) {
          alert("This Number is so Large");
        }
        return;
      }
    }

    var interest = getInt;
    var amount = inputAmount;

    var daily;
    var monthly;

    daily = amount * (interest / 100);

    if (interest < 100) {
      monthly = amount * (interest / 100) * 30;
    } else {
      monthly = amount * (interest / 100);
    }

    dailyProfit.value = daily.toFixed(2);
    totalProfit.value = monthly.toFixed(2);
  };
}

// faq accor dion

{
}
