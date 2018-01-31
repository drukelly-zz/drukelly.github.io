// social sites option
const socialSites = ['Facebook', 'Google', 'LinkedIn', 'Twitter'];
$.each(socialSites, function(index, value) {
  $('#social-sites-options').append($('<option/>', {
    value: value.toLowerCase(),
    text: value
  }));
});

// select social site
$('select').on('change', function() {
  $('#preview-window').removeClass();
  $('#preview-window').addClass(this.value.toLowerCase() + ' ba b--black-40 h-100 flex items-center mv4');
});

// design options
const designOptions = ['blue', 'green', 'white'];
$.each(designOptions, function(index, value) {
  $('#design-options ul').append(
    '<li class="dib mr2"><a href="#"><img src="images/thumbs/' + value + '.png" alt="' + value + '" class="ba bw1 b--black-10"></a></li>'
    );
});

// define inputs and target
const headlineInput = $('input[name=headline]');
const copyInput = $('textarea[name=copy]');
const callToActionInput = $('input[name=callToAction]');
const header = $('#positioning-container header');
const copy = $('#positioning-container p.copy');
const callToAction = $('#positioning-container p.cta');

// on key events, update targets
$(headlineInput).on('keyup blur change', function(){
  header.text(headlineInput.val());
});
$(copyInput).on('keyup blur change', function(){
  copy.text(copyInput.val());
});
$(callToActionInput).on('keyup blur change', function(){
  callToAction.text(callToActionInput.val());
});

// active class for the clicked option
$('#design-options ul').on('click', 'li', function() {
  $('li.active').removeClass('active');
  $(this).addClass('active');
  // add design class name to background based on clicked
  const selectedDesign = $(this).find('img').attr('alt');
  $('#bg-container').removeClass();
  $('#bg-container').addClass(selectedDesign);
  // handle different type of font colors
  $('#positioning-container').removeClass();
  $('#positioning-container').addClass(selectedDesign + ' relative');
});

// download handler
$('#btn-download').on('mouseover', function(e) {
  html2canvas($('#preview-window'), {
    dpi: 144,
    scale: 2,
    onrendered: function(canvas) {
      const image = canvas.toDataURL('image/png').replace('image/png','application/octet-stream');
      $('#btn-download').attr('href', image);
      $('#btn-download').attr('download', 'social-banner-' + moment().format('X') + '.png');
    }
  });
});