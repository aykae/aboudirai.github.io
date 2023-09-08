const genBtn = document.querySelector("#cl-gen-btn");
genBtn.addEventListener("click", async () => {
    try {
        const response = await fetch("https://hpn7vzaxswwi3coxajv2erym7u0nqpen.lambda-url.us-east-1.on.aws/",
        {
            method: "GET",
        });
        const sentObj = await response.json();
        console.log(sentObj);
        
        document.querySelector("#cl-sent-box").innerText = sentObj["sentence"];
        new TypeIt("#cl-sent-box", {
            speed: 50,
        }).go();

    } catch (error) {
        console.log("Error fetching sentence")
    }
});
