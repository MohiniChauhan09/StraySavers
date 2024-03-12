import ChatBot from 'react-simple-chatbot';

function Chatbot() {
  
  const steps = [
    {
      id: "Greet",        
      message: "Hello, Welcome to StraySavers",        
      trigger: "Done",        
    },        
    {       
      id: "Done",        
      message: "Please enter your name!",        
      trigger: "waiting1",        
    },      
    {      
      id: "waiting1",      
      user: true,      
      trigger: "Name",      
    },      
    {       
      id: "Name",     
      message: "Hi {previousValue}, Please select your issue",     
      trigger: "issues",     
    },      
    {      
      id: "issues",   
      options: [   
        {    
          value: "Report a stray dog",   
          label: "Report a stray dog",        
          trigger: "Report",       
        },       
        { value: "Foster or Adopt a stray dog", label: "Foster or Adopt a stray dog", trigger: "Adopt" },
        { value: "Donate or Volunteer" , label: "Donate or Volunteer" , trigger: "Donate"},
        { value: "Lost and Found Dogs" , label: "Lost and Found Dogs" , trigger: "Lost"},       
      ],       
    },       
    {       
      id: "Report",       
      message:        
        "Thank you for your willingness to help!, Please contact us immediately",        
      end: true,       
    },       
    {       
      id: "Adopt",       
      message:       
        "That's wonderful! Fostering or adopting a stray dog can make a huge difference in their lives.Please contact us ASAP regarding the same",       
      end: true,       
    }, 
    {
      id: "Donate",
      message: "Your generosity is appreciated! You can donate money or supplies to support shelters and rescue organizations,or volunteer your time to help care for stray dogs.Please contact us",
      end: true,
    }, 
    {
      id: "Lost",
      message: "I'm sorry to hear that. Please provide details about the lost or found dog, including location, description, and any identifying features via our contact form. We'll do our best to assist you in reuniting the dog with its owner.",
      end:true,
    },     
  ];

  return (
    <>
      <section>
        <ChatBot steps={steps} />
      </section>
    </>
  )
}

export default Chatbot



// when you install use npm install --legacy-peer-deps that way it's pick compatible version
