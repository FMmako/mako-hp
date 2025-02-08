// ヘッダ
fetch("/mako-hp/header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#header").innerHTML = data);

// フッタ
fetch("/mako-hp/footer.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#footer").innerHTML = data);