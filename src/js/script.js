const buttonToggler = document.querySelector('.navbar-toggler');
const navigationBar = document.querySelector('.navbar-collapse');
const navLinkItem = document.querySelectorAll('.nav-link');
// const allBoxesExp = document.querySelector('.experience__boxes');
const allHeadingExp = document.querySelectorAll('.experience__heading');
const footerYear = document.querySelector('.footer__year');

// shadow menu

document.addEventListener('DOMContentLoaded', function()
{
  const nav = document.querySelector('.navbar');
  function addShadowMenu() {
    if(window.scrollY >=200) {
      nav.classList.add('shadow-menu-large');
    }
    else {
      nav.classList.remove('shadow-menu-large');
    }
  }
  window.addEventListener('scroll', addShadowMenu);
})


const handleShowYear = () => {
  const date = (new Date).getFullYear();
  footerYear.textContent = date;
}

handleShowYear();

// hidden menu on small large screen

const hiddenMenu = () => {
  navLinkItem.forEach(link => link.addEventListener('click', () => {
  navigationBar.classList.remove('show');
    // navigationBar.classList.remove('hidden-menu');

  }))
}


// roboczy projekt experience - akkordeon



const openInfo = (e) => {
  if (e.target.nextElementSibling.classList.contains('experience__info--active')) {
    e.target.nextElementSibling.classList.remove('experience__info--active');
  } else {
    closeAll();
    e.target.nextElementSibling.classList.toggle('experience__info--active');
  }
}

const closeAll = () => {
  const allInfo = document.querySelectorAll('.experience__info');
  allInfo.forEach(item => item.classList.remove('experience__info--active'));
}

const clickOut = e => {
  if (e.target.classList.contains('experience__heading') || e.target.classList.contains('experience__info') || e.target.classList.contains('experience__info--text')) {
    return
  }
  closeAll();
}

//  expierience handle for large wievs

//pobieramy divy z datami
const expBtn = document.querySelectorAll('.experience__year');
const nameCompany = document.querySelector('.experience__label--co');
const occupation = document.querySelector('.experience__label--occupation');
const expDetail = document.querySelector('.experience__detail');
const companies = document.querySelector('.companies');




const switcher = () => {
  expBtn.forEach(btn => btn.addEventListener('click', ()=> {
    const liItem = companies.content.cloneNode(true);
    if (btn.matches('.experience__year--one')) {
      nameCompany.classList.add('experience__sabert');
      occupation.classList.add('experience__sabert__alt');
      nameCompany.innerHTML = '';
      nameCompany.innerHTML = '<p>Sabert Poland</p>';
      occupation.innerHTML = '';
      occupation.innerHTML = '<p>pracownik magazynowy</p>';
      expDetail.innerHTML = '';
      expDetail.innerHTML = liItem.querySelector('.li-sabert').innerHTML;
    } else if (btn.matches('.experience__year--two'))  {
      nameCompany.classList.add('experience__ups');
      occupation.classList.add('experience__ups__alt');
      nameCompany.innerHTML = '';
      nameCompany.innerHTML = '<p>UPS Global Business Services</p>';
      occupation.innerHTML = '';
      occupation.innerHTML = '<p>pracownik administracyjny</p>';
      expDetail.innerHTML = '';
      expDetail.innerHTML = liItem.querySelector('.li-ups').innerHTML;
    } else if (btn.matches('.experience__year--three'))  {
      nameCompany.classList.add('experience__ceri');
      occupation.classList.add('experience__ceri__alt');
      nameCompany.innerHTML = '';
      nameCompany.innerHTML = '<p>Ceri International</p>';
      occupation.innerHTML = '';
      occupation.innerHTML = '<p>asystent ds. obsługi procesów bankowych</p>';
      expDetail.innerHTML = '';
      expDetail.innerHTML = liItem.querySelector('.li-ceri').innerHTML;
    } else if (btn.matches('.experience__year--four'))  {
      nameCompany.classList.add('experience__voice');
      occupation.classList.add('experience__voice__alt');
      nameCompany.innerHTML = '';
      nameCompany.innerHTML = '<p>Voice Contact Center</p>';
      occupation.innerHTML = '';
      occupation.innerHTML = '<p>konsultant ds. obsługi klienta</p>';
      expDetail.innerHTML = '';
      expDetail.innerHTML = liItem.querySelector('.li-voice').innerHTML;
    } else if (btn.matches('.experience__year--five'))  {
      nameCompany.classList.add('experience__compal');
      occupation.classList.add('experience__compal__alt');
      nameCompany.innerHTML = '';
      nameCompany.innerHTML = '<p>Compal Europe Poland</p>';
      occupation.innerHTML = '';
      occupation.innerHTML = '<p>tester płyt głównych</p>';
      expDetail.innerHTML = '';
      expDetail.innerHTML = liItem.querySelector('.li-compal').innerHTML;
    } else if (btn.matches('.experience__year--six'))  {
      nameCompany.classList.add('experience__dhl');
      occupation.classList.add('experience__dhl__alt');
      nameCompany.innerHTML = '';
      nameCompany.innerHTML = '<p>DHL Express</p>';
      occupation.innerHTML = '';
      occupation.innerHTML = '<p>doradca klienta</p>';
      expDetail.innerHTML = '';
      expDetail.innerHTML = liItem.querySelector('.li-dhl').innerHTML;
    } else if (btn.matches('.experience__year--seven'))  {
      nameCompany.classList.add('experience__nomi');
      occupation.classList.add('experience__nomi__alt');
      nameCompany.innerHTML = '';
      nameCompany.innerHTML = '<p>Nomi</p>';
      occupation.innerHTML = '';
      occupation.innerHTML = '<p>sprzedawca</p>';
      expDetail.innerHTML = '';
      expDetail.innerHTML = liItem.querySelector('.li-nomi').innerHTML;
    };
  }));
};


const changeStyle = (e) => {
  expBtn.forEach(it => it.classList.remove('experience__year-check'));
  e.target.classList.add('experience__year-check');
}

// orange scroll Bar Width

let root = document.documentElement;

const handleScrollBar = () => {
  const scroll = window.scrollY;
  const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight;
  const scorllBarWidth = Math.floor((scroll / leftToScroll) * 100)
  
  console.log(scorllBarWidth);
  root.style.setProperty('--scroll-width', `${scorllBarWidth}%`);

}



switcher();

window.addEventListener('scroll', handleScrollBar);

expBtn.forEach(it => it.addEventListener('click', changeStyle));
allHeadingExp.forEach(infoBox => infoBox.addEventListener('click', openInfo));
window.addEventListener('click', clickOut);
buttonToggler.addEventListener('click', hiddenMenu);




