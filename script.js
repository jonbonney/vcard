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
            if (element) {
                if (element.parentElement.tagName.toLowerCase() === 'div' || element.parentElement.tagName.toLowerCase() === 'p') {
                    element.parentElement.style.display = 'none';
                } else {
                    element.style.display = 'none';
                }
            }
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
};
