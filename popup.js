async function fetchData(url) {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbwzgwkpmS9Q0p1URuJJrQeshqBBFPHQ9hmMuggIZv5VP42zm-0BZRU2kk00cjsIXVBNRw/exec?url=${encodeURIComponent(url)}`, {
      mode: 'cors'
    });
  
    const data = await response.json();
    console.log(data);
  
    const nameElement = document.getElementById('name');
    const timeElement = document.getElementById('time');
    const spaceElement = document.getElementById('space');
    nameElement.textContent="Name of the problem :" + data.data.name;
    timeElement.textContent="Time Complexity :"+ data.data.time;
    spaceElement.textContent="Space Complexity :"+ data.data.space;
    dataElement.textContent = JSON.stringify(data);
  }
  
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    const tab = tabs[0];
    console.log(tab);
    
      fetchData(tab.url);

     
  });
  