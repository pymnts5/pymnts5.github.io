import React from 'react';
import { OnlinePay } from 'onlinepay-react';

function App() {
  const handlePaymentSubmit = (encryptedCard: string) => {
    console.log('Payment submitted with encrypted card:', encryptedCard);
    alert(encryptedCard);
  };

  interface PaymentError {
    field: string;
  }

  const handleError = ({ field }: PaymentError) => {
    if (field !== '') {
      console.log(`Error in field ${field}`);
    }
  };

  return (
    <div>
      <div className='flex min-h-screen items-center justify-center font-sans'>
        <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start'>
          <OnlinePay
            onSubmitPayment={handlePaymentSubmit}
            onError={handleError}
            publicKey={
              'LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tClZlcnNpb246IEJDUEcgdjEuNjIKCm1FOEVabzlWekJNRks0RUVBQW9DQXdUdTdjd0J2N3UyS2pOZURVVDFvRVpGbFhtMHQ5aDRJdG5ITkpjZUNjMXIKeTEraWdtaUppMThFVDJPcnVydDUvbkFJRVlRcVFzdGxuTG9ZQkU0RHRTS2Z0QUNJZEFRVEV3Z0FIQVVDWm85Vgp6QUliQXdZTENRZ0hBd0lHRlFnQ0NRb0xCQllDQXdFQUNna1FraVlJUDJaam1mWEhVZ0VBay9YUEk5d0lmQ3dZCnJaa0w2dkxzK21IVlBTQm5TcU80VGsxNVZzZnh3WEFCQU45dEhQWDM2bHk1aUEwYnpuekwvS3FFRXRpR29KaloKZiszOWdsKzNHbmt1dUZNRVpvOVZ6QklGSzRFRUFBb0NBd1R1N2N3QnY3dTJLak5lRFVUMW9FWkZsWG0wdDloNApJdG5ITkpjZUNjMXJ5MStpZ21pSmkxOEVUMk9ydXJ0NS9uQUlFWVFxUXN0bG5Mb1lCRTREdFNLZkF3RUlCNGhuCkJCZ1RDQUFQQWhzTUJRa0paZ0dBQlFKbWoxWE1BQW9KRUpJbUNEOW1ZNW4xQlRnQS8xTm9SWGx4YWFQVEsxUjcKQ2JZaW9pOVpZVlU2YVc0QTZkMDNxYkoyYk5YbkFQNDY3VjFqTHNMeGV5R1BzVUMrYldhSndIZU5KTHJQV05tOApQcVdST0MzTGFnPT0KPWZtalYKLS0tLS1FTkQgUEdQIFBVQkxJQyBLRVkgQkxPQ0stLS0tLQo='
            }
          />
        </main>
      </div>
    </div>
  );
}

export default App;
