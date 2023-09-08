class Pointer {
    constructor(root) {
        this.root = root;
        this.activeClass = 'btn_active';
    }

    isBelongNode(node) {
        return this.root.contains(node) || this.root == node;
    }

    toggle() {
        this.root.classList.toggle(this.activeClass);
    }

    disable() {
        this.root.classList.remove(this.activeClass);
    }
}

const pointerNodes = document.querySelectorAll('.btn');
let pointers = [];
if(pointerNodes.length > 0) {
    pointerNodes.forEach((pointerNode) => {
        pointers.push(new Pointer(pointerNode));
    })
}

document.addEventListener('click', (event) => {
    let target = event.target;
    pointers.forEach((pointer) => {
        if(pointer.isBelongNode(target)) {
            pointer.toggle();
        }
        else {
            pointer.disable();
        }
    })
})