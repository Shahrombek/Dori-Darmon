const data = [
  {
    url: "/images/medicine.png",
    title: "Анальгин амп. 50% 2мл №10",
  },
  {
    url: "/images/medicine.png",
    title: "Страмол  амп. 50% 2мл №10",
  },
  {
    url: "/images/medicine.png",
    title: "Парестамол  амп. 50% 2мл №10",
  },
  {
    url: "/images/medicine.png",
    title: "Мукалтин амп. 50% 2мл №10",
  },
]
var renderData = data;

const SearchBody = document.querySelector('#search__body');



const render = () => {

  SearchBody.innerHTML = '';

  renderData.map((item) => {
    const div = document.createElement('a');
    div.classList.add('SearchBodyitem')
    div.href = "searchitem.html";

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('search__img');

    const img = document.createElement('img');
    img.src = item.url;
    imgDiv.append(img);


    const textDiv = document.createElement('div');
    textDiv.classList.add('text__title');

    const p = document.createElement('p');
    p.classList.add('item__title');
    p.textContent = item.title

    const span = document.createElement('span');
    span.innerHTML = '<i class="icon-longright"></i>'


    textDiv.append(p, span);

    div.append(imgDiv, textDiv);


    SearchBody.append(div);
  })

}

render();




const headerRes = document.querySelector('.result');
const input = document.querySelector('#input');


input.addEventListener('input', function (e) {
  headerRes.textContent = `Результаты поиска “${e.target.value}”`

  const searchRes = data.filter((item) => {
    console.log(item)
    return item.title.includes(e.target.value);
  })
  console.log(searchRes);
  renderData = searchRes;
  render();

})


