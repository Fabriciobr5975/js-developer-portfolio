
async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/Fabriciobr5975/js-developer-portfolio/refs/heads/main/profile.json";
    return (await fetch(url)).json();
}