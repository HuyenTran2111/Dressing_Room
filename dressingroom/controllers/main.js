let selectedTab = document.getElementsByClassName('nav-link');

let listChose = new ListChose();

const changeTab = () => {
    for(let element of selectedTab) {
        element.onclick = (event) => {
            for(let tab of selectedTab) {
                tab.classList.remove('active');
            }
            element.classList.add('active');
            renderImages(event.target.dataset.category, 
                        event.target.dataset.type, 
                        Number(event.target.dataset.length));
        };
    }
}

const renderImages = (category, type, length) => {
    let render = '';
    for(let i = 1; i <= length ; i++) {
        render += `
        <div class="col-3">
            <div class="item px-4 py-4">
                <div class="item-img">
                    <img
                    src="./assets/images/${category}/${type}${i}_show.jpg"
                    class="img-fluid img-${i}"
                    alt=""
                    />
                </div>
            <div class="item-detail text-center py-3">
            <h6 class="name-${i}">${type} ${i}</h6>
            <button class="w-100" onclick ="changeOutfit(${i},'${category}','${type}')">Thử đồ</button>
            </div>
            </div>
        </div>
        `
    }
    document.getElementsByClassName('tab-content')[0].innerHTML = render;
}

const changeOutfit = (i,category,type) => {
    const name = document.querySelector(`.name-${i}`).textContent;
    if(type != 'background') {
        const img = `/dressingroom/assets/images/${category}/${type}${i}.png`;
        let choseItem = new ChoseItem (name,img,type);
        listChose.addNewImages(choseItem);
        listChose.renderOutfit();
        console.log(listChose.list);
    }
    else {
        const img = `/dressingroom/assets/images/${category}/${type}${i}.jpg`;
        let choseItem = new ChoseItem (name,img,type);
        listChose.addNewImages(choseItem);
        listChose.renderOutfit();
        console.log(listChose.list);
    }
    
} 

renderImages("clothes","topcloth",6);
changeTab();