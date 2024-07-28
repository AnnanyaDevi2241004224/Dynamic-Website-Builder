function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    let years = Math.floor(monthsOld / 12);
    let months = monthsOld % 12;
    let timeAgoStr = "";

    if (years > 0) {
        timeAgoStr += years + " year" + (years > 1 ? "s" : "");
    }
    if (months > 0) {
        if (years > 0) {
            timeAgoStr += " ";
        }
        timeAgoStr += months + " month" + (months > 1 ? "s" : "");
    }
    if (years === 0 && months === 0) {
        timeAgoStr = "less than a month";
    }

    let html= `<div class="container">
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="5star">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} . ${viewStr} views . ${timeAgoStr}</p>

            </div>
        </div>
    </div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}


createCard("Do nothing | Eat 5 Starrrrrr", "Hehehehehehe", 560, 7, "31:22", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXWtd8pb2nrh9BRDYVOH61xib2_BawPP9Cw&s")
createCard("Believe in God | Nothing Can Be Wrong", "GodEveryWhere", 560000, 18, "31:22", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PnEGucxMUwLZF4N0UAmLcdPY_Dmmb_HdwA&s")
createCard("Virat Kohli | The Ultimate Goat", "ViratTheGoat", 18000000000000, 1800, "31:22", "https://femina.wwmindia.com/content/2023/dec/virat-kohli-thumb1702286545.jpg")