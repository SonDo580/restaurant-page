const reviewDiv = document.createElement('div');
reviewDiv.classList.add('review');

const heading = document.createElement('h1');
heading.textContent = 'What our customers say';
reviewDiv.appendChild(heading);

const cardReview = document.createElement('div');
cardReview.classList.add('card-review');

const cardText = document.createElement('p');
cardText.textContent = "Beary's has the best porridge! \
The atmosphere and customer service make you feel like \
you are sitting in the middle of the woods, eating like \
a bear! This is exactly the kind of place that I like \
to return to again and again.";
cardReview.appendChild(cardText);

const customer = document.createElement('h6');
customer.textContent = "Zero the Maverick Hunter";
cardReview.appendChild(customer);

reviewDiv.appendChild(cardReview);

export default reviewDiv;