var app = new Vue({
  el: '#app',
  data: {
    headline: 'Please Join Us Live For The Q4 FY18 Company Meeting',
    location: 'in the Palo Alto Prom F Gym or via webcast',
    dateDisplay: moment().format('dddd, MMMM Do, YYYY'),
    timeDisplay: 'from 9:00 AM - 10:30 AM PST',
    finePrint: 'Visit the Company Meeting Source page for details',
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
    }
  }
});

// download links
const sourceDownload = document.querySelector('#source-download');
const vaultDownload = document.querySelector('#vault-download');
// generate canvas from source div
const sourceDiv = document.querySelector('#source-preview');
const vaultDiv = document.querySelector('#vault-preview');

window.addEventListener('mousemove', function(e){
  // generate download link for source
  html2canvas(sourceDiv, {
    onrendered: function(canvas) {
      const image = canvas.toDataURL('image/png').replace('image/png','application/octet-stream');
      sourceDownload.setAttribute('href', image);
      sourceDownload.setAttribute('download', 'source-banner.png');
    }
  });
  // generate download link for vault
  html2canvas(vaultDiv, {
    onrendered: function(canvas) {
      const image = canvas.toDataURL('image/png').replace('image/png','application/octet-stream');
      vaultDownload.setAttribute('href', image);
      vaultDownload.setAttribute('download', 'vault-banner.png')
    }
  });
});

$('#designOptions').on('click', 'li', function() {
  $('li.active').removeClass('active');
  $(this).addClass('active');
});