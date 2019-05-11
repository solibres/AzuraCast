$(document).ready(function(){$("input[type=password].strength").on("keyup",function(s){var a=zxcvbn($(this).val()),e=a.score,r=$(this).closest(".form-group");r.length||(r=$(this).closest("div"));var t=r.find(".form-text.password-explanation");if(!t.length){t=$('<small class="form-text password-explanation" />');var n=r.find("label");n.length?n.after(t):$(this).after(t),t=r.find(".form-text.password-explanation")}switch(a.feedback.warning?t.text(a.feedback.warning).show():t.hide(),r.removeClass("has-error has-success has-warning"),e){case 0:case 1:r.addClass("has-error");break;case 2:case 3:r.addClass("has-warning");break;case 4:r.addClass("has-success")}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInp4Y3Zibi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZSIsInJlc3VsdCIsInp4Y3ZibiIsInRoaXMiLCJ2YWwiLCJzY29yZSIsImdyb3VwIiwiY2xvc2VzdCIsImxlbmd0aCIsImV4cGxhbmF0aW9uIiwiZmluZCIsImxhYmVsIiwiYWZ0ZXIiLCJmZWVkYmFjayIsIndhcm5pbmciLCJ0ZXh0Iiwic2hvdyIsImhpZGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUVkRixFQUFFLGlDQUFpQ0csR0FBRyxRQUFTLFNBQVNDLEdBRXBELElBQUlDLEVBQVNDLE9BQU9OLEVBQUVPLE1BQU1DLE9BQ3hCQyxFQUFRSixFQUFPSSxNQUVmQyxFQUFRVixFQUFFTyxNQUFNSSxRQUFRLGVBQ3ZCRCxFQUFNRSxTQUNQRixFQUFRVixFQUFFTyxNQUFNSSxRQUFRLFFBRzVCLElBQUlFLEVBQWNILEVBQU1JLEtBQUssbUNBRTdCLElBQUtELEVBQVlELE9BQVEsQ0FDckJDLEVBQWNiLEVBQUUsb0RBRWhCLElBQUllLEVBQVFMLEVBQU1JLEtBQUssU0FDbkJDLEVBQU1ILE9BQ05HLEVBQU1DLE1BQU1ILEdBRVpiLEVBQUVPLE1BQU1TLE1BQU1ILEdBR2xCQSxFQUFjSCxFQUFNSSxLQUFLLG1DQVc3QixPQVJJVCxFQUFPWSxTQUFTQyxRQUNoQkwsRUFBWU0sS0FBS2QsRUFBT1ksU0FBU0MsU0FBU0UsT0FFMUNQLEVBQVlRLE9BR2hCWCxFQUFNWSxZQUFZLHFDQUVWYixHQUNKLEtBQUssRUFDTCxLQUFLLEVBQ0RDLEVBQU1hLFNBQVMsYUFDZixNQUVKLEtBQUssRUFDTCxLQUFLLEVBQ0RiLEVBQU1hLFNBQVMsZUFDZixNQUVKLEtBQUssRUFDRGIsRUFBTWEsU0FBUyIsImZpbGUiOiJ6eGN2Ym4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkKCdpbnB1dFt0eXBlPXBhc3N3b3JkXS5zdHJlbmd0aCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHp4Y3ZibigkKHRoaXMpLnZhbCgpKSxcclxuICAgICAgICAgICAgc2NvcmUgPSByZXN1bHQuc2NvcmU7XHJcblxyXG4gICAgICAgIHZhciBncm91cCA9ICQodGhpcykuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKTtcclxuICAgICAgICBpZiAoIWdyb3VwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBncm91cCA9ICQodGhpcykuY2xvc2VzdCgnZGl2Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZXhwbGFuYXRpb24gPSBncm91cC5maW5kKCcuZm9ybS10ZXh0LnBhc3N3b3JkLWV4cGxhbmF0aW9uJyk7XHJcblxyXG4gICAgICAgIGlmICghZXhwbGFuYXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGV4cGxhbmF0aW9uID0gJCgnPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHBhc3N3b3JkLWV4cGxhbmF0aW9uXCIgLz4nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGdyb3VwLmZpbmQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLmFmdGVyKGV4cGxhbmF0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoZXhwbGFuYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBleHBsYW5hdGlvbiA9IGdyb3VwLmZpbmQoJy5mb3JtLXRleHQucGFzc3dvcmQtZXhwbGFuYXRpb24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuZmVlZGJhY2sud2FybmluZykge1xyXG4gICAgICAgICAgICBleHBsYW5hdGlvbi50ZXh0KHJlc3VsdC5mZWVkYmFjay53YXJuaW5nKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXhwbGFuYXRpb24uaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ3JvdXAucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtc3VjY2VzcyBoYXMtd2FybmluZycpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHNjb3JlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGdyb3VwLmFkZENsYXNzKCdoYXMtd2FybmluZycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBncm91cC5hZGRDbGFzcygnaGFzLXN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG4iXX0=