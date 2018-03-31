const recentWorks = [
  { url: "http://labs.vmware.com/flings", year: 2015, title: "Flings", description: "Icon Design", slug: "vmware-flings" },
  { url: "http://vmware.github.io", year: 2017, title: "VMware GitHub", description: "AngularJS, Front End Development", slug: "vmware-github" },
  { url: "javascript:;", year: 2016, title: "Office of the CTO", description: "Branding and Logo Design", slug: "vmware-octo" },
  { url: "javascript:;", year: 2015, title: "RADIO 2015", description: "Theme, Site Design and Development", slug: "vmware-radio" },
  { url: "javascript:;", year: 2015, title: "RADIO Merch", description: "Event Merch", slug: "vmware-radio-merch" },
  { url: "javascript:;", year: 2015, title: "RADIO Concept", description: "Brand Concept", slug: "vmware-radio-concept" },
  { url: "javascript:;", year: 2016, title: "RADIO 2016", description: "Theme, Site Design and Development", slug: "vmware-radio" },
  { url: "javascript:;", year: 2014, title: "Borathon", description: "Poster Design", slug: "vmware-borathon" },
  { url: "/video-drumkit", year: 2017, title: "Video Drumkit", description: "Inspiration from #javascript30", slug: "video-drumkit" },
  { url: "javascript:;", year: 2014, title: "Team Lunch", description: "Poster Design", slug: "vmware-team-lunch" }
];

const newest = recentWorks.sort((a, b) => a.year > b.year ? -1 : 1);
const target = document.querySelector('.recent-works');
newest.forEach(work =>
  target.innerHTML+= `<div class="work-item fl w-50 w-25-ns" ontouchstart="this.classList.toggle('hover');"><a href="${work.url}" target="_blank" class="db aspect-ratio aspect-ratio--1x1">
    <div role="img" aria-label="" style="background-image:url(/img/${work.slug}-${work.year}.jpg);" class="front bg-center cover aspect-ratio--object"></div>
    <div class="back bg-yellow w-100">
      <figure class="ma0 tc">
        <figcaption class="ma0 near-black">
          <h3 class="f6 f4-ns ma0 lh-title-ns">${work.title}</h3>
          <p class="f6 f5-ns athelas f5 lh-solid lh-copy-ns ma0 mv1">${work.description}</p>
        </figcaption>
      </figure>
    </div>
  </a></div>`
);