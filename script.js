window.onload = function() {
    const params = new URLSearchParams(window.location.search);

    // Mapping of fields to their respective sections
    const fieldToSection = {
        // Contact Information
        'tel': 'contact-info',
        'email': 'contact-info',
        'adr': 'contact-info',
        'url': 'contact-info',
        'impp': 'contact-info',
        'tz': 'contact-info',
        'lang': 'contact-info',

        // Social Media Profiles
        'github': 'social-media',
        'twitter': 'social-media',
        'linkedin': 'social-media',
        'instagram': 'social-media',
        'facebook': 'social-media',
        // Add more platforms as needed

        // Additional Custom Fields
        'meeting_date': 'custom-fields',
        'meeting_place': 'custom-fields',
        'pronouns': 'custom-fields',
        'hobby': 'custom-fields',
        'skills': 'custom-fields',
        'languages': 'custom-fields',
        'projects': 'custom-fields',
        'availability': 'custom-fields',
        'assistant': 'custom-fields',
        'department': 'custom-fields',
        'office': 'custom-fields',
        'blog': 'custom-fields',
        'portfolio': 'custom-fields',
        'calendar_url': 'custom-fields',
        'emergency_contact': 'custom-fields',
        'qr_code': 'custom-fields',
        'other_contact': 'custom-fields',

        // Notes
        'note': 'notes'
    };

    // Object to track visibility of each section
    const sectionVisibility = {
        'contact-info': false,
        'social-media': false,
        'custom-fields': false,
        'notes': false
    };

    function setTextContent(paramName, elementId) {
        const element = document.getElementById(elementId);
        if (params.has(paramName) && params.get(paramName).trim() !== '') {
            element.textContent = params.get(paramName);

            // Mark the section as visible
            if (fieldToSection[paramName]) {
                sectionVisibility[fieldToSection[paramName]] = true;
            }
        } else {
            if (element) {
                // Hide the parent <p> tag or the element itself
                if (element.parentElement.tagName.toLowerCase() === 'p') {
                    element.parentElement.style.display = 'none';
                } else {
                    element.style.display = 'none';
                }
            }
        }
    }

    function setLinkContent(paramName, elementId) {
        const element = document.getElementById(elementId);
        if (params.has(paramName) && params.get(paramName).trim() !== '') {
            const url = params.get(paramName);
            element.textContent = url;
            element.href = url.startsWith('http') ? url : 'http://' + url;

            // Mark the section as visible
            if (fieldToSection[paramName]) {
                sectionVisibility[fieldToSection[paramName]] = true;
            }
        } else {
            if (element) {
                if (element.parentElement.tagName.toLowerCase() === 'p') {
                    element.parentElement.style.display = 'none';
                } else {
                    element.style.display = 'none';
                }
            }
        }
    }

    function setImageSrc(paramName, elementId) {
        const element = document.getElementById(elementId);
        if (params.has(paramName) && params.get(paramName).trim() !== '') {
            element.src = params.get(paramName);

            // Mark the section as visible
            if (fieldToSection[paramName]) {
                sectionVisibility[fieldToSection[paramName]] = true;
            }
        } else {
            if (paramName === 'qr_code') {
                // Generate QR code for the current URL
                generateQRCode(window.location.href);
                // Mark the section as visible
                if (fieldToSection[paramName]) {
                    sectionVisibility[fieldToSection[paramName]] = true;
                }
            } else {
                if (element) {
                    if (element.parentElement.tagName.toLowerCase() === 'div' || element.parentElement.tagName.toLowerCase() === 'p') {
                        element.parentElement.style.display = 'none';
                    } else {
                        element.style.display = 'none';
                    }
                }
            }
        }
    }

    function generateQRCode(url) {
        const qrCodeContainer = document.getElementById('qr_code_container');
        if (qrCodeContainer) {
            // Clear any existing content
            qrCodeContainer.innerHTML = '';
            // Generate the QR code
            new QRCode(qrCodeContainer, {
                text: url,
                width: 256,
                height: 256
            });
        }
    }

    // Basic Information
    setImageSrc('photo', 'photo');
    setTextContent('fn', 'fn');
    setTextContent('title', 'title');
    setTextContent('org', 'org');
    setTextContent('nickname', 'nickname');
    setTextContent('bday', 'bday');
    setTextContent('anniversary', 'anniversary');
    setTextContent('gender', 'gender');

    // Contact Information
    setTextContent('tel', 'tel');
    setTextContent('email', 'email');
    setTextContent('adr', 'adr');
    setLinkContent('url', 'url');
    setTextContent('impp', 'impp');
    setTextContent('tz', 'tz');
    setTextContent('lang', 'lang');

    // Social Media Profiles
    setLinkContent('github', 'github');
    setLinkContent('twitter', 'twitter');
    setLinkContent('linkedin', 'linkedin');
    setLinkContent('instagram', 'instagram');
    setLinkContent('facebook', 'facebook');
    // Add more platforms as needed

    // Additional Custom Fields
    setTextContent('meeting_date', 'meeting_date');
    setTextContent('meeting_place', 'meeting_place');
    setTextContent('pronouns', 'pronouns');
    setTextContent('hobby', 'hobby');
    setTextContent('skills', 'skills');
    setTextContent('languages', 'languages');
    setTextContent('projects', 'projects');
    setTextContent('availability', 'availability');
    setTextContent('assistant', 'assistant');
    setTextContent('department', 'department');
    setTextContent('office', 'office');
    setLinkContent('blog', 'blog');
    setLinkContent('portfolio', 'portfolio');
    setLinkContent('calendar_url', 'calendar_url');
    setTextContent('emergency_contact', 'emergency_contact');
    setImageSrc('qr_code', 'qr_code');
    setTextContent('other_contact', 'other_contact');

    // Notes
    setTextContent('note', 'note');

    // Hide sections if none of their fields are populated
    for (const section in sectionVisibility) {
        if (!sectionVisibility[section]) {
            const sectionElement = document.querySelector(`.${section}`);
            if (sectionElement) {
                sectionElement.style.display = 'none';
            }
        }
    }


    // Generate vCard Data
    function generateVCard() {
        let vCard = '';

        // Begin vCard
        vCard += 'BEGIN:VCARD\n';
        vCard += 'VERSION:3.0\n';

        // Full Name (FN)
        let fullName = '';
        if (params.has('fn') && params.get('fn').trim() !== '') {
            fullName = params.get('fn').trim();
            vCard += `FN:${fullName}\n`;
        }
        
        // Name Components (N)
        let familyName = '';
        let givenName = '';
        let additionalName = '';
        let honorificPrefix = '';
        let honorificSuffix = '';

        // Check if name components are provided
        if (params.has('family_name') || params.has('given_name') || params.has('additional_name') ||
            params.has('honorific_prefix') || params.has('honorific_suffix')) {

            if (params.has('family_name')) {
                familyName = params.get('family_name').trim();
            }
            if (params.has('given_name')) {
                givenName = params.get('given_name').trim();
            }
            if (params.has('additional_name')) {
                additionalName = params.get('additional_name').trim();
            }
            if (params.has('honorific_prefix')) {
                honorificPrefix = params.get('honorific_prefix').trim();
            }
            if (params.has('honorific_suffix')) {
                honorificSuffix = params.get('honorific_suffix').trim();
            }
        } else if (fullName !== '') {
            // Parse full name into components
            const nameParts = fullName.split(' ');
            if (nameParts.length === 1) {
                givenName = nameParts[0];
            } else if (nameParts.length === 2) {
                givenName = nameParts[0];
                familyName = nameParts[1];
            } else {
                givenName = nameParts[0];
                familyName = nameParts[nameParts.length - 1];
                additionalName = nameParts.slice(1, -1).join(' ');
            }
        }

        // Add the N field to the vCard
        vCard += `N:${familyName};${givenName};${additionalName};${honorificPrefix};${honorificSuffix}\n`;

        // Title
        if (params.has('title') && params.get('title').trim() !== '') {
            vCard += `TITLE:${params.get('title')}\n`;
        }

        // Organization
        if (params.has('org') && params.get('org').trim() !== '') {
            vCard += `ORG:${params.get('org')}\n`;
        }

        // Phone
        if (params.has('tel') && params.get('tel').trim() !== '') {
            vCard += `TEL;TYPE=CELL:${params.get('tel')}\n`;
        }

        // Email
        if (params.has('email') && params.get('email').trim() !== '') {
            vCard += `EMAIL;TYPE=INTERNET:${params.get('email')}\n`;
        }

        // Address
        if (params.has('adr') && params.get('adr').trim() !== '') {
            vCard += `ADR;TYPE=HOME:;;${params.get('adr')};;;;\n`;
        }

        // URL
        if (params.has('url') && params.get('url').trim() !== '') {
            vCard += `URL:${params.get('url')}\n`;
        }

        // Birthday
        if (params.has('bday') && params.get('bday').trim() !== '') {
            vCard += `BDAY:${params.get('bday')}\n`;
        }

        // Anniversary
        if (params.has('anniversary') && params.get('anniversary').trim() !== '') {
            vCard += `ANNIVERSARY:${params.get('anniversary')}\n`;
        }

        // Note
        if (params.has('note') && params.get('note').trim() !== '') {
            vCard += `NOTE:${params.get('note')}\n`;
        }

        // Social Media URLs
        const socialMediaFields = ['github', 'twitter', 'linkedin', 'instagram', 'facebook'];
        socialMediaFields.forEach(field => {
            if (params.has(field) && params.get(field).trim() !== '') {
                vCard += `URL:${params.get(field)}\n`;
            }
        });

        // Other custom fields can be added similarly
        // End vCard
        vCard += 'END:VCARD\n';

        return vCard;
    }

    // Download vCard
    function downloadVCard() {
        const vCardData = generateVCard();
        const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;

        // Set the filename using the full name or a default value
        const fileName = params.get('fn') ? params.get('fn').replace(/\s+/g, '_') : 'contact';
        link.download = `${fileName}.vcf`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Release the object URL after the download
        URL.revokeObjectURL(url);
    }

    // Add event listener to the download button
    const downloadButton = document.getElementById('download_vcard');
    if (downloadButton) {
        downloadButton.addEventListener('click', downloadVCard);
    }
};
