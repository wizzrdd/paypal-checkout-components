<meta name="viewport" content="width=device-width, initial-scale=1">
<div id="paypal-button"></div>

<script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
<script>paypal.Buttons({
  createOrder: function(data, actions) {
   return actions.order.create({
     intent: 'CAPTURE',
     payer: {
       address: {
         address_line_1: '123 Fake Street',
         address_line_2: 'Apt 2',
         admin_area_2: 'San Jose',
         admin_area_1: 'CA',
         postal_code: '95121',
         country_code: 'US'
       }
     },
     pruchase_units: [
       {
         amount: {
           value: '15.00',
           currency_code: 'USD'
         },
         shipping: {
           address: {
             address_line_1: '2211 N First Street',
             address_line_2: 'Building 17',
             admin_area_2: 'San Jose',
             admin_area_1: 'CA',
             postal_code: '95131',
             country_code: 'US'
           }
         },
       }
     ]
   });
 }
}).render("paypal-button");</script>
</script>
