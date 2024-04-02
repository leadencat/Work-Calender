var currentDate = $('#currentDay');
var saveButton = $('.saveBtn');
var desc = $('.description');
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$(function() {
    $('.saveBtn').on('click', function() {
        localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val());
      });

      function timeSet() {
        var currentTime = dayjs().hour();
        for (var i = 0; i < hours.length; i++) {
          var element = $("div[id="+hours[i]+"]");
          var elementId = $("div[id="+hours[i]+"]").attr("id");
          if (elementId < currentTime) {
            element.addClass('past')
          }
          else if (elementId == currentTime) {
            element.addClass('present')
          }
          else {
            element.addClass('future')
        };
      };
      };
      timeSet()
      setInterval(function() {
        timeSet()
      },1000);

      function getStorage() {
        var storageEl = [];
        for (var i = 0; i < hours.length; i++) {
          storageEl.push(localStorage.getItem(hours[i]))
        }
        desc.each(function() {
          var task = $(this).parent().attr("id");
          $(this).text(storageEl[task-9]);
        });
      };
      getStorage();

      function displayDate() {
        var rightNow = dayjs().format('dddd, MMMM D');
        currentDate.text(rightNow);
      }

      displayDate();
    });