let btn = document.querySelector("button");
let url = "https://catfact.ninja/fact";
// Random dog api 
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let fact = await getfact();
    let p = document.querySelector("#result");
    p.innerText = fact;
});


async function getfact(params) {

    try {
        let res = await axios.get(url);
        return res.data.fact;

    }
    catch (err) {
        console.log("error");
    }
}

let dbtn = document.querySelector("#dog_button");
dbtn.addEventListener("click", async () => {
    let dog_img=await dog_image();
    let pic=document.querySelector("img")
    pic.setAttribute("src",dog_img);
    console.log(" dog button click");
})
async function dog_image(params) {
    try {
        let result = await axios.get(url2);
        return result.data.message;
    }
    catch{

    }
    
    
}