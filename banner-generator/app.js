var app = new Vue({
  el: '#app',
  data: {
    headline: 'Please Join Us Live For The Q4 FY18 Company Meeting',
    location: 'in the Palo Alto Prom F Gym or via webcast',
    dateDisplay: moment().format('dddd, MMMM Do, YYYY'),
    timeDisplay: 'from 9:00 AM - 10:30 AM PST',
    finePrint: 'Visit the Company Meeting Source page for details',
    ctaText: 'Learn More',
    options: [
    { value: 'option1' },
    { value: 'option2' },
    { value: 'option3' }
    ],
    types: [
    { value: 'source' },
    { value: 'vault' }
    ]
  },
  methods: {
    pickOption: function(e) {
      // select the divs to update with selected option class name
      const targetDivs = document.querySelectorAll('.target');
      const selectedOption = e.target.dataset.option;

      // update target divs based on selected option
      targetDivs.forEach(function(element) {
        if ([].some.call(element.classList, c => /option.*/.test(c))) {
          element.classList.remove('option1', 'option2', 'option3');
        }
        element.classList.remove('hide');
        element.classList.add(selectedOption);
      });
      checkTextInput('input[name="ctaText"]', '.cta');
    }
  }
});

// generate download links
$('#source-download').on('mouseover', function(e) {
  html2canvas($('#source-preview'), {
    dpi: 144,
    scale: 2,
    onrendered: function(canvas) {
      const image = canvas.toDataURL('image/png').replace('image/png','application/octet-stream');
      $('#source-download').attr('href', image);
      $('#source-download').attr('download', 'source-banner-' + moment().format('X') + '.png');
    }
  });
});

$('#vault-download').on('mouseover', function(e) {
  html2canvas($('#vault-preview'), {
    dpi: 144,
    scale: 2,
    onrendered: function(canvas) {
      const image = canvas.toDataURL('image/png').replace('image/png','application/octet-stream');
      $('#vault-download').attr('href', image);
      $('#vault-download').attr('download', 'vault-banner-' + moment().format('X') + '.png');
    }
  });
});

// active class for the clicked option
$('#designOptions').on('click', 'li', function() {
  $('.cta').removeClass('hide');
  $('li.active').removeClass('active');
  $(this).addClass('active');
});

function checkTextInput(element, targetedElement) {
  // remove call-to-action when input text field is empty
  $(element).change(function(e){
    if (!$(this).val()) {
      $(targetedElement).addClass('hide');
    } else {
      $(targetedElement).removeClass('hide');
    }
  });
}