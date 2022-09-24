document.querySelector('.add').onclick = function(){
    if(document.querySelector(".requirement input").value.length == 0){
        alert("lütfen ürün giriniz...")
    }
   

    
    else{
        document.querySelector('#tag').innerHTML += `
        <div class="list">
            <span id="listname">
                ${document.querySelector('.requirement input').value}
            </span>
            
            <button class="delete">
                <i class='bx bxs-check-square' ></i>
            </button>
        </div>
        `;

        var current_list = document.querySelectorAll(".delete");
        for(var i=0; i<current_list.length; i++){
            current_list[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var list = document.querySelector(".list");
        for(var i=0; i<list.length; i++){
            list[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector(".requirement input").value = ""; 

    }
}