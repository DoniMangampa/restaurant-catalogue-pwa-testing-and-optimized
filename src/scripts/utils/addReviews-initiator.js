import RESTAURANTDB from '../data/restaurantdb-source';
import UrlParser from '../routes/url-parser';

const addReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputReviewName = document.getElementById('inputName');
  const inputReviewDesc = document.getElementById('inputReviewDesc');
  const reviewContainer = document.querySelector('.review-container');

  const dataInput = {
    id: url.id,
    name: inputReviewName.value,
    review: inputReviewDesc.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    // eslint-disable-next-line quotes
    year: "numeric",
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
      <div class="detail-review-item">
        <div class="header-review">
          <p class="name-review">${dataInput.name}</p>
  
          <p class="date-review">${date}</p>
        </div>
  
        <div class="body-review">
          ${dataInput.review}
        </div>
      </div>
    `;

  const reviewResponse = await RESTAURANTDB.addReview(dataInput);
  console.log(
    '🚤 ~ file: post-review.js ~ line 33 ~ PostReview ~ reviewResponse',
    reviewResponse,
  );

  // append newReview to the review container
  reviewContainer.innerHTML += newReview;
};

export default addReview;
