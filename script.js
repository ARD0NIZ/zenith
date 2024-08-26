const apiUrl = 'https://api.lynnux.xyz/request?site=http://38.22.104.139:1254/botStats';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`API-Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const guildCount = data.guildCount;
        const userCount = data.userCount;

        document.getElementById('userCount').textContent = userCount;
        document.getElementById('guildCount').textContent = guildCount;
    })
    .catch(error => {
        console.error('Error at request the API:', error);
    });