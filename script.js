
function toggleCard(e) {
    if(e.target.innerText == 'middle') {
       e.target.innerText = 'right' 
       e.target.href = '#right'          
    } else{
       e.target.innerText = "middle"
       e.target.href = "#middle"          
    }             
}



 <article class="postCard">
   <div class="mainCard">
     <div class="post_header">
       <p>
         <img src="esutlogo.jpg" alt="esutlogo" />
         <span>@besongdilan</span>
       </p>
     </div>
     <p id="postText">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore
       officiis laudantium totam eos quibusdam, exercitationem animi neque?
       Ipsam quod excepturi doloribus veniam natus, repellat vero unde ut
       laborum eligendi.
     </p>
   </div>

   <div class="all_suggestions">
     <div class="sugg_slide">
       <article class="suggestion_card">
         <div class="sugg_image">
           <img src="esutlogo.jpg" alt="" />
         </div>
         <p>Tekno hermann</p>
         <div class="sugg_button">
           <button>Add</button>
           <button>Decline</button>
         </div>
       </article>
     </div>
   </div>
 </article>;
