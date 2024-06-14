const assert = require('assert');

Feature('Restaurant Favorite');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
  // root URL : http:localhost:9002
  I.amOnPage('/#/like');
});

const thereIsNoFavoriteRestaurant = 'Tidak ada restaurant untuk ditampilkan';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.restaurant-item__not__found');
  I.see(thereIsNoFavoriteRestaurant, '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  // URL: /
  I.amOnPage('/');
  I.seeElement('.restaurant-list a');
  const firstRestoCard = locate('.restaurant-list-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.waitForElement('#likeButtonContainers', 5); // Menunggu tombol like muncul
  I.seeElement('#likeButtonContainers');
  I.click('#likeButtonContainers');

  // URL: /#/favorite
  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-list', 5); // Menunggu elemen card muncul
  I.seeElement('.restaurant-list');
  const likedCardTitle = await I.grabTextFrom('.restaurant-list-title');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
});

Scenario('unliking one restaurant', async ({ I }) => {
  // Pastikan tidak ada restaurant yang disukai
  I.see(thereIsNoFavoriteRestaurant, '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-list a');
  const firstRestaurant = locate('.restaurant-list a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButtonContainers');
  I.click('#likeButtonContainers');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-list a');
  const firstRestaurantLiked = locate('.restaurant-list a').first();
  const firstRestaurantLikedName = await I.grabTextFrom(firstRestaurantLiked);

  I.click(firstRestaurantLiked);
  I.seeElement('#likedButtonContainers');
  I.click('#likedButtonContainers');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item__not__found');
  I.see(thereIsNoFavoriteRestaurant, '.restaurant-item__not__found');
  I.dontSeeElement('.restaurant-list');
});
