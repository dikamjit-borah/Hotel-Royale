
//console.log(password_id);

document.getElementById("submit").onclick = function(e){
    	e.preventDefault();

    	let email_id = document.getElementById("email_id").value;
//console.log(email_id);
        let password_id = document.getElementById("password_id").value;
        
        console.log(email_id);
        console.log(password_id);

        let t_user = 0;
        let p_user = 0;

    	firebase.database().ref('Admin').on('value',(snap)=>{
            
            snap.forEach((element, index) => {   //forEach is a loop where element carry the value and index carry the array index. 
              t_user = t_user + 1;                               
           });

            snap.forEach((element, index) => {   //forEach is a loop where element carry the value and index carry the array index. 
                // let name = snap.val();
                let obj = element.val();
                let username = element.key; // "key" is a keyword, it return the current node. let name = obj.key, why this is wrong.
                // console.log(t_rooms);
                let admin = obj.admin;
                // console.log(age);
                let email = obj.email;
                let password = obj.password;
               // console.log(password);
                p_user = p_user + 1; 

                if(email === email_id && password === password_id){
                        if (admin === true || admin == "true") {
                            window.location.replace("./admin.html");
                            document.getElementById("adminInfo").innerHTML = `welcome ${username}`;     
                        }
                        else{
                            window.location.replace("./manager.html");
                            document.getElementById("managerInfo").innerHTML = `welcome ${username}`;
                        }
                        // console.log("Welcome user");
                       // window.location.href = "./index.html";
                        // window.location.replace("./index.html");
                    }
                else{
                	console.log("Invalid user");
                    if (t_user === p_user) {
                        document.getElementById("loginInfo").innerHTML = "Invalid user";
                    } 
                }    
                    
                    // else if(room_status === "active")
                    // {
                    //     t_active = t_active + 1;
                    // }
                                                       
           });

    });
  }

