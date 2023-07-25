const genBtn = document.querySelector("#genBtn");

genBtn.addEventListener("click", async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/clapps/gensent/",
        {
            method: "GET",
        });
        const sentObj = await response.json();
        console.log(sentObj);
        
        document.querySelector("#sentence").innerText = sentObj["sentence"]
    } catch (error) {
        console.log("Error fetching sentence")
    }
});