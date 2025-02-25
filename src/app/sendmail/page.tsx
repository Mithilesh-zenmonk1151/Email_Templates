"use client"
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from '@/store/hooks';
import { sendMail } from '@/slice/mail/mailAction';


export default function EmailSendPage() {
    const searchParams = useSearchParams();
    const selecteddvalue= searchParams.get('selecteddvalue')
    const[subject,setSubject]=useState("");
    const [companyName,setCompanyname]=useState("");
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [country,setcountry]=useState("");
    const [month,setMonth]= useState("");
    const [date,setDate]=useState("");
    const [year,setYear]= useState("");
    const[heading,setHeading]=useState("");
    const [contentL1, setContentL1]=useState("");
    const [listItem1,setListItem1]= useState("");
    const [listItem2,setListItem2]= useState("");
    const [listItem3,setListItem3]= useState("");
    const [listItem4,setListItem4]= useState("");
    const [contentL2,setContentL2]= useState("");

    const [email, setEmail]= useState("");
    const mail= {subject,companyName,firstname,lastname,country,month,date,heading,contentL1,
        listItem1,listItem2,listItem3,listItem4,contentL2,email,year,selecteddvalue
    }
    const dispatch= useAppDispatch();
    const handleOnClick=()=>{
        try{
            console.log("MMMMAAAAIAIAIAILLLLLLL=========",mail)
          dispatch(sendMail(mail))
        }
        catch(error){
            console.log(error);
        }
    }


    

  return (
    <div>
     <Box sx={{
        display:"flex",
        flexDirection:"column"
     }}>
     <label  htmlFor="subject">Email Subject</label>
      <TextField
        type="text"
        placeholder="Enter subject here for email"
        name="subject"
       
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
      />
         <label  htmlFor="companyname">Company Name:-</label>
      <TextField
        type="text"
        placeholder="Enter your Company name"
        name="companyname"
       
        value={companyName}
        onChange={(e)=>setCompanyname(e.target.value)}
      />
       <label  htmlFor="firstname">Firstname</label>
      <TextField
        type="text"
        placeholder="firstname eg:-abc"
        name="firstname"
       
        value={firstname}
        onChange={(e)=>setFirstname(e.target.value)}
      />
       <label  htmlFor="lastname">Lastname</label>
      <TextField
        type="text"
        placeholder="lastname "
        name="lastname"
       
        value={lastname}
        onChange={(e)=>setLastname(e.target.value)}
      />
       <label  htmlFor="country">Country </label>
      <TextField
        type="text"
        placeholder="country eg:-india"
        name="country"
       
        value={country}
        onChange={(e)=>setcountry(e.target.value)}
      />
       <label  htmlFor="month">Month</label>
      <TextField
        type="text"
        placeholder="month"
        name="month"
       
        value={month}
        onChange={(e)=>setMonth(e.target.value)}
      />
       <label  htmlFor="date">Date</label>
      <TextField
        type="text "
        placeholder="date eg:-14"
        name="date"
       
        value={date}
        onChange={(e)=>setDate(e.target.value)}
      />
        <label  htmlFor="year">Year</label>
      <TextField
        type="text "
        placeholder="year eg:-2024"
        name="year"
       
        value={year}
        onChange={(e)=>setYear(e.target.value)}
      />
       <label  htmlFor="heading">Heading Of Mail</label>
      <TextField
        type="text"
        placeholder="heading of mail eg:- offer letter"
        name="heading"
       
        value={heading}
        onChange={(e)=>setHeading(e.target.value)}
      />
       <label  htmlFor="contentL1">Content of Email</label>
      <TextField
        type="contentL1"
        placeholder="body of Email"
        name="contentL1"
       
        value={contentL1}
        onChange={(e)=>setContentL1(e.target.value)}
      />
       <label  htmlFor="listItem1">List one </label>
      <TextField
        type="listItem1"
        placeholder="enter first point"
        name="listItem1"
       
        value={listItem1}
        onChange={(e)=>setListItem1(e.target.value)}
      />
       <label  htmlFor="listItem2">List two</label>
      <TextField
        type="text"
        placeholder="enter second point"
        name="listItem2"
       
        value={listItem2}
        onChange={(e)=>setListItem2(e.target.value)}
      />
       <label  htmlFor="listItem3">List three</label>
      <TextField
        type="text"
        placeholder="enter third point"
        name="listItem3"
       
        value={listItem3}
        onChange={(e)=>setListItem3(e.target.value)}
      />
       <label  htmlFor="listItem4">List four</label>
      <TextField
        type="text"
        placeholder="enter forth point"
        name="listItem4"
       
        value={listItem4}
        onChange={(e)=>setListItem4(e.target.value)}
      />
       <label  htmlFor="belowBody">Below list Point</label>
      <TextField
        type="text"
        placeholder="enter  below body"
        name="belowBody"
       
        value={contentL2}
        onChange={(e)=>setContentL2(e.target.value)}
      />
      <label  htmlFor="email">Enter Email </label>
      <TextField
        type="email"
        placeholder="enter  Email where you want to send email"
        name="email"
       
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <Button onClick={handleOnClick} >Send Mail</Button>

     </Box>
    </div>
  )
}
