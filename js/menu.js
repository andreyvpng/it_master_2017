/*
 * Menu 
 */

target.onclick = function(){
    if (menu.classList[0] == "undefined")
        menu.classList = "closed";
    
    if (menu.classList[0] == "closed")
        menu.classList = "";
}