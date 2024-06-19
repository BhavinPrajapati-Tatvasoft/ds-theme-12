$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------

  // Sidebar
  $(".menu-btn").on("click", function (e) {
    $("body").toggleClass("toggle-menu");
  });
  $(".sidebar-overlay").on("click", function (e) {
    $("body").removeClass("toggle-menu");
  });

  // Submenu
  $(".list-link").click(function () {
    if ($(this).parent().hasClass("has-submenu")) {
      $(this).parent().siblings().find(".sub-menu").slideUp();
      $(this).parent().siblings().removeClass("open-menu");
      $(this).siblings().slideToggle();
      $(this).parent().toggleClass("open-menu");
    } else {
      $(this).parent().siblings().find(".sub-menu").slideUp();
    }
  });

  // Search
  $(".search-btn").on("click", function (e) {
    $("body").toggleClass("open-search");
  });
  $(".search-overlay").on("click", function (e) {
    $("body").removeClass("open-search");
  });

  // Hiring Chart
  let hiringChartCanvas = document.getElementById("hiringChart");
  if (hiringChartCanvas) {
    var ctx = hiringChartCanvas.getContext("2d");
    var data = {
      labels: [
        "Direct",
        "Linkdin",
        "Referral",
        "Twitter",
        "Hired",
        "College",
        "Naukri",
      ],
      datasets: [
        {
          data: [31, 22, 18, 25, 25, 20, 20],
          backgroundColor: "#37CADE",
          barThickness: 12,
          label: "Technical",
        },
        {
          data: [10, 5, 10, 10, 12, 7, 7],
          backgroundColor: "#86E8F5",
          barThickness: 12,
          label: "Non-Technical",
        },
      ],
    };
    var options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          align: "center",
          labels: {
            color: "#606060",
            boxWidth: 10,
            boxHeight: 10,
            borderRadius: 5,
            useBorderRadius: true,
            padding: 16,
            font: {
              size: 12,
              lineHeight: 18,
              weight: 500,
              family: "'Poppins', sans-serif",
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#989898",
            font: {
              size: 12,
              lineHeight: "18px",
              family: "'Poppins', sans-serif",
            },
            padding: 8,
          },
          grid: {
            drawTicks: false,
            display: false,
          },
          border: {
            color: "#E2E2E2",
          },
          stacked: true,
        },
        y: {
          ticks: {
            color: "#989898",
            font: {
              size: 12,
              lineHeight: "18px",
              family: "'Poppins', sans-serif",
            },
            padding: 8,
            stepSize: 10,
          },
          grid: {
            drawTicks: false,
            display: false,
          },
          border: {
            color: "#E2E2E2",
          },
          stacked: true,
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var hiringChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }

  // Select2
  // $(".custom-select").select2({
  //   width: "100%",
  //   dropdownCssClass: "custom-select-menu",
  //   laceholder: "This is my placeholder",
  // });

  // CountUp
  $(".numbers").counterUp();

  // Circular Progress
  $(".circle")
    .circleProgress({
      value: 0.6,
      size: 106,
      fill: "#24B0C3",
      startAngle: 29.9,
      thickness: 8,
      lineCap: "round",
      emptyFill: "#E5E5E5",
      animation: { duration: 2000, easing: "circleProgressEasing" },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(60 * progress) + "<i>%</i>");
    });

  // Password Toggle
  $(".password-btn").click(function () {
    var passwordInput = $(this).siblings(".password-input");
    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      $(this).addClass("show-password");
    } else {
      passwordInput.attr("type", "password");
      $(this).removeClass("show-password");
    }
  });

  // Datatable
  $("#datatable1").DataTable({
    sort: false,
    filter: false,
    info: false,
    autoWidth: false,
    paging: false,
    layout: {
      topStart: null,
      top: null,
      topEnd: null,
      bottomStart: null,
      bottom: null,
      bottomEnd: null,
    },
  });

  $("#datatable2").DataTable({
    sort: false,
    filter: false,
    info: false,
    autoWidth: false,
    pagingType: "full_numbers",
    pageLength: 5,
    order: [[0, ""]],
    layout: {
      topStart: null,
      top: null,
      topEnd: null,
      bottomStart: "pageLength",
    },
    language: {
      info: "_START_-_END_ of _TOTAL_",
      paginate: {
        first: false,
        last: false,
        previous:
          '<img src="images/prev-active-icon.svg" class="active-icon" alt="Prev"/><img src="images/prev-disabled-icon.svg" class="default-icon" alt="Prev"/>',
        next: '<img src="images/next-active-icon.svg" class="active-icon" alt="Next"/><img src="images/next-disabled-icon.svg" class="default-icon" alt="Next"/>',
      },
      lengthMenu: "_MENU_ Records per page",
    },
    lengthMenu: [5, 10, 15],
  });

  // AOS Initialize
  AOS.init({
    once: true,
    duration: 600,
  });

  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
