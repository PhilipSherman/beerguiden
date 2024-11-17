
let selectedFilter = 'all';
const beerContainer = document.querySelector('.beer-container');
const beerItems = [
  //STOUTS:
  {
    name: "Refsvindinge Ale No. 16",
    type: "Stout",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshop14539.hstatic.dk%2Fupload_dir%2Fshop%2F158380.w610.h610.fill.jpg&f=1&nofb=1&ipt=efc23868d00ac58050eeeec8ed7b79a7fe418dce2cbec8c615549b1c50e846d7&ipo=images"
  },
  {
    name: "Limfjords Porter",
    type: "Stout",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.untappd.com%2Fsite%2Fbeer_logos_hd%2Fbeer-19221_8e7b6_hd.jpeg&f=1&nofb=1&ipt=67bfc363425ba04b62585fc442cecee47a6807bbd38b212bc4320dd677169c27&ipo=images"
  },
  {
    name: "Belhaven, Scottish Stout 500 ml",
    type: "Stout",
    image: "https://www.vildmedvin.dk/img/600/600/resize/5/9/59a6c695878ab13e538456e136cafc9029c7832e.jpg"
  },
  {
    name: "Samuel Smith, Imperial Stout",
    type: "Stout",
    image: "https://www.vildmedvin.dk/img/600/600/resize/i/m/imperial_stout_1.jpg"
  },
  {
    name: "Belhaven, Scottish Oat Stout 330 ml",
    type: "Stout",
    image: "https://www.vildmedvin.dk/img/600/600/resize/o/a/oat-stout.jpg"
  },
  {
    name: "Ohara's, Irish Stout",
    type: "Stout",
    image: "https://www.vildmedvin.dk/img/600/600/resize/o/h/oharas_irish_stout_vmv.jpg"
  },
  {
    name: "Belhaven, Black Scottish Stout 44 cl. CAN",
    type: "Stout",
    image: "https://www.vildmedvin.dk/img/600/600/resize/b/l/black-can.jpg"
  },
  {
    name: "Samuel Smith, Organic Chocolate Stout",
    type: "Stout",
    image: "https://www.vildmedvin.dk/img/600/600/resize/3/5/35_5_cl.jpg"
  },
  {
    name: "Samuel Smith, Oatmeal Stout 55 cl.",
    type: "Stout",
    image: "https://www.vildmedvin.dk/img/600/600/resize/o/a/oatmeal_stout_1.jpg"
  },
  {
    name: "Insel Brauerei, Stout 33 cl.",
    type: "Stout",
    image: "https://www.vildmedvin.dk/img/600/600/resize/i/n/insel_stout.jpg"
  },
  //ALE:
  {
    name: "Jacobsen Brown Ale",
    type: "Ale",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.nemligstatic.com%2Fscommerce%2Fimages%2Fjacobsen-brown-ale.jpg%3Fi%3DuD_qBU9c%2F5010682&f=1&nofb=1&ipt=a6fed7385fa4fa403899e72e7ba88152bfa26adae68e4906869222e6f129e354&ipo=images"
  },
  {
    name: "Gouden Carolus, Christmas 75 cl.",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/7/6/765.jpg"
  },
  {
    name: "Skanderborg Bryghus, Biirly Hola Ulla",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/s/k/skanderborg_hola_ulla_.jpg"
  },
  {
    name: "Skanderborg Bryghus, Kæreklar Kane Alkoholfri",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/k/_/k_reklar_kane.jpg"
  },
  {
    name: "Svaneke Bryghus, Don't Worry Hemp Ale Alkoholfri",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/p/r/premium-beer-svaneke-bryghus-dont-worry-hemp-ale-_kologisk-d_se.jpg"
  },
  {
    name: "Belhaven, Wee Heavy 330 ml",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/w/e/wee_heavy.jpg"
  },
  {
    name: "Ebeltoft Gårdbryggeri, Baltazar",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/b/a/baltazar.jpg"
  },
  {
    name: "Duvel",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/d/u/duvel_1.jpg"
  },
  {
    name: "Brasserie D'Achouffe, Mc Chouffe",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/m/c/mcchouffe.jpg"
  },
  {
    name: "Lervig, House Party",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/r/r/rrrrrrrrr.jpg"
  },
  {
    name: "Fur Bryghus, Alkoholfri Jule Ale",
    type: "Ale",
    image: "https://www.vildmedvin.dk/img/600/600/resize/2/4/24511_0.jpg"
  },
  //IPA:
  {
    name: "Ebeltoft Gårdbryggeri, Wildflower I.P.A. 33 cl",
    type: "IPA",
    image: "https://www.vildmedvin.dk/img/600/600/resize/w/i/wildflower.jpg"
  },
  {
    name: "Skovlyst, Humlebryg IPA",
    type: "IPA",
    image: "https://www.vildmedvin.dk/img/600/600/resize/h/u/humlebryg_skovlyst.jpg"
  },
  {
    name: "Ebeltoft Gårdbryggeri, Raw Power Double IPA",
    type: "IPA",
    image: "https://www.vildmedvin.dk/img/600/600/resize/j/u/jule-ipa.jpg"
  },
  {
    name: "Skovlyst, India Pale Ale",
    type: "IPA",
    image: "https://www.vildmedvin.dk/img/600/600/resize/i/n/india_pale_ale.jpg"
  },
  {
    name: "Kehrwieder, ü.NN IPA",
    type: "IPA",
    image: "https://www.vildmedvin.dk/img/600/600/resize/2/9/29995_0_1.jpg"
  },
  {
    name: "Primator IPA",
    type: "IPA",
    image: "https://www.vildmedvin.dk/img/600/600/resize/p/r/primator_ipa.jpg"
  },
  {
    name: "Sierra Nevada, Hazy Little Thing",
    type: "IPA",
    image: "https://www.vildmedvin.dk/img/600/600/resize/h/a/hazy_little_thing.jpg"
  },
  {
    name: "Brewdog, Elvis Juice 44 cl.",
    type: "IPA",
    image: "https://www.vildmedvin.dk/img/600/600/resize/e/l/elvis_juiice_44_cl..jpg"
  },
  //Pilsner:

  {
    name: "Hancock, Høkerbajer",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/h/_/h_ker.jpg"
  },
  {
    name: "Hancock, Old Gambrinus Light",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/o/l/old_light.jpg"
  },
  {
    name: "Estrella Damm, Barcelona 33 cl. Can",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/b/a/barcelona_d_se.jpg"
  },
  {
    name: "Thisted Bryghus, ØKO Thy Pilsner 33 cl.",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/f/f/ffffff.jpg"
  },
  {
    name: "Ayinger, Bayrish Pils 33 cl.",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/t/r/trtt.jpg"
  },
  {
    name: "Moosehead, Cracked Canoe",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/m/o/moosehead_cracked_canoe.jpg"
  },
  {
    name: "Alhambra Reserva 1925",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/p/r/premiumbeer-alhambra-reserva1.jpg"
  },
  {
    name: "Garage Bryggeri, Rute 2 - Øko. Pilsner",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/g/a/garage_bryggeri_rute_2_vmv.jpg"
  },
  {
    name: "Amager Bryghus, Panzer Pils",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/d/d/ddd_2.jpg"
  },
  {
    name: "Hvide Sande Bryghus, Tørfisk Pilsner",
    type: "Pilsner",
    image: "https://www.vildmedvin.dk/img/600/600/resize/t/_/t_rfisk_pilsner.jpg"
  },
  //LAGER:
  {
    name: "Carlsberg",
    type: "Lager",
    image: "https://shop.carlsbergdanmark.dk/-/media/DK/Content_images/2022/22_10/CS0029_carlsbergpilsner.jpg"
  },
  {
    name: "Tuborg Grøn",
    type: "Lager",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpotio.dk%2Fwp-content%2Fuploads%2F2020%2F09%2Ftuborg-gron-flaske-1024x1024.png&f=1&nofb=1&ipt=5e19f7cda8416eb15116d70881debaf14ca0ca6bfa92735cf3aee9da18717718&ipo=images"
  },
  {
    name: "Hancock, Black Lager",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/b/l/black_lager.jpg"
  },
  {
    name: "Thisted Bryghus, Porse Guld 33 cl.",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/p/o/porse.jpg"
  },
  {
    name: "Thisted Bryghus, Cold Hawaii, Blå",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/2/7/27358_0_2.jpg"
  },
  {
    name: "Stone, Buenaveza Lager",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/s/s/ssss_1_2.jpg"
  },
  {
    name: "König Ludwig Dunkel",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/g/g/ggg_1.jpg"
  },
  {
    name: "Hornbeer, Økologisk Godt øl Classic",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/h/o/hornbeer-godt-oel-classic-oekologisk.jpg"
  },
  {
    name: "Ayinger, Kellerbier 50 cl.",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/a/y/ayinger_kellerbier_flasche.jpg"
  },
  {
    name: "Hornbeer, Økologisk Czech Cat",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/2/8/28932_0.jpg"
  },
  {
    name: "SKØL, Proviant",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/s/k/skol_proviant.jpg"
  },
  {
    name: "Föroya Bjór, Gull",
    type: "Lager",
    image: "https://www.vildmedvin.dk/img/600/600/resize/g/u/gull.jpg"
  }








];

const renderBeers = (filter = '') => {
  beerContainer.innerHTML = '';
  beerItems.forEach(beer => {
    if (filter === 'all' || filter === beer.type) {
      const beerEl = document.createElement('div');
      beerEl.classList.add('beer-item');
      beerEl.innerHTML = `
                    <img src="${beer.image}" alt="${beer.name}" />
                    <h3>${beer.name}</h3>
                    <p>Type: ${beer.type}</p>
                `;
      beerContainer.appendChild(beerEl);
    }
  });
}

renderBeers();

const filters = document.querySelectorAll('.filter');
filters.forEach(filter => {
  filter.addEventListener('click', (e) => {
    const currentFilter = e.target.getAttribute('data-filter');
    selectedFilter = currentFilter;
    filters.forEach(f => f.classList.remove('selected'));
    e.target.classList.add('selected');
    renderBeers(currentFilter);
  });
});
