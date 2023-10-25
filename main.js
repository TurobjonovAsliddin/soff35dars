let faol_select =$('#faol_select')
const Bar = $("#bars")
const subbox =$('.menu-subbox');
let Hello =$('#Hello')
let moon__sun =$('#moon__sun')

let ismUser =$('#ism')
let tashkilot =$('#tashkilot')
let nomer =$('#nomer')
let email =$('#email')
let guruh =$('#guruh')
let addUser_btn =$('#addUser')


let tbody =$('tbody')

   function makeCard(params){
     tbody.html('')
    params.map((arr) => {

        let tr = `
        <tr>
           <td>${arr.name}</td>
           <td>${arr.company}</td>
           <td>${arr.phone}</td>
           <td>${arr.email}</td>
           <td>${arr.group}</td>
           <td>${arr.status? "<button class='active_btn'>Active</button>":"<button class='inactive_btn'>InActive</button>"}
           </td>
        </tr>

        `
        

         tbody.append(tr)
    })
   }
   makeCard(tables)

let search_input = $('#search_input')
    function searchFunc() {
        let result = tables.filter((arr, index) => {
            return arr.name.includes(search_input.val())
        })
        console.log(result);
        makeCard(result)
    }

     Bar.on('click',(e)=>{
        console.log("active added");
        subbox.toggleClass('active')
    })


    

    function selectFunc(){
         if (faol_select.val()== "barcha"){

             makeCard(tables)
         }


        else{
            let result = tables.filter((arr, index) => {
            return String(arr.status)==faol_select.val()
               
               })
               makeCard(result)
        }


    }


function addUser(){
    tables.push({
        name:ismUser.val(),
        company:tashkilot.val(),
        phone:nomer.val(),
        email:email.val(),
        group:guruh.val(),
        status:false
    })
    makeCard(tables)
}

addUser_btn.on('click' , addUser)





function MoonSun(){
    Hello.toggleClass('moon')
    Hello.toggleClass('sun')
    moon__sun.toggleClass('fa-moon')
    moon__sun.toggleClass('fa-sun')
}
