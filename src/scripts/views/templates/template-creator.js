import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="container-detail" id="container-detail">
        <a href="#resto-tittle2" style="text-decoration: none">
          <h1 class="resto__name" id="resto__name">${restaurant.name}</h1>
        </a>
        <img class="resto__poster lazyloaded" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
        <a href="#resto__info" style="text-decoration: none">
          <h1 class="resto-tittle2" id="resto-tittle2">Information</h1>
        </a>
        <div class="resto__info" id="resto__info">
            <h2>Rating</h2>
            <p>${restaurant.rating}</p>
            <h2>Location</h2>
            <p>${restaurant.city}, ${restaurant.address}</p>
            <h2>Description</h2>
            <p>${restaurant.description}</p>
            <h2>Categories</h2>
            <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
        </div>
        <div class="resto__menu">
            <h2>Menu</h2>
            <div class="card-menu foods">
                <h3 style="color:blue">Menu makananan</h3>
                <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
            </div>
            <div class="card-menu drinks">
                <h3 style="color:blue">Menu minuman</h3>
                <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
            </div>
        </div>
        <div class="resto__review">
            <h2>Customer Reviews</h2>
            <div class="resto__card">
                ${restaurant.customerReviews.map((review) => `
                    <div class="card-review">
                        <p>Name: ${review.name}</p>
                        <p>Review: ${review.review}</p>
                        <p>Date: ${review.date}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="form-review">
            <h4 style="color: black">Berikan Review</h4>
              <form>
                <div class="input-here">
                  <label for="inputName" class="form-label">Name</label>
                  <input name="inputName" type="text" class="form-control" id="inputName" required style="font-size: 21px;">
                </div>
                <div class="input-here">
                  <label for="inputReviewDesc" class="form-label">Review</label>
                  <textarea name="inputReviewDesc" class="form-control" id="inputReviewDesc" required style="font-size: 21px;"></textarea>
                </div>
                <button id="submit-review" type="submit" class="btn">Submit</button>
              </form>
        </div>
    </div>
`;

const createRestaurantListTemplate = (restaurants) => `
  <div class="restaurant-list" id="restaurant-list"> 
    <div class="restaurant-list__header">
        <p class="restaurant-list__header__rating">⭐️${restaurants.rating}</p>
        <a href="/#/detail/${restaurants.id}">
          <picture>
            <source media="(max-width: 600px)" data-srcset="${CONFIG.SMALL_IMAGE_URL + restaurants.pictureId}">
            <source media="(max-width: 900px)" data-srcset="${CONFIG.MEDIUM_IMAGE_URL + restaurants.pictureId}">
            <img class="restaurant-list__header__poster lazyload" alt="${restaurants.name}"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}"> 
        </picture>
        </a>
        <div class="restaurant-list__content">
            <h3>
                <a class="restaurant-list-title" href="/#/detail/${restaurants.id}">${restaurants.name}</a>
            </h3>
            <p>${restaurants.description}</p>
        </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButtonContainers" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likedButtonContainers" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
