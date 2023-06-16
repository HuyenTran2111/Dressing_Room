class ListChose {
    constructor() {
        this.list = [];
    }
    addNewImages (item) {
        let availibleItem = this.list.find((product) => product.type === item.type);
        if(availibleItem != undefined) {
            let index = this.list.findIndex((product) => product.type === availibleItem.type);
            if(index != -1) {
                this.list.splice(index,1);
                this.list.push(item);
            }
            else {
                this.list.push(item);
            }
        }
        else {
            this.list.push(item);
        }
    }
    renderOutfit () {
        this.list.forEach((item) => {
            let itemEl = document.querySelector(`.${item.type}`);
            itemEl.style.backgroundImage  = `url(${item.img})`;
            console.log(item.img)
            console.log(1)
        })
    }
}