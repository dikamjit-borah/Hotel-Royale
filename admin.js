const home_view = document.getElementById("home_view");
const create_room = document.getElementById("create_room");
// console.log(create_room);
const book_room = document.getElementById("book_room");
const room_view = document.getElementById("room_view");
const customer_profile = document.getElementById("customer_profile");
const create_manager = document.getElementById("create_manager");
let logout = document.getElementById("logout");
const front_page = document.getElementById("front_page");

const homeView = () => {

	let t_rooms = 0;
	let t_booked = 0;
	let t_active = 0;
	let t_maintaince = 0;

	firebase.database().ref('Rooms').on('value',(snap)=>{
            

            snap.forEach((element, index) => {   //forEach is a loop where element carry the value and index carry the array index. 
                // let name = snap.val();
                
                let obj = element.val();
                let room_no = element.key; // "key" is a keyword, it return the current node. let name = obj.key, why this is wrong.
                t_rooms = t_rooms + 1;
                // console.log(t_rooms);
                let floor_no = obj.FloorNo;
                // console.log(age);
                let room_amenities = obj.RoomAmenities;
                let room_status = obj.RoomStatus;
                console.log(room_status);
                if(room_status === "booked")
                    {
                        t_booked = t_booked + 1;
                    }
                    
                    else if(room_status === "active")
                    {
                        t_active = t_active + 1;
                    }
                    
                    else if(room_status === "maintance")
                    {
                        t_maintaince = t_maintaince + 1;
                    }
                let room_type = obj.RoomType;
                 //console.log(obj.length);

                front_page.innerHTML = `<div>
				 <p id="myimg1" src="" style="height: 200px; width: 200px; border: 2px solid black; float:left">
				   <span>Total Bookings</span><br>
				   <span id="t_booked">${t_booked}</span>
				 </p>
			     <p id="myimg2" src="" style="height: 200px; width: 200px; border: 2px solid black; float:left">
			       <span id="t_rooms">Total Rooms</span><br>
				   <span>${t_rooms}</span>
			     </p>
			     <p id="myimg3" src="" style="height: 200px; width: 200px; border: 2px solid black; float:left">
			       <span id="t_active">Active Rooms</span><br>
				   <span>${t_active}</span>
			     </p>
			     <p id="myimg4" src="" style="height: 200px; width: 200px; border: 2px solid black; float:left">
			       <span id="t_maintaince" name="t_maintaince">Rooms in maintenance
				   </span><br>
				   <span id="t_maintaince2">${t_maintaince}</span>
			     </p>
			     </div>`;

                      
           });
    });
     
} 

 // function to create room
const createRoom = () => {
	// document.getElementById("create_room").style.color = "red";
	 front_page.innerHTML = `<form name="forms" action="">
	                          <h3>Room Creation</h3>

	                          <br><label for="rno">Room No:</label><br>
                              <input type="text" id="room_no" name="room_no" ><br>

                              <br><label for="fno">Floor No:</label><br>
                              <input type="text" id="floor_no" name="floor_no" value=""><br>

                              <br><p>Room Type:</p>
                              <input type="radio" id="normal" name="room" value="normal">
							  <label for="normal">Normal</label><br>
							  <input type="radio" id="deluxe" name="room" value="deluxe">
							  <label for="deluxe">Deluxe</label><br>
							  <input type="radio" id="superdeluxe" name="room" value="super deluxe">
							  <label for="super deluxe">Super Deluxe</label>
                              
                              <br><br><p>Amenities:</p>
                              <p>Table is a default amenities.</p>
							  <input type="checkbox" id="bed" name="amenities" value="Bed">
							  <label for="bed">Bed</label><br>
							  <input type="checkbox" id="ac" name="amenities" value="A/C">
							  <label for="ac">A/C</label><br>
							  <input type="checkbox" id="bathroom" name="amenities" value="Bath Room">
							  <label for="bathroom">Bath Room</label><br>

							  <br><p>Status:</p>
                              <input type="radio" id="active" name="status" value="active">
							  <label for="active">Active</label><br>
							  <input type="radio" id="booked" name="status" value="booked">
							  <label for="booked">Booked</label><br>
							  <input type="radio" id="maintance" name="status" value="maintance">
							  <label for="maintance">Maintance</label><br>
							  <br><input id="submit" type="submit" value="Submit">
							</form>`;
    let createRoomHtml = front_page.innerHTML;
    // console.log(createRoomHtml.id="room_no");
    let roomId = createRoomHtml.id="room_no";
    let floorId = createRoomHtml.id="floor_no";
    let normalId = createRoomHtml.id="normal";
    let deluxeId = createRoomHtml.id="deluxe";
    let superdeluxeId = createRoomHtml.id="superdeluxe";
    let bedId = createRoomHtml.id="bed";
    let acId = createRoomHtml.id="ac";
    let bathroomId = createRoomHtml.id="bathroom";
    let activeId = createRoomHtml.id="active";
    let bookedId = createRoomHtml.id="booked";
    let maintanceId = createRoomHtml.id="maintance";
    let submitId = createRoomHtml.id="submit";

    document.getElementById(submitId).onclick = function(e){
    	e.preventDefault();

        // Here we store values for a the particular id.
	    let roomNo = document.getElementById(roomId).value;
	    console.log(roomNo);
	    let floorNo = document.getElementById(floorId).value;
	    console.log(floorNo);
	    let typeNormal = document.getElementById(normalId).value;
	    //console.log(typeNormal);
	    let typeDeluxe = document.getElementById(deluxeId).value;
	    //console.log(typeDeluxe);
	    let typeSuperdeluxe = document.getElementById(superdeluxeId).value;
	    //console.log(typeSuperdeluxe);   
	    let amenitiesBed = document.getElementById(bedId).value;
	    //console.log(amenitiesBed);
	    let amenitiesAc = document.getElementById(acId).value;
	    //console.log(amenitiesAc);
	    let amenitiesBathroom = document.getElementById(bathroomId).value;
	    //console.log(amenitiesBathroom);
	    let statusActive = document.getElementById(activeId).value;
	    //console.log(statusActive);
	    let statusBooked = document.getElementById(bookedId).value;
	    //console.log(statusBooked);
	    let statusMaintance = document.getElementById(maintanceId).value;
	    //console.log(statusMaintance);
    	
        
	    // Here varriables will store names.
	    let room = document.getElementsByName("room");
	               for(let i=0; i<room.length; i++){
	                 	  if(room[i].checked)
		                    {
		                        var roomVal = room[i].value;
		                        console.log(roomVal);
		                    }
	                }
	    
	    var amenitiesValNew = "Table";           
	    let amenities = document.getElementsByName("amenities");
	                 for(let i=0; i<amenities.length; i++){
	                 	  if(amenities[i].checked)
		                    {
		                        var amenitiesVal = amenities[i].value;
		                        
		                        amenitiesValNew = amenitiesValNew + ","+amenitiesVal; 
		                        console.log(amenitiesValNew);
		                    }
	                 }
                    
	    let status = document.getElementsByName("status");
	                 for(let i=0; i<status.length; i++){
	                 	  if(status[i].checked)
		                    {
		                        var statusVal = status[i].value;
		                        console.log(statusVal);
		                    }
	                 }

    	firebase.database().ref("Rooms/"+roomNo).set({
    		RoomNo: roomNo,
    		FloorNo: floorNo,
    		RoomType: roomVal,
    		RoomAmenities: amenitiesValNew,
    		RoomStatus: statusVal
    	});
    }
};

 // function for booking room
const bookRoom = () => {
	// document.getElementById("create_room").style.color = "red";
	 front_page.innerHTML = `<form name="forms" action="">
	                          <h3>Booking Room</h3>

	                          <br><label for="fname">First Name:</label><br>
                              <input type="text" id="f_name" name="fname" ><br>

                              <br><label for="lname">Last Name:</label><br>
                              <input type="text" id="l_name" name="lname" value=""><br>

                              <br><label for="pnum">Phone Number:</label><br>
                              <input type="number" id="p_num" name="pnum" value=""><br>


                              <br><label for="rnum">Room Number:</label><br>
                              <input type="number" id="r_num" name="rnum" value=""><br>

                              <br><p>Gender:</p>
                              <input type="radio" id="c_male" name="gender" value="male">
							  <label for="male">Male</label><br>
							  <input type="radio" id="c_female" name="gender" value="female">
							  <label for="female">Female</label><br>
							  <input type="radio" id="c_other" name="gender" value="other">
							  <label for="other">Other<female><br>


                              <br><label for="no_p">Number of people:</label><br>
                              <input type="number" id="no_p" name="no_p" value=""><br>

							  <br><label for="check_in">Check In Time (date and time):</label>
                              <input type="datetime-local" id="check_in" name="check_in"><br>


							  <br><label for="check_out">Check out Time (date and time):</label>
                              <input type="datetime-local" id="check_out" name="check_out"><br>

							  <br><input id="submit" type="submit" value="Submit">
							  <br><p id="message"></p>
							</form>`;
    let bookRoomHtml = front_page.innerHTML;  // onclick="func();"
    // console.log(bookRoomHtml.id="room_no");
    let fnameId = bookRoomHtml.id="f_name";
    let lnameId = bookRoomHtml.id="l_name";
    let pnumId = bookRoomHtml.id="p_num";
    let rnumId = bookRoomHtml.id="r_num";
    let peoplenoId = bookRoomHtml.id="no_p";
    let checkinId = bookRoomHtml.id="check_in";
    let checkoutId = bookRoomHtml.id="check_out";
    let messageId = bookRoomHtml.id="message";
    
    let submitId = bookRoomHtml.id="submit";
   

    document.getElementById(submitId).onclick = function(e){
    	e.preventDefault();

        // Here we store values for a the particular id.
	    let firstName = document.getElementById(fnameId).value;
	    console.log(firstName);
	    let lastName = document.getElementById(lnameId).value;
	    console.log(lastName);
	    let phoneNumber = document.getElementById(pnumId).value;
	    console.log(phoneNumber);
	    let roomNumber = document.getElementById(rnumId).value;
	    let noOfPeople = document.getElementById(peoplenoId).value;
	    // //console.log(genderMale);
	    let checkIn = document.getElementById(checkinId).value;
	    // //console.log(genderFemale);   
	    let checkOut = document.getElementById(checkoutId).value;
	    //console.log(amenitiesBed);
    	var gender = document.getElementsByName("gender");
                    if(gender[0].checked)
                    {
                        var genderVal = gender[0].value;
                        console.log(genderVal);
                    }
                    
                    else if(gender[1].checked)
                    {
                        var genderVal = gender[1].value;
                        console.log(genderVal);
                    }
                    
                    else if(gender[2].checked)
                    {
                        var genderVal = gender[2].value;
                        console.log(genderVal);
                    }
    	
    	firebase.database().ref("Customers/"+phoneNumber).set({
    		firstName: firstName,
    		lastName: lastName,
    		phoneNumber: phoneNumber,
    		roomNumber: roomNumber,
    		gender: genderVal,
    		noOfPeople: noOfPeople,
    		checkIn: checkIn,
    		checkOut: checkOut
    	});
    	document.getElementById(messageId).innerHTML = "Room Booked";
    }
};

 // function for viewing room details and edit it.
 const roomView = () => {
	const loadRoom = (loc, pInfo) => {

        const editRoomType = () => {
        	room_type.innerHTML = `<form>
	                                  <input type="radio" id="normal" name="room" value="normal">
									  <label for="normal">Normal</label><br>
									  <input type="radio" id="deluxe" name="room" value="deluxe">
									  <label for="deluxe">Deluxe</label><br>
									  <input type="radio" id="superdeluxe" name="room" value="super deluxe">
									  <label for="super deluxe">Super Deluxe</label>
									  <br><input id="submit" type="submit" value="Submit">
									  <br><input id="cancel" type="submit" value="Cancel"> 
		                         </form>`;

		    let roomDetails = room_type.innerHTML;
		    let submitId = roomDetails.id="submit";
		    let cancelId = roomDetails.id="cancel";

             document.getElementById(submitId).onclick = function(e){
             	e.preventDefault();
             	 // Here varriables will store names.
	            let room = document.getElementsByName("room");
	               for(let i=0; i<room.length; i++){
	                 	  if(room[i].checked)
		                    {
		                        var roomVal = room[i].value;
		                        console.log(roomVal);
		                    }
	                }
	                firebase.database().ref("Rooms/"+room_no).update({
			    		RoomType: roomVal
			    	});

			    	loadRoom(loc, pInfo);
             }

             document.getElementById(cancelId).onclick = function(e){
             	e.preventDefault();
             	loadRoom(loc, pInfo);
             }

        };

        const editRoomStatus = () => {
        	room_status.innerHTML = `<form>
	                                  <input type="radio" id="active" name="status" value="active">
									  <label for="active">Active</label><br>
									  <input type="radio" id="booked" name="status" value="booked">
									  <label for="booked">Booked</label><br>
									  <input type="radio" id="maintance" name="status" value="maintance">
									  <label for="maintance">Maintance</label>
									  <br><input id="submit" type="submit" value="Submit">
									  <br><input id="cancel" type="submit" value="Cancel"> 
		                         </form>`;

		    let roomDetails = room_type.innerHTML;
		    let submitId = roomDetails.id="submit";
		    let cancelId = roomDetails.id="cancel";

             document.getElementById(submitId).onclick = function(e){
             	e.preventDefault();

                    let status = document.getElementsByName("status");
	                 for(let i=0; i<status.length; i++){
	                 	  if(status[i].checked)
		                    {
		                        var statusVal = status[i].value;
		                        console.log(statusVal);
		                    }
	                 }

	                firebase.database().ref("Rooms/"+room_no).update({
			    		RoomStatus: statusVal
			    	});

			    	loadRoom(loc, pInfo);
             }

             document.getElementById(cancelId).onclick = function(e){
             	e.preventDefault();
             	loadRoom(loc, pInfo);
             }

        };

		front_page.innerHTML = `<h4>Room No: <span id="room_no"></span></h4><br>
						        <h4>Floor No: <span id="floor_no"></span></h4><br>
						        <h4>Room Amenities: <span id="room_amenities"></span></h4><br>
						        <h4>Room Type: <span id="room_type"></span></h4><input id="editRoomType" type="submit" value="Edit"><br><br>
						        <h4>Room Status: <span id="room_status"></span></h4><input id="editRoomStatus" type="submit" value="Edit">`;
		
		const editRoomType1 = document.getElementById("editRoomType");
		const editRoomStatus1 = document.getElementById("editRoomStatus");
		editRoomType1.addEventListener("click", editRoomType);
		editRoomStatus1.addEventListener("click", editRoomStatus);

		room_no = pInfo;
        loc = loc;
        console.log(room_no);
        firebase.database().ref(loc).child(room_no).on('value',(snap)=>{
        // console.log(snap.val());
         let floor_no = snap.val().FloorNo;
        // console.log(age);
         let room_amenities = snap.val().RoomAmenities;
         let room_status = snap.val().RoomStatus;
         let room_type = snap.val().RoomType;
         // let imgObj = snap.child("image").val();
         // let img = imgObj.img;
         // console.log(img);
         // let imgDom = `<img id="pImg" src="${img}" height="125px" width="200px alt="">`;
         // document.getElementById("img").innerHTML = imgDom;
         document.getElementById("room_no").innerHTML = room_no; 
         document.getElementById("floor_no").innerHTML = floor_no;
         document.getElementById("room_amenities").innerHTML = room_amenities;
         document.getElementById("room_status").innerHTML = room_status;
         document.getElementById("room_type").innerHTML = room_type; 
         });				        
	};

	firebase.database().ref('Rooms').on('value',(snap)=>{
    //console.log(snap.val());
    // let a = snap.child().key;
    // console.log(a);   
    
     let str = "";
            snap.forEach((element, index) => {   //forEach is a loop where element carry the value and index carry the array index. 
                // let name = snap.val();
                let obj = element.val();
                let room_no = element.key; // "key" is a keyword, it return the current node. let name = obj.key, why this is wrong.
                console.log(room_no); 
               // let obj2 = element.child("image").val();
               // let img = obj2.img;
                 let floor_no = obj.FloorNo;
                // console.log(age);
                 let room_amenities = obj.RoomAmenities;
                 let room_status = obj.RoomStatus;
                 let room_type = obj.RoomType;
                 // let room_type = obj.RoomType;
                 str += `
                    <h4>Room No: ${room_no}</h4>
                    <h4>Floor No: ${floor_no}</h4>
                    <h4>Room Amenities: ${room_amenities}</h4>
                    <h4>Room Type: ${room_type}</h4>
                    <h4>Room Status: ${room_status}</h4>
                    <button id="${room_no}" type="submit" class="btn btn-primary info"  >View Details</button>
                    <hr class="my-4">`
            });
             front_page.innerHTML = str;
             //<h4>${Name}:<span id="name"></span></h4>

             let info = document.getElementById("front_page");

                 function indVal(event){   // This is the defination of "Bubling".
                    console.log(event.target.tagName);
                    let tName = event.target.tagName;
                    if(tName == "BUTTON"){
                        pInfo = event.target.id;
                        loc = "Rooms";
                        // localStorage.setItem("textvalue", pInfo);
                        // localStorage.setItem("textvalue2", loc);
                        loadRoom(loc, pInfo);
                    }
                    return false;
                }
                    info.addEventListener("click", (event)=>indVal(event)); // we use "Bubbling" to pass value from one page to another.
    });
};


 // function for viewing customer details and edit it.
const customerProfile = () => {
	const loadRoom = (loc, pInfo) => {
		front_page.innerHTML = `<h4>Name: <span id="name"></span></h4>
						        <h4>Gender: <span id="gender"></span></h4>
						        <h4>Phone Number: <span id="phone_number"></span></h4>
						        <h4>Check-In Date: <span id="checkIn_id"></span></h4>
						        <h4>Check-Out Date: <span id="checkOut_id"></span></h4>
						        <h4>Total No of People: <span id="tnoP_id"></span></h4>`;
		
		phone_no = pInfo;
        loc = loc;
        console.log(phone_no);
        firebase.database().ref(loc).child(phone_no).on('value',(snap)=>{
        // console.log(snap.val());
         let firstName = snap.val().firstName;
         let lastName = snap.val().lastName;
         let fullName = firstName+" "+lastName;
         let gender = snap.val().gender;
         let checkIn = snap.val().checkIn;
         let checkOut = snap.val().checkOut;
         let noOfPeople = snap.val().noOfPeople;

         document.getElementById("name").innerHTML = fullName; 
         document.getElementById("gender").innerHTML = gender;
         document.getElementById("phone_number").innerHTML = phone_no;
         document.getElementById("checkIn_id").innerHTML = checkIn;
         document.getElementById("checkOut_id").innerHTML = checkOut;
         document.getElementById("tnoP_id").innerHTML = noOfPeople; 
         });				        
	};

	firebase.database().ref('Customers').on('value',(snap)=>{
    //console.log(snap.val());
    // let a = snap.child().key;
    // console.log(a);   
    
     let str = "";
            snap.forEach((element, index) => {   //forEach is a loop where element carry the value and index carry the array index. 
                // let name = snap.val();
                let obj = element.val();
                let phone_no = element.key; // "key" is a keyword, it return the current node. let name = obj.key, why this is wrong.
                console.log(phone_no); 
               // let obj2 = element.child("image").val();
               // let img = obj2.img;
                 let firstName = obj.firstName;
                // console.log(age);
                 let lastName = obj.lastName;
                 let fullName = firstName+" "+ lastName;
                 let gender = obj.gender;
                 let email_id = "";
                 // let room_type = obj.RoomType;
                 str += `
                    <h4>Name: ${fullName}</h4>
                    <h4>Phone No: ${phone_no}</h4>
                    <h4>Gender: ${gender}</h4>
                    <button id="${phone_no}" type="submit" class="btn btn-primary info"  >View Details</button>
                    <hr class="my-4">`
            });
             front_page.innerHTML = str;
             //<h4>${Name}:<span id="name"></span></h4>

             let info = document.getElementById("front_page");

                 function indVal(event){   // This is the defination of "Bubling".
                    console.log(event.target.tagName);
                    let tName = event.target.tagName;
                    if(tName == "BUTTON"){
                        pInfo = event.target.id;
                        loc = "Customers";
                        // localStorage.setItem("textvalue", pInfo);
                        // localStorage.setItem("textvalue2", loc);
                        loadRoom(loc, pInfo);
                    }
                    return false;
                }
                    info.addEventListener("click", (event)=>indVal(event)); // we use "Bubbling" to pass value from one page to another.
    });
};

const createManager = () => {
	 front_page.innerHTML = `<form name="forms" action="">
	                          <h3>Create Manager</h3>

	                          <br><label for="fname">First Name:</label><br>
                              <input type="text" id="f_name" name="fname" ><br>

                              <br><label for="lname">Last Name:</label><br>
                              <input type="text" id="l_name" name="lname" value=""><br>

                              <br><label for="email">Enter user email:</label>
                              <input type="email" id="email" name="email"><br>

                              <br><label for="pass">password:</label><br>
                              <input type="password" id="passwordId" name="password" value=""><br>

                              <br><p>Admin Status:</p>
                              <input type="radio" id="statusTrue" name="status" value="true">
							  <label for="status">True</label><br>
							  <input type="radio" id="statusFalse" name="status" value="false">
							  <label for="status">False</label><br>

							  <br><input id="submit" type="submit" value="Submit">
							  <br><p id="message"></p>
							</form>`;
    let bookRoomHtml = front_page.innerHTML;  // onclick="func();"
    // console.log(bookRoomHtml.id="room_no");
    let fnameId = bookRoomHtml.id="f_name";
    let lnameId = bookRoomHtml.id="l_name";
    let emailId = bookRoomHtml.id="email";
    let passwordId = bookRoomHtml.id="passwordId";
    let messageId = bookRoomHtml.id="message";
    
    let submitId = bookRoomHtml.id="submit";   

    document.getElementById(submitId).onclick = function(e){
    	e.preventDefault();

        // Here we store values for a the particular id.
	    let firstName = document.getElementById(fnameId).value;
	    console.log(firstName);
	    let lastName = document.getElementById(lnameId).value;
	    console.log(lastName);
	    let fullName = firstName + " " + lastName;
	    let Email = document.getElementById(emailId).value;
	    let Password = document.getElementById(passwordId).value;
	    
    	var status = document.getElementsByName("status");
                    if(status[0].checked)
                    {
                        var statusVal = status[0].value;
                        console.log(statusVal);
                    }
                    
                    else if(status[1].checked)
                    {
                        var statusVal = status[1].value;
                        console.log(statusVal);
                    }
    	
    	firebase.database().ref("Admin/"+fullName).set({
    		email: Email,
    		password: Password,
    		admin: statusVal
    	});
    	document.getElementById(messageId).innerHTML = "Manager created...";
    }
};

const logOut = () =>{
	window.location.replace("./login.html");
	// document.getElementById("log_mes").innerHTML = "This button is not working";
 };


//This eventListener is to call the homeView function.
home_view.addEventListener("click", homeView);

//This eventListener is to call the createRoom function.
create_room.addEventListener("click", createRoom);

//This eventListener is to call the bookRoom function.
book_room.addEventListener("click", bookRoom);

//This eventListener is to call the roomView function.
room_view.addEventListener("click", roomView);

//This eventListener is to call the customerProfile function.
customer_profile.addEventListener("click", customerProfile);

//This eventListener is to call the createManager function.
create_manager.addEventListener("click", createManager);

logout.addEventListener("click", logOut);