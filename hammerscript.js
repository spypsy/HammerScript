var body = document.getElementsByTagName('body')[0];
var mc = new Hammer(body);
mc.on("panleft panright", function(ev) {
    console.log(ev.type +" gesture detected.");
});
