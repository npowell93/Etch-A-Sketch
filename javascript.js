let btn = document.getElementById("start");
btn.addEventListener('click',createGrid);

function createGrid(){
    var Container = document.getElementById('container');
    Container.textContent = ''

    let numberOfRows = prompt("How many rows do you want?");
    let i = 0;
    let x = numberOfRows * numberOfRows;

    document.documentElement.style.setProperty("--columns-row", numberOfRows);
    for (i=0;i<x;i++){
        var div = document.createElement('div');
        document.getElementById('container').appendChild(div);
        div.addEventListener('mouseenter',function(){
        this.style.backgroundColor = 'red';
        });
    }
}
