const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}
function onMouseMove(event){
    /* screenX/Y : 사용자 기기 화면내에서의 마우스 위치
     * clientX/Y : 전체 윈도우 창 내에서의 마우스 위치
     * offsetX/Y : canvas 내에서의 마우스 위치 */
     const x = event.offsetX,
        y = event.offsetY;
    
}
function onMouseDown(event){
    painting = true;
}
function onMouseUp(event){
    stopPainting();
}

if (canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}