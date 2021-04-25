const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.banner-bar {
    background-color: rgba(140, 144, 143, 0.84);
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}
h1 {
    font-family: sans-serif;
    font-size: 7vw;
}
p {
    font-family: 'sans-serif', sans-serif;
    position: relative;
    left: 12px;
}
h2 {
    font-family: 'sans-serif', sans-serif;
    position: relative;
    font-size: 17px;
    left: 12px;
}
.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: rgb(240, 238, 238);
    box-shadow: 2px 5px 5px black;
    border-top-left-radius: 10px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: rgb(95, 154, 214, 1);
    border: 2px solid rgb(95, 154, 214, 1);
    width: 246px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;