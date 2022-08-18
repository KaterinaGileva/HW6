const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Добавь минимальное оформление галереи флексбоксами 
//или гридами через CSS классы.

//список флекс, между лишками марджины или геп прописать. 
//На фото задать высоту и ширину по лишке, в общем минимальную сетку сделать


for (const image of images)
{const gallery = document.querySelector(".gallery");

  gallery.insertAdjacentHTML('afterbegin', `<li><img src = "${image.url}"
 alt = "${image.alt}" width = "90%vw" height = "90%vh" </li>`);
}



console.log(images);