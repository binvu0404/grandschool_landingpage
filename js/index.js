$(document).ready(function () {
  var countDownDateElement = $("#countDownDate");
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // CSS

    // Display the result in the element with id="demo"
    countDownDateElement.empty();

    var daysElement = $("<p class='time-section'></p>").html(
      "<p class='countDate-num'>" + days + "</p>" + "<p>days</p>"
    );
    var hoursElement = $("<p class='time-section'></p>").html(
      "<p class='countDate-num'>" + hours + "</p>" + "hours</p>"
    );
    var minutesElement = $("<p class='time-section'></p>").html(
      "<p class='countDate-num'>" + minutes + "</p>" + "minutes</p>"
    );
    var secondsElement = $("<p class='time-section'></p>").html(
      "<p class='countDate-num'>" + seconds + "</p>" + "seconds</p>"
    );

    countDownDateElement.append(
      daysElement,
      hoursElement,
      minutesElement,
      secondsElement
    );

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      countDownDateElement.text("EXPIRED");
    }

    $("#countDownDate .countDate-num").css({
      color: "white",
      fontSize: "7.2rem",
      "line-height": "7.3rem",
      "margin-bottom": "14px",
      "font-weight": "600",
    });

    $(".time-section").css({
      display: "flex",
      "flex-direction": "column",
      "text-align": "center",
    });
  }, 1000);

  var pageAmount;

  if ($(document).innerWidth() < 490) {
    //Handle Courses block page numbers
    $(".course-block__page-section").css("display", "none");
  } else if ($(document).innerWidth() < 730) {
    pageAmount = Math.ceil($(".course-block").length / 2);
  } else if ($(document).innerWidth() < 970) {
    pageAmount = Math.ceil($(".course-block").length / 3);
  } else if ($(document).innerWidth() < 1440) {
    pageAmount = Math.ceil($(".course-block").length / 4);
  } else {
    pageAmount = Math.ceil($(".course-block").length / 5);
  }

  function pageNumber() {
    for (var i = 0; i < pageAmount; i++) {
      0;
      $(".course-block__page-section").append(
        '<span class="course-block-list_page"></span>'
      );
    }
  }
  pageNumber();

  //Handle auto scroll course list page

  let i = 0;
  var courses = $(".course-block-list");
  var courseWidth = $(".course-block").outerWidth(true);

  setInterval(function () {
    if (i < 10) {
      courses.animate(
        {
          scrollLeft: "+=" + courseWidth,
        },
        0
      );

      i++;
    } else {
      courses.scrollLeft(0);
      i = 0;
    }
  }, 3000);

  $(".course-block-list_page").each((index, item) => {
    $(item).on("click", (event) => {
      courses.stop();
      if ($(document).innerWidth() <= 490) {
        courses.scrollLeft(courseWidth * (1 * index));
      } else if ($(document).innerWidth() < 730) {
        courses.scrollLeft(courseWidth * (2 * index));
      } else if ($(document).innerWidth() < 970) {
        courses.scrollLeft(courseWidth * (3 * index));
      } else if ($(document).innerWidth() < 1440) {
        courses.scrollLeft(courseWidth * (4 * index));
      } else {
        courses.scrollLeft(courseWidth * (5 * index));
      }
      $(".course-block-list_page").css("background-color", "white");
      $(event.target).css("background-color", "rgba(218, 134, 39, 0.87)");
    });
  });

  // Handle open modal video

  $(".main-page_container-4__right-footer").on("click", function (event) {
    event.preventDefault();
  });

  //Data about school

  var array = [
    {
      name: "Best Education",
      dics: "Grad School is free educational HTML template with Bootstrap 4.5.2 CSS layout. Feel free to use it for educational or commercial purposes. You may want to make a little donation to TemplateMo. Please tell your friends about us. Thank you.",
      img: "https://templatemo.com/templates/templatemo_557_grad_school/assets/images/choose-us-image-01.png",
      textMain: "a little donation",
    },
    {
      name: "Top Management",
      dics: "You can modify this HTML layout by editing contents and adding more pages as you needed. Since this template has options to add dropdown menus, you can put many HTML pages.Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.",
      img: "https://templatemo.com/templates/templatemo_557_grad_school/assets/images/choose-us-image-02.png",
    },
    {
      name: "Quality Meeting",
      dics: "You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. For more information, you shall contact TemplateMo now.",
      img: "https://templatemo.com/templates/templatemo_557_grad_school/assets/images/choose-us-image-03.png",
      textMain: "contact TemplateMo",
    },
  ];

  // CSS

  $(".main-header").css(
    "height",
    $(".main-header__video-section video").height()
  );

  //Handle change data when select on main-page__About

  var handleSelectAbout = function (event) {
    {
      var parentElement = $(event.target)
        .parentsUntil(".header-selection_item")
        .last()
        .parent();

      //handle data selected

      array.map((item, index) => {
        if (
          item.name.toLowerCase() ==
          $(parentElement).text().toLowerCase().trim()
        ) {
          $(".main-page__container-1-body .selection_title-of-paragraph").text(
            item.name
          );

          $(".main-page__container-1-body .seleciton_img").attr(
            "src",
            item.img
          );

          var para;

          if (item.textMain) {
            para = item.dics.replace(
              item.textMain,
              "<a href=''>" + item.textMain + "</a>"
            );
          } else {
            para = item.dics;
          }
          $(".main-page__container-1-body .selection_paragraph")
            .empty()
            .append(para);
        }
      });

      // handle icon selected

      $(parentElement).siblings(".item-selected").removeClass("item-selected");
      $(parentElement).addClass("item-selected");
    }
  };

  $(".header-selection_icon").each((index, element) => {
    $(element).on("click", handleSelectAbout);
  });

  //Handle Show/Hide Video Modal

  var videoIframe = $(".video-container__iframe-video");
  var srcModalVideo = videoIframe.attr("src");
  var videoLink = $(".main-page__container-4_video");
  var videoContainer = $(".video-container");
  var closeModalVidBtn = $(".video-container__close-btn");

  videoLink.on("click", (e) => {
    videoIframe.attr("src", srcModalVideo);
    e.preventDefault();
    videoContainer.css("display", "block");
    closeModalVidBtn.on("click", () => {
      videoContainer.css("display", "none");
      videoIframe.attr("src", "");
    });
    videoLink.on("keydown", (e) => {
      if (e.keyCode === 27) {
        videoContainer.css("display", "none");
      }
    });
  });

  $(".main-page__container-4_right-footer").on("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  //****** Handle When Document Min-Width 1190 ***********/

  if ($(document).innerWidth() <= 1190) {
    $(".header__about-list").css("display", "none");
    var aboutListMobile = $(".header__about-list-mobile");
    var headerSelectionSection = $(".header__select-section");
    //Show menu-mobile
    $(".header__menu-icon").on("click", () => {
      headerSelectionSection.slideToggle("slow");
    });

    //handler click About-child

    aboutListMobile.each((index, item) => {
      $(item).on("click", () => {
        $("html").animate(
          {
            scrollTop: $(".main-page__container-1:first").offset().top,
          },
          100
        );
        if (headerSelectionSection) {
          headerSelectionSection.slideToggle("slow");
          aboutListMobile.slideToggle("slow");
        }
      });
    });

    //handler close header select section when click child

    if (headerSelectionSection) {
      $(".header__select-section .option a").each((index, item) => {
        $(item).one("click", () => {
          headerSelectionSection.slideToggle("slow");
        });
      });
    }

    // handler click on About-btn in menu-mobile

    var aboutHeader = $(".header__about");
    aboutListMobile.css("display", "none");
    aboutHeader.on("click", (event) => event.preventDefault());
    aboutHeader.on("click", () => {
      aboutListMobile.slideToggle("slow");
    });
  }
});
