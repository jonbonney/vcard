// create.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vcard-form');
    const generatedUrlInputTop = document.getElementById('generated-url-top');
    const openUrlButtonTop = document.getElementById('open-url-top');
    const copyUrlButtonTop = document.getElementById('copy-url-top');
    const generatedUrlContainerTop = document.getElementById('generated-url-container-top');
    const qrCodeTop = document.getElementById('qr-code-top');

    const generatedUrlInputBottom = document.getElementById('generated-url-bottom');
    const openUrlButtonBottom = document.getElementById('open-url-bottom');
    const copyUrlButtonBottom = document.getElementById('copy-url-bottom');
    const generatedUrlContainerBottom = document.getElementById('generated-url-container-bottom');
    const qrCodeBottom = document.getElementById('qr-code-bottom');

    // Initialize QRCode instances
    let qrTop = new QRCode(qrCodeTop, {
        text: '',
        width: 128,
        height: 128
    });

    let qrBottom = new QRCode(qrCodeBottom, {
        text: '',
        width: 256,
        height: 256
    });

    // Function to generate URL and update QR codes
    function updateGeneratedUrl() {
        const formData = new FormData(form);
        const params = new URLSearchParams();

        let hasData = false; // To check if any field has data

        for (const [key, value] of formData.entries()) {
            if (value.trim() !== '') {
                params.append(key, value.trim());
                hasData = true;
            }
        }

        if (hasData) {
            // Build the URL
            const baseUrl = new URL('index.html', window.location.href).href;
            const fullUrl = baseUrl + '?' + params.toString();

            // Update the generated URL inputs
            generatedUrlInputTop.value = fullUrl;
            generatedUrlInputBottom.value = fullUrl;

            // Show the generated URL containers
            generatedUrlContainerTop.style.display = 'block';
            generatedUrlContainerBottom.style.display = 'block';

            // Update QR codes
            qrTop.clear();
            qrTop.makeCode(fullUrl);

            qrBottom.clear();
            qrBottom.makeCode(fullUrl);
        } else {
            // Hide the generated URL containers if no data
            generatedUrlContainerTop.style.display = 'none';
            generatedUrlContainerBottom.style.display = 'none';

            // Clear QR codes
            qrCodeTop.innerHTML = '';
            qrCodeBottom.innerHTML = '';
        }
    }

    // Event listeners for form inputs
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            updateGeneratedUrl();
        });
    });

    // Event listeners for Open and Copy buttons (Top)
    openUrlButtonTop.addEventListener('click', function() {
        const url = generatedUrlInputTop.value;
        if (url) {
            window.open(url, '_blank');
        }
    });

    copyUrlButtonTop.addEventListener('click', function() {
        const url = generatedUrlInputTop.value;
        if (url) {
            navigator.clipboard.writeText(url).then(function() {
                alert('URL copied to clipboard.');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        }
    });

    // Event listeners for Open and Copy buttons (Bottom)
    openUrlButtonBottom.addEventListener('click', function() {
        const url = generatedUrlInputBottom.value;
        if (url) {
            window.open(url, '_blank');
        }
    });

    copyUrlButtonBottom.addEventListener('click', function() {
        const url = generatedUrlInputBottom.value;
        if (url) {
            navigator.clipboard.writeText(url).then(function() {
                alert('URL copied to clipboard.');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        }
    });
});
