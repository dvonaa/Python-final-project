function getRecommendedShow() 
{
    // Get user input
    const keywords = document.getElementById('keywords').value;
    const apiUrl = `http://localhost:3000/WebsitePg2.html`;
    // Make an API request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>Recommended TV Show: ${jsonData.show}</p>`;
        })
        .catch(error => console.error('Error: error'));
}
function ALERT()
{
    alert('This service is currently out of order. Sorry bout that man. But You can click the other link to see my recommended shows!');
}