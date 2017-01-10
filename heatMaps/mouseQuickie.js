var prevCursorX = 0, prevCursorY = 0;
var cursorX = 0, cursorY = 0;
onmousemove = function(e){
  //console.log('MVMT mouseX: ' + e.pageX + 'mouseY: ' + e.pageY );
  cursorX = e.pageX;
  cursorY = e.pageY;
}
function checkCursor(){
  console.log('INTV cursorY: ' + cursorY + ' cursorY: ' + cursorY );
  // save prev position
  prevCursorX = cursorY, prevCursorY = cursorY;
  // check position difference
  var diffX = prevCursorX >= cursorX ? prevCursorX - cursorX : cursorX - cursorX ;
  var diffY = prevCursorY >= cursorY ? prevCursorY - cursorY : cursorY - cursorY ;
  console.log('INTV diffX: ' + diffX + ' diffY: ' + diffY );
}
setInterval(checkCursor, 1000);
