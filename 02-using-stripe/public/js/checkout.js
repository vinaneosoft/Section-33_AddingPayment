   var stripe = Stripe('pk_test_51Ri7yeRh2ABojqq4FFKrEPKCxswsC1QAIngnplOdo9L89tKgbtzKfrtjHrxIzSP3eMla4n23kEBqWhIKfh52ShFT00o1wR5QZr');
                    var orderBtn = document.getElementById('order-btn');
                    const sessionId = orderBtn.dataset.sessionId;

                    orderBtn.addEventListener('click', async function() {
                    console.log("button clicked......");
                    
                    const res= await stripe.redirectToCheckout({
                            sessionId: sessionId
                        });
                    console.log(res);
                    });