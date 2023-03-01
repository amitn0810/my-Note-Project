function Notes(mission, date, time) {
    this.iddelete = Math.ceil(Math.random() * 99999999999)
    this.Numbernote = numbernote++
    this.Mission = mission || `Dont Write a Mission`
    this.Date = date || `Dont Inset Date`
    this.Time = time || `Dont Inset Time`
}