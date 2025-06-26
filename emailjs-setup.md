# EmailJS Setup Instructions

## Quick Fix for Email Sending Error

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. After signing up and logging in, go to "Email Services" and add a new service (Gmail, Outlook, etc.)
3. Go to "Email Templates" and create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. Go to your Account page and copy your "Public Key"
5. Open `script.js` and replace these three values:
   ```javascript
   const serviceID = 'default_service'; // Replace with your service ID (e.g., 'gmail')
   const templateID = 'template_id';    // Replace with your template ID (e.g., 'template_abc123')
   const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your public key
   ```

## Detailed Setup Steps

### 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month

### 2. Add an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note the Service ID (e.g., 'gmail', 'outlook', etc.)

### 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. In the "To email" field, enter: sahani.amit502@gmail.com
5. Save the template and note the Template ID (e.g., 'template_abc123')

### 4. Get Your Public Key

1. Go to Account > API Keys
2. Copy your "Public Key"

### 5. Update Your Code

Open the `script.js` file and update the following:

```javascript
const serviceID = 'YOUR_SERVICE_ID';   // Replace with your actual service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID
const publicKey = 'YOUR_PUBLIC_KEY';   // Replace with your actual public key
```

### 6. Remove EmailJS Script (Optional)

If you're using the fetch API method, you can optionally remove the EmailJS script from index.html:

```html
<!-- This can be removed if using fetch API method -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

## 5. Test Your Form

After making these changes, test your contact form to ensure emails are being sent correctly.

## Note

The contact form is configured to send emails to sahani.amit502@gmail.com as specified in the code. If you want to change this, update the `to_email` parameter in the `templateParams` object in script.js. 