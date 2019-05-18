const time = document.querySelector('time').innerHTML = formatDate(new Date());

function formatDate(date) {
  const shortMonthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${shortMonthNames[monthIndex]} ${day}, ${year}`
}

const recentWorks = [
  {
    url: "http://labs.vmware.com/flings",
    year: 2015,
    title: "Flings",
    description: "Icon Design",
    slug: "vmware-flings"
  },
  {
    url: "http://vmware.github.io",
    year: 2017,
    title: "VMware GitHub",
    description: "AngularJS, Front End Development",
    slug: "vmware-github"
  },
  {
    year: 2016,
    title: "Office of the CTO",
    description: "Branding and Logo Design",
    slug: "vmware-octo"
  },
  {
    year: 2015,
    title: "RADIO 2015",
    description: "Theme, Site Design and Development",
    slug: "vmware-radio"
  },
  {
    year: 2015,
    title: "RADIO Merch",
    description: "Event Merch",
    slug: "vmware-radio-merch"
  },
  {
    year: 2015,
    title: "RADIO Concept",
    description: "Brand Concept",
    slug: "vmware-radio-concept"
  },
  {
    year: 2016,
    title: "RADIO 2016",
    description: "Theme, Site Design and Development",
    slug: "vmware-radio"
  },
  {
    year: 2014,
    title: "Borathon",
    description: "Poster Design",
    slug: "vmware-borathon"
  },
  {
    url: "/video-drumkit",
    year: 2017,
    title: "Video Drumkit",
    description: "Inspiration from #javascript30",
    slug: "video-drumkit"
  },
  {
    url: "https://www.ralphandmaria.com",
    year: 2018,
    title: "Ralph and Maria",
    description: "RSVP Form/Wedding site",
    slug: "ralph-maria"
  },
  {
    year: 2014,
    title: "Team Lunch",
    description: "Poster Design",
    slug: "vmware-team-lunch"
  },
  {
    url: "https://github.com/drukelly/LIRI-Bot",
    year: 2019,
    title: "LIRI Bot",
    description: "Node.js command line app",
    slug: "liri-bot",
    format: "png"
  },
  {
    url: "https://www.drukelly.com/Train-Scheduler",
    year: 2019,
    title: "Train Scheduler",
    description: "Firebase + Moment.js",
    slug: "train-scheduler",
    format: "png"
  },
  {
    url: "https://www.drukelly.com/Node-MySQL",
    year: 2019,
    title: "Node.js + MySQL = Bamazon",
    description: "Uses Node.js to faciliate user interaction and MySQL as the backend.",
    slug: "bamazon-customer-demo",
    format: "gif"
  }
];

const newest = recentWorks.sort((a, b) => a.year > b.year ? -1 : 1);
const target = document.querySelector('.recent-works');
newest.forEach(work =>
  target.innerHTML+= `<div class="work-item fl w-50 w-25-ns" ontouchstart="this.classList.toggle('hover');"><a ${work.url ? `href=${work.url} target="_blank" ` : "" } class="db aspect-ratio aspect-ratio--1x1 pointer">
    <div role="img" aria-label="" style="background-image:url(/img/${work.slug}-${work.year}.${work.format ? work.format : "jpg"});" class="front bg-center cover aspect-ratio--object"></div>
    <div class="back bg-light-blue w-100">
      <figure class="ma0 tc">
        <figcaption class="ma0 near-black">
          <h3 class="f6 f4-ns ma0 lh-title-ns">${work.title}</h3>
          <p class="f6 f5-ns athelas f5 lh-solid lh-copy-ns ma0 mv1">${work.description}</p>
        </figcaption>
      </figure>
    </div>
  </a></div>`
);