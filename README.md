# Virtual Contact Card Web App

This web application displays a virtual contact card populated by URL parameters. It supports all standard vCard fields and includes custom fields for various social media profiles and additional personal information.

## Table of Contents

- Features
- Installation
- Usage
  - URL Parameters
  - Example
- Custom Fields
- Notes
- License

## Features

- Displays contact information using standard vCard fields.
- Includes custom fields for social media profiles like GitHub, Twitter, LinkedIn, and more.
- Supports additional personal information such as meeting date, pronouns, hobbies, and skills.
- Automatically hides fields that are not provided.
- Clean and responsive design.

## Installation

1. **Download or Clone the Repository**

   Use the following command to clone the repository:

       git clone https://github.com/jonbonney/vcard.git

2. **Navigate to the Project Directory**

   Change to the project directory:

       cd vcard

3. **Host the Files**

   - Use a web server to host the files.
   - For local testing, you can use the Live Server extension in VSCode or a simple Python HTTP server:

       python -m http.server 8000

## Usage

### URL Parameters

Populate the contact card by appending URL parameters to the `index.html` file. Each parameter corresponds to a field in the contact card.

**Standard vCard Fields:**

- **fn**: Full Name
- **title**: Job Title
- **org**: Organization
- **nickname**: Nickname
- **bday**: Birthday
- **anniversary**: Anniversary
- **gender**: Gender
- **photo**: URL to a photo image
- **tel**: Telephone Number
- **email**: Email Address
- **adr**: Address
- **url**: Website URL
- **impp**: Instant Messaging
- **tz**: Time Zone
- **lang**: Language
- **note**: Additional Notes

**Custom Fields for Social Media Profiles:**

- **github**: GitHub profile URL
- **twitter**: Twitter profile URL
- **linkedin**: LinkedIn profile URL
- **instagram**: Instagram profile URL
- **facebook**: Facebook profile URL
- *(Add more as needed)*

**Additional Custom Fields:**

- **meeting_date**: Date when you met
- **meeting_place**: Location where you met
- **pronouns**: Preferred pronouns
- **hobby**: Hobbies or interests
- **skills**: Skills or expertise
- **languages**: Languages spoken
- **projects**: Notable projects
- **availability**: Availability for meetings or projects
- **assistant**: Assistant's name and contact
- **department**: Department within the organization
- **office**: Office location or number
- **blog**: Personal blog URL
- **portfolio**: Portfolio website URL
- **calendar_url**: Link to scheduling page or calendar
- **emergency_contact**: Emergency contact details
- **qr_code**: URL to a QR code image
- **other_contact**: Any other contact method

### Example

**URL:**

    http://localhost:8000/index.html?fn=Alex%20Johnson&title=Data%20Scientist&org=Tech%20Innovators&email=alex.johnson%40example.com&tel=5551234567&github=https%3A%2F%2Fgithub.com%2Falexjohnson&twitter=https%3A%2F%2Ftwitter.com%2Falexj&linkedin=https%3A%2F%2Flinkedin.com%2Fin%2Falexjohnson&meeting_date=2023-10-15&pronouns=They%2FThem&hobby=Cycling%2C%20Photography&skills=Python%2C%20Machine%20Learning&photo=https%3A%2F%2Fvia.placeholder.com%2F150

**Explanation:**

- **fn**: Alex Johnson
- **title**: Data Scientist
- **org**: Tech Innovators
- **email**: alex.johnson@example.com
- **tel**: 5551234567
- **github**: https://github.com/alexjohnson
- **twitter**: https://twitter.com/alexj
- **linkedin**: https://linkedin.com/in/alexjohnson
- **meeting_date**: 2023-10-15
- **pronouns**: They/Them
- **hobby**: Cycling, Photography
- **skills**: Python, Machine Learning
- **photo**: https://via.placeholder.com/150

**Steps to Use:**

1. Open your web browser.
2. Enter the URL with the desired parameters.
3. The web app will display the contact card with the provided information.

## Custom Fields

Feel free to add more custom fields as needed. To add a new field:

1. **Update `index.html`:**

       <p><strong>New Field Label:</strong> <span id="new_field_id"></span></p>

2. **Update `script.js`:**

       setTextContent('new_field_param', 'new_field_id');

3. **Optionally Update `styles.css`** to style the new field.

## Notes

- **URL Encoding:** Ensure all parameter values are URL-encoded.
  - Spaces become `%20`.
  - Use an online tool like [URL Encoder/Decoder](https://www.urlencoder.org/).
- **Security Considerations:** Be cautious when displaying user-provided data.
  - Avoid security risks like Cross-Site Scripting (XSS).
  - Consider sanitizing inputs.
- **Image URLs:** Use publicly accessible images.
  - For testing, you can use placeholder images like `https://via.placeholder.com/150`.

## License

This project is open-source and available under the MIT License.

---
