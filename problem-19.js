// return email domain and email validation check 
/*function signature/sample */
function createNotification(email) {
    // Check if the email contains exactly one '@' character
    if (email.indexOf('@') === -1 || email.split('@').length !== 2) {
      return "Invalid Email";
    }
  
    // Split the email into username and domain name
    const [username, domain] = email.split('@');
  
    // Construct the notification message
    return `${username} sent you an email from ${domain}`;
  }
  
  // Example usage:
  console.log(createNotification("zihad.ph@gmail.com"));  // Output: zihad.ph sent you an email from gmail.com
  console.log(createNotification("invalidemail.com"));     // Output: Invalid Email
  



