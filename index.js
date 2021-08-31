function genEmail(){
    const domains = ["gmail.com" , "wp.pl" , "onet.pl" , "o2.pl", "hotmail.com" , "yahoo.com"]
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrsuvwxyz+-_~"
    const emailLenght = Math.floor((Math.random() * 32) + 1)
    var email = ""
    for(var i, i=0; i < emailLenght; i++){
        email += letters.charAt(Math.floor(Math.random() * letters.length))
    }
    return email + "@" + domains[Math.floor(Math.random()*domains.length)]

}
console.log(genEmail())