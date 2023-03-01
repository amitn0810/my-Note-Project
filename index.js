let numbernote = 1
const note = {
    mission: null,
    date: null,
    time: null,
    notes: null,
}
let ArrayNotes = JSON.parse(localStorage.getItem("notes")) || []
function init() {
    note.mission = document.querySelector("#textarea");
    note.date = document.querySelector("#date");
    note.time = document.querySelector("#time");
    note.notes = document.querySelector("#jsnotes");
    const buttonaddnote = document.querySelector("#addnote");
    const buttonclear = document.querySelector("#clear");
    buttonaddnote.addEventListener("click", function () {
        ArrayNotes.push(new Notes(note.mission.value, note.date.value, note.time.value))
        addnote(ArrayNotes)
        localStorage.setItem("notes", JSON.stringify(ArrayNotes))
    })
    buttonclear.addEventListener("click", clearall)
    addnote(ArrayNotes)

}


function addnote(arraynotes) {
    if (Array.isArray(arraynotes === false)) return
    clear()
    for (let index = 0; index < arraynotes.length; index++) {
        const currentnote = arraynotes[index];
        const h1note = document.createElement("h5")
        h1note.innerText = `Mission:${currentnote.Numbernote}`
        h1note.style.textAlign = "center";
        const ptextarea = document.createElement("p")
        ptextarea.innerText = currentnote.Mission
        ptextarea.id = "textareanote"
        const pdate = document.createElement("p")
        pdate.innerText = currentnote.Date
        const ptime = document.createElement("p")
        ptime.innerText = currentnote.Time
        ptime.id = "timenote"
        pdate.id = "datenote"
        const div = document.createElement("div")
        div.id = "divnote"
        const hr = document.createElement("hr")
        hr.style.width = "230px"
        const thumbtackpng = thumbtack()
        const divaftertoggle = toggle(div, currentnote.Numbernote)
        const deletebutton = getdeletebutton(currentnote.iddelete)
        divaftertoggle.append(thumbtackpng, deletebutton, h1note, ptextarea, hr, pdate, ptime)
        note.notes.append(div)
        clearform()
    }

}

function clear() {
    note.notes.innerHTML = "";
}
function toggle(div, id) {
    if (id % 2 == 0) {
        div.style.backgroundImage = "url('image//yellow.png')"
        div.style.transform = "rotate(20deg)";
        div.style.border = "none"
    } else if (id % 2 == 1) {
        div.style.backgroundImage = "url('image//green.png')"
        div.style.backgroundSize = "cover"
        div.style.transform = "rotate(340deg)";
        div.style.border = "none"
    }
    div.onmouseover = function () {
        div.style.transform = "rotate(0deg)";
    }
    div.onmouseleave = function () {
        toggle(div, id)
    }
    return div
}
function thumbtack() {
    const thumbtackpng = document.createElement("img")
    thumbtackpng.src = "https://static.vecteezy.com/system/resources/thumbnails/011/421/124/small/glossy-red-push-pin-png.png"
    thumbtackpng.style.width = "30px"
    return thumbtackpng
}
function getdeletebutton(iddeleted) {
    const icondelete = document.createElement("i")
    icondelete.className = "bi bi-x-lg"
    icondelete.style.width = "30px"
    icondelete.style.border = "2px solid black"
    icondelete.style.position = "absolute"
    icondelete.style.left = "220px"
    icondelete.id = "icondelete"
    icondelete.onclick = function () {
        for (let index = 0; index < ArrayNotes.length; index++) {
            if (iddeleted === ArrayNotes[index].iddelete) {
                ArrayNotes.splice(index, 1)
            }
        }
        localStorage.setItem("notes", JSON.stringify(ArrayNotes))
        addnote(ArrayNotes)
    }
    return icondelete
}
function clearform() {
    note.mission.value = ""
    note.date.value = ""
    note.time.value = ""
}
function clearall() {
    ArrayNotes = []
    addnote(ArrayNotes)
    localStorage.setItem("notes", JSON.stringify(ArrayNotes))
}

init()