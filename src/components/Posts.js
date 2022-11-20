import { useState } from "react"




export default function Posts() {
    let list_posts = [
        {img1:"assets/img/meowed.svg",img2:"assets/img/gato-telefone.svg",img3:"assets/img/respondeai.svg",text1:"meowed",liked_by:"respodeai", likes:101523},
        {img1:"assets/img/barked.svg",img2:"assets/img/dog.svg",img3:"assets/img/adorable_animals.svg",text1:"barked",liked_by:"adorable_animals", likes:99159}
    ]

    return (
        <div class="posts">
            {list_posts.map((i)=> <Post img1={i.img1} img2={i.img2} img3={i.img3} text1={i.text1} liked_by={i.liked_by} likes={i.likes}/>)}
        </div>
    )
}



function Post(props){
    let [mark_type , setIcon_type] = useState("bookmark-outline")
    let [heart_type , setHeart_type] = useState("heart-outline")
    let [style_heart , setStyle_heart] =useState({color:"#000000"})
    let [likes , setLikes] =useState(props.likes)

    function mark(){
        if (mark_type === "bookmark-outline")
        {setIcon_type("bookmark")}
        else
        {setIcon_type("bookmark-outline")}
        
    }

    function like_icon(){
        if(heart_type === "heart-outline" )
        {
            setHeart_type("heart")
            setStyle_heart({color:"#ed4956"})
            setLikes(likes + 1)

        }
        else{
            setHeart_type("heart-outline")
            setStyle_heart({color:"#000000"})
            setLikes(likes - 1)
            
        }

    }

    function like_img(){
        if(heart_type === "heart-outline" )
        {
            setHeart_type("heart")
            setStyle_heart({color:"#ed4956"})
            setLikes(likes + 1)

        }
        
    }

    return(
        <div class="post" data-test="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.img1}/>
                        {props.text1}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img data-test="post-image" onClick={like_img} src={props.img2} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon
                            data-test="like-post"
                            onClick={like_icon}
                            style={style_heart}
                            name={heart_type}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon 
                            data-test="save-post"
                            onClick={mark}
                            
                            name={mark_type}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.img3} />
                        <div class="texto">
                        Curtido por <strong>{props.liked_by}</strong> e <strong data-test="likes-number">outras {likes} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}