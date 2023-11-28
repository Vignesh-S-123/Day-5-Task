//JSON iterate over all for loops 
// a. FOR LOOP
var resume = [{
    "name": "Vignesh S",
    "label": "FSD",
    "email": "s.vickyvignesh28@gmail.com",
    "phone":"+91-6380837238",
    "SUMMARY": ["Aiming to complete this course successfully"],
    "LOCATION": {
      "address": "115, East Namachivaya Puram",
      "postalCode": "600094",
      "city": "Choolaimedu",
      "District":"Chennai",
      "State":"Tamilnadu",
     
    },
  
  
  "EDUCATION": {
    "college":"Loyola College",
    "Degree": "B.SC",
    "Duration": "2017-2020",
    "cgpa": "6.8",
    
  },
  
 
  "LANGUAGES": {
    "language": "Tamil , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    "keywords": 
      "based on true stories",
    
  },
  "REFERENCE": {
    "name": "Vignesh S",
    "reference": "Thiru",
    "phone":"+91-XXXXXXXXX",
  },
  }];
  for(var i = 0; i<resume.length; i++){
    console.log(resume[i]);
  }

 // -------------------------------------------------------------------------

 // b. FOR IN LOOP

 var resume = [{
    "name": "Vignesh S",
    "label": "FSD",
    "email": "s.vickyvignesh28@gmail.com",
    "phone":"+91-6380837238",
    "SUMMARY": ["Aiming to complete this course successfully"],
    "LOCATION": {
      "address": "115, East Namachivaya Puram",
      "postalCode": "600094",
      "city": "Choolaimedu",
      "District":"Chennai",
      "State":"Tamilnadu",
     
    },
  
  
  "EDUCATION": {
    "college":"Loyola College",
    "Degree": "B.SC",
    "Duration": "2017-2020",
    "cgpa": "6.8",
    
  },
  
 
  "LANGUAGES": {
    "language": "Tamil , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    "keywords": 
      "based on true stories",
    
  },
  "REFERENCE": {
    "name": "Vignesh S",
    "reference": "Thiru",
    "phone":"+91-XXXXXXXXX",
  },
  }];
  for(var i in resume){
    console.log(i,resume[i]);
  }

  //------------------------------------------------------------------------

  // c. FOR OF LOOP

  const num = [10,20,30,40,50];

for(var newnum of num){
  console.log(newnum);
}

//---------------------------------------------------------------------------

// d. FOR EACH LOOP

let str = [1,2,3,4,5];
str.forEach(element => {
  console.log(element)
});



