import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc486XcAFJYf6X7j_FZcZJtBPbseYngKc",
  authDomain: "portfolio-96f0b.firebaseapp.com",
  projectId: "portfolio-96f0b",
  storageBucket: "portfolio-96f0b.appspot.com",
  messagingSenderId: "789078533919",
  appId: "1:789078533919:web:3178360aa68a97da2ef22a",
  measurementId: "G-KQGE76QC9G"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name :string ="";
  email:string ="";
  phone:number |string= "";
  message :string = "";
  constructor() { }

  ngOnInit(): void {
  }

 async onSubmit(){
    console.log("submitted");
    let isSubmitted =false;
    try{
      const contact = await addDoc(collection(db,"users"),{
        name :this.name,
        email : this.email,
        phone :this.phone,
        message :this.message
      });
      isSubmitted = true
    }catch(err){
      console.log(err);
    }
    finally{
      if(!isSubmitted){ alert("Unable to submit the form")}
    }
    this.onClear();
  }

  onClear(){
    console.log("Form Cleared");
    this.name = "";
    this.email ="";
    this.phone ="";
    this.message ="";
  }
}
