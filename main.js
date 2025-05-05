document.addEventListener("DOMContentLoaded", function() {
    // Feedback Form Functionality
    const form = document.getElementById("feedback-form");
    if (form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Collect form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const rating = document.getElementById("rating").value;
        
        // Basic validation for required fields
        if (name === "" || email === "" || message === "") {
          alert("Please fill in all required fields.");
          return;
        }
        
        // Simple email pattern check
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
        
        // Simulate feedback processing (e.g., via AJAX)
        console.log("Feedback submitted:", {
          name: name,
          email: email,
          message: message,
          rating: rating
        });
        
        // Reset the form
        form.reset();
        
        // Display thank you message
        const thankyouDiv = document.getElementById("thankyou");
        thankyouDiv.classList.remove("hidden");
        
        // Generate AI Bot response based on feedback
        const aiResponseText = generateAIResponse(message);
        const aiMessageElement = document.getElementById("ai-message");
        aiMessageElement.textContent = aiResponseText;
        
        // Display the AI Bot message
        const aiResponseDiv = document.getElementById("ai-response");
        aiResponseDiv.classList.remove("hidden");
        
        // Optionally hide the messages after a delay (e.g., 4 seconds)
        setTimeout(function() {
          thankyouDiv.classList.add("hidden");
          aiResponseDiv.classList.add("hidden");
        }, 4000);
      });
    }
    
    // Function to generate a simple AI Bot response based on the feedback content
    function generateAIResponse(feedback) {
      const lowerFeedback = feedback.toLowerCase();
      if (lowerFeedback.includes("problem") || lowerFeedback.includes("error") || lowerFeedback.includes("issue") || lowerFeedback.includes("bad")) {
        return "I'm sorry to hear you're experiencing issues. Your feedback is important, and I’ll make sure it reaches the team for prompt attention.";
      } else if (lowerFeedback.includes("love") || lowerFeedback.includes("great") || lowerFeedback.includes("awesome")) {
        return "Thank you so much for your enthusiastic feedback! Your support truly motivates us to keep improving.";
      } else {
        return "Thank you for sharing your thoughts. Every bit of feedback helps us create a better experience.";
      }
    }
    
    // Additional JavaScript (e.g., for mobile menu toggling or extra animations) can be added here
  });
  