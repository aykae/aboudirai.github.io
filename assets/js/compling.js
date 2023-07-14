const genBtn = document.querySelector("#genBtn");

genBtn.addEventListener("click", async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const sentObj = await response.json();
        console.log(sentObj);
        
        document.querySelector("#sentence").innerText = sentObj["title"] + " " + (Math.random() * 10.0)
    } catch (error) {
        console.log("Error fetching sentence")
    }
});