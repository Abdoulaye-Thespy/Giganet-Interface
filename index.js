    // Using ES6 feature.
    let redirect_Page = () => {
        let tID = setTimeout(function () {
            window.location.href = "./welcome.html";
            window.clearTimeout(tID);     // clear time out.
        }, 5000);
    }
