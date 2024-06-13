import { createRestaurantListTemplate } from '../../templates/template-creator';

class FavoriteRestaurantView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
      <style>
      .content {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        
        .content__heading {
          font-size: 24px;
          margin-bottom: 20px;
        }
        
        #query {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        
        .restaurants {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        
        .restaurant {
          background-color: #f9f9f9;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .restaurant__title {
          font-size: 18px;
          margin-bottom: 10px;
        }
        
        .restaurant__image {
          width: 100%;
          border-radius: 5px;
        }
        
        .restaurant__description {
          font-size: 14px;
          color: #666;
        }
      </style>
      <div class="content">
        <input id="query" type="text">
        <h2 class="content__heading">Your Liked Restaurant</h2>
   
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  _showFoundRestaurant(restaurant) {
    this._view.showFavoriteRestaurant(restaurant);
  }

  showFavoriteRestaurant(restaurant) {
    let html;
    if (restaurant && restaurant.length) {
      html = restaurant.reduce((carry, restaurants) => carry.concat(createRestaurantListTemplate(restaurants)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurant:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        Tidak ada restaurant untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestaurantView;
