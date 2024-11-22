// sw.js - Service Worker

self.addEventListener('install', (event) => {
    console.log("Service Worker Installed");
});

self.addEventListener('activate', (event) => {
    console.log("Service Worker Activated");
});

// Handle push notifications
self.addEventListener('push', (event) => {
    let options = {
        body: event.data ? event.data.text() : 'You have a new notification!',
        icon: 'https://via.placeholder.com/100', // Replace with your icon
        badge: 'https://via.placeholder.com/50', // Optional
    };

    event.waitUntil(
        self.registration.showNotification('New Notification!', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked!');
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://yourwebsite.com') // Open your site or a specific URL
    );
});