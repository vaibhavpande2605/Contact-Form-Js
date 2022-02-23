

const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    const subject = (inputs.elements["subject"].value.trim())
    const phone = (inputs.elements["phone"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !subject.length>0 || !msg.length > 0 || !phone.length > 0) {
        alert("All fields are mandatory ⚠️⚠️⚠️")
        return
    }
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "b9f4f8a1220905",
        Password: "0d8dbfccfd65b2",
        To: "vaibhavpande193@gmail.com",
        From: email,
        Subject: `Message from ${name}`,
        Body:"Name: "+name+ "<br><br>Email: "+email+ "<br><br>Phone: "+phone+"<br><br>Subject: " +subject + "<br><br>Message: " + msg+ "<br>"
    }).then(msg => alert("Message Successfully Sent 👍👍✅"))
})

// 🚫❌🚷✅❕❕❕❗❗❗❗