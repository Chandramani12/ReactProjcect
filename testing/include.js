class IncludeElement extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){

        const src=this.getAttribute("src");
        if(src){
            fetch(src)
               .then(response => response.text())
               .then(data=>{
                this.innerHTML=data;
            })
                .catch(error=>{
                    console.error(`Error locading ${src}:`,error);
                });
        }
        
    }
}
customElements.define("my-include",IncludeElement);
