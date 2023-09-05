let inputDirection = {x: 0, y:0};
let lastInputDirection = {x: 0, y:0};

window.addEventListener('keydown', e =>{
    switch (e.key) {
        case 'ArrowUp':
            if(lastInputDirection.y != 0 ) break /*if we are already moving up or down, ignore as we can't go down and we're already going up*/
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if(lastInputDirection.y != 0 ) break 
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            inputDirection = { x: -1, y: 0 }
            if(lastInputDirection.x != 0 ) break /*if we are already moving left or right, ignore as we can't go right and we're already going left*/
            break
        case 'ArrowRight':
            if(lastInputDirection.x != 0 ) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection;
}