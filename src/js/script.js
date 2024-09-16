const buttonToggler = document.querySelector('.navbar-toggler');
const navigationBar = document.querySelector('.navbar-collapse');
const navLinkItem = document.querySelectorAll('.nav-link');
// const allBoxesExp = document.querySelector('.experience__boxes');
const allHeadingExp = document.querySelectorAll('.experience__heading');

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
const expDetail = document.querySelector('.experience__detail');
const nameCompany = document.querySelector('.experience__label--co');
const occupation = document.querySelector('.experience__label--occupation');



const switcher = () => {
  expBtn.forEach(btn => btn.addEventListener('click', ()=> {
    if (btn.matches('.experience__year--one')) {
      nameCompany.textContent = '';
      nameCompany.textContent = 'Sabert Poland: sp z o.o.';
      occupation.textContent = '';
      occupation.textContent = 'pracownik magazynowy';
      expDetail.innerHTML = '';
      expDetail.innerHTML = `<ul>
        <li>pakowanie gotowych produktów firmy „Sabert” w opakowanie zbiorcze</li>
        <li>przestrzenne rozmieszczenie zbiorczych opakować na paletę</li>
        <li>foliowanie palety za pomocą owijarki do palet</li>
        <li>przygotowanie zafoliowanej palety do transportu</li>
        <li>drukowanie etykiet</li>
      </ul>`;
    } else if (btn.matches('.experience__year--two'))  {
      nameCompany.textContent = '';
      nameCompany.textContent = 'UPS Global Business Services';
      occupation.textContent = '';
      occupation.textContent = 'pracownik administracyjny';
      expDetail.innerHTML = '';
      expDetail.innerHTML = `<ul>
        <li>sporządzanie raportów z przeprocesowanych reklamacji z poprzedniego dnia w Excel’u</li>
        <li>rejestrowanie w wewnętrznym systemie komputerowym reklamacji</li>
        <li>budowanie lojalności wobec obecnych kontrahentów</li>
        <li>przesłanie ww. reklamacji odpowiednim jednostkom do dalszego procesowania</li>
        <li>prowadzenie korespondencji mailowej z klientami z całego świata.</li>
        <li>przyjmowanie zgłoszeń telefonicznych na przesyłki międzynarodowe</li>
        <li>przygotowania raportu z ruchu reklamacyjnego wybranych firm w stosunku do firmy UPS.</li>
      </ul>`
    } else if (btn.matches('.experience__year--three'))  {
      nameCompany.textContent = '';
      nameCompany.textContent = 'Ceri International';
      occupation.textContent = '';
      occupation.textContent = 'asystent ds. obsługi procesów bankowych';
      expDetail.innerHTML = '';
      expDetail.innerHTML = `<ul>
        <li>weryfikacja dokumentacji klientów niemieckiego Banku „CommerzBank” pod względem poprawności danych z wewnętrzną bazą elektroniczną.</li>
        <li>segregowanie dokumentów na różne ich rodzaje pod względem merytorycznym oraz przedstawianie tych informacji w postaci zapisu elektronicznego.</li>
        <li>skanowanie dokumentów do wewnętrznej aplikacji banku.</li>
        <li>archiwizacja zweryfikowanych dokumentów do magazynu.</li>
      </ul>`
    } else if (btn.matches('.experience__year--four'))  {
      nameCompany.textContent = '';
      nameCompany.textContent = 'Voice Contact Center';
      occupation.textContent = '';
      occupation.textContent = 'konsultant ds. obsługi klienta';
      expDetail.innerHTML = '';
      expDetail.innerHTML = `<ul>
        <li>uzupełnianie brakującej dokumentacji w zarejestrowanych szkodach</li>
        <li>przekazywanie informacji klientom odnośnie wyniku decyzyjnego szkody</li>
        <li>rejestracja szkód wypadkowych komunikacyjnych</li>
        <li>rejestracja szkód majątkowych</li>
        <li>przyjmowanie zgłoszeń dotyczących zdarzeń szpitalnych, zgonów i urodzeń dzieci</li>
        <li>przekazywanie informacji o stanie procesowania szkody</li>
        <li>ustalanie telefonicznie terminów oględzin z poszkodowanymi</li>
      </ul>`
    } else if (btn.matches('.experience__year--five'))  {
      nameCompany.textContent = '';
      nameCompany.textContent = 'Compal Europe Poland';
      occupation.textContent = '';
      occupation.textContent = 'tester płyt głównych';
      expDetail.innerHTML = '';
      expDetail.innerHTML = `<ul>
        <li>sprawdzanie stabilności systemu</li>
        <li>aktualizacja bios'ów  płyt głównych</li>
        <li>sprawdzanie wydajności podzespołów komputerowych</li>
        <li>realizacja planów ilościowych i jakościowych</li>
        <li>szkolenie i przygotowywanie nowozatrudnionych osób do pracy na stanowisku serwisanta komputerowego</li>
      </ul>`
    } else if (btn.matches('.experience__year--six'))  {
      nameCompany.textContent = '';
      nameCompany.textContent = 'DHL Express';
      occupation.textContent = '';
      occupation.textContent = 'doradca klienta';
      expDetail.innerHTML = '';
      expDetail.innerHTML = `<ul>
        <li>rejestracja zleceń usług transportowych</li>
        <li>kontrola realizacji zamówień</li>
        <li>budowanie lojalności wobec obecnych kontrahentów</li>
        <li>koordynowanie i wdrażanie działań interwencyjnych w nagłych sytuacjach awaryjnych (w przypadku źle wykonanej usługi)</li>
        <li>prowadzenie aktywnej sprzedaży usług dodatkowych, jakimi dysponuje firma „DHL Express” na terenie kraju</li>
        <li>rejestrowanie reklamacji</li>
      </ul>`
    } else if (btn.matches('.experience__year--seven'))  {
      nameCompany.textContent = '';
      nameCompany.textContent = 'Nomi';
      occupation.textContent = '';
      occupation.textContent = 'sprzedawca';
      expDetail.innerHTML = '';
      expDetail.innerHTML = `<ul>
      <li>kontrola zamówień towarów</li>
      <li>organizacja pracy na podległych działach</li>
      <li>przyjmowanie reklamacji od klientów</li>
      <li>sprzedaż produktów budowlanych</li>
    </ul>`
    };
  }));
};

// stylowanie div'ów z datami

const switcherStyleofDates = (e) => {
  if (e.target.matches('.experience__year-check')) {
    e.target.classList.remove('experience__year-check');
  } else {
    expBtn.forEach(it => it.classList.remove('experience__year-check'));
    e.target.classList.add('experience__year-check');
  }
}



switcher();

expBtn.forEach(it => it.addEventListener('click', switcherStyleofDates));
allHeadingExp.forEach(infoBox => infoBox.addEventListener('click', openInfo));
window.addEventListener('click', clickOut);
buttonToggler.addEventListener('click', hiddenMenu);



