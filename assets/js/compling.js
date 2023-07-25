const genBtn = document.querySelector("#cl-gen-btn");

genBtn.addEventListener("click", async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/clapps/gensent/",
        {
            method: "GET",
        });
        const sentObj = await response.json();
        console.log(sentObj);
        
        document.querySelector("#cl-sent-box").innerText = sentObj["sentence"]
    } catch (error) {
        console.log("Error fetching sentence")
    }
});