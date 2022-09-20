const hamburger = document.querySelector('.ham-btn1');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.overlaymenu1');
const cancel = document.querySelector('.cancel');
const port = document.querySelector('.items-port');
const contact = document.querySelector('.items-contact');
const about = document.querySelector('.items-about');
const news = document.querySelector('.items-news');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  overlay.style.display = 'block';
});

about.addEventListener('click', () => {
  overlay.style.display = 'none';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

port.addEventListener('click', () => {
  overlay.style.display = 'none';
});

contact.addEventListener('click', () => {
  overlay.style.display = 'none';
});

news.addEventListener('click', () => {
  overlay.style.display = 'none';
});

const teacherData = [
  {
    img: 'chef1.jpg',
    name: 'Brian Becher',
    Profession: 'Executive Chef, Asian Cuisine | Wolfgang Puck',
    Description:
      'Brian Becher is the Executive Chef of Wolfgang Puck’s Asian Cuisine at the MGM Grand Hotel & Casino in Las Vegas. He oversees the day-to-day operations of the restaurant, including menu development, staff training, and guest experience.',
  },
  {
    img: 'chef2.jpg',
    name: 'Bader Najeeb',
    Profession: 'Chef,  Sama Dubai TV and Abu Dhabi TV Host',
    Description:
      'Chef Bader Najeeb is a chef from Dubai. Najeeb taught himself to cook which sets himself from other chefs. He studied accounting in the past. After that, Bader attended the Culinary Arts Academy in Switzerland where he practices in Pastry and Chocolate Arts.',
  },
  {
    img: 'chef3.jpg',
    name: 'Jimmy Papadopoulos',
    Profession: 'Owner and Executive Chef Bellemore',
    Description:
      'At his restaurant, Bellemore, Jimmy Papadopoulos quickly made an impression on Chicago—and Instagram—with a showstopping starter. “I’m a big believer that first impressions matter,” Papadopoulos says. “What is that first impression going to be? I want to serve something grand.',
  },
  {
    img: 'chef4.jpg',
    name: 'Ming Tsai',
    Profession: 'Owner and Executive Chef at Blue Ginger and Blue Dragon',
    Description:
      'James Beard Award-winning chef Ming Tsai is revered for his fusion cuisine, which draws from his Chinese roots to reimagine classic American and pub fare. After publishing several cookbooks, opening two successful Boston restaurants (Blue Ginger and Blue Dragon). ',
  },
  {
    img: 'chef5.jpg',
    name: 'Jimmy Bannos Jr',
    Profession: 'Owner and Executive Purple Pig',
    Description:
      'Jimmy Bannos Jr. is quickly making something of a name for himself. Jimmy is part of the fourth generation of his family to be bought up on the culinary arts. Most notably, he worked under the tutelage of Mario Batali for three and a half years before establishing himself as the chef/proprietor of The Purple Pig in his hometown Chicago.',
  },
  {
    img: 'chef6.jpg',
    name: 'Lisa Donovan',
    Profession: 'Pastry Chef, The French Laundry',
    Description:
      'It was while she juggled jobs as a waiter and freelance writer that Lisa was introduced to the baking industry. As a home-based art and pastime, baking was ingrained in her from an early age. Her natural flair for baking propelled her to head pastry chef at the French Laundry just six months after she’d been given her first role. ',
  },
];

const container = document.querySelector('.container');

function data() {
  teacherData.forEach((teacher) => {
    container.innerHTML += `<div class="teacher-list">
    <img src="${teacher.img}" alt="" class="teacher-img">
    <div class="teacher-content">
      <h2 class="teacher-header">${teacher.name}</h2>
      <h3 class="teacher-profession">${teacher.Profession}</h3>
      <hr class="teacher-line">
      <p class="teacher-description">${teacher.Description}</p>
    </div>
  </div>`;
  });
}

window.onload = data();
