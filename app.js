<<<<<<< HEAD
function findPos(obj) {
	var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curleft,curtop];
    }
=======
function findPos(obj) {
	var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curleft,curtop];
    }
>>>>>>> 21bcd221aa18325e29ce493e44620a1de28d8b48
}