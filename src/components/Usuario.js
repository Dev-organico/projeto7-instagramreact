import { useState } from "react"

export default function Usuario() {
    let start_img = "assets/img/catanacomics.svg"
    let [user , setUser] = useState("Catana")
    let [user_img , setUser_img] = useState(start_img)

    function change_user(){
        setUser(prompt("Qual o seu nome?"))
    }

    function change_img(){
        setUser_img(prompt("Qual a url da sua imagem?"))
    }



    return (
        <div data-test="user" class="usuario">
            <img data-test="profile-image" onClick={change_img}src={!user_img? start_img:user_img} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {!user? "Catana":user}
                    <ion-icon data-test="edit-name" onClick={change_user} name="pencil"></ion-icon>
                </span>
            </div>
        </div>

    )

}