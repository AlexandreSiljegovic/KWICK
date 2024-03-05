

const app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/messages/',
        url: '/messages/',
        componentUrl: './pages/messages.html',
      },
      {
        path: '/identification/',
        url: '/identification/',
        componentUrl: './pages/identification.html',
      }
    ],
    // ... other parameters
  });

  
const mainView = app.views.create('.view-main');




let getData = async function () {
  let data = await fetch('https://httpbin.org/ip')
  return data.json()
}



let renderData = async function () {
  let data = await getData()
  console.log(data)
}

renderData()


let workerContainerInstance = navigator.serviceWorker;

if ('serviceWorker' in navigator) {
  workerContainerInstance.register('./sw.js').then(function (registration) {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch(function (error) {
    console.log('Service Worker registration failed:', error);
  });
} else {
  console.log('Service Workers are not supported in this browser');
}