window.onload = function() {
    const params = new URLSearchParams(window.location.search);

    function setTextContent(paramName, elementId) {
        const element = document.getElementById(elementId);
        if (params.has(paramName) && params.get(paramName).trim() !== '') {
            element.textContent = params.get(paramName);
        } else {
            if (element) {
                // Check if the element is inside a <p> tag
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
        } else {
            if (element) {
                if (element.parentElement.tagName.toLowerCase() === 'div') {
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
};
