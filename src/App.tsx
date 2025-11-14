import React, { useEffect, useState } from 'react';
import { OnlinePay } from 'onlinepay-react';

function App() {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  useEffect(() => {
    async function fetchData() {
      const publicKey = await fetch('/key.txt').then((res) => res.text());
      setPublicKey(publicKey);
    }
    fetchData();
  }, []);

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

  if (!publicKey) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='flex min-h-screen items-center justify-center font-sans'>
        <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start'>
          <OnlinePay
            onSubmitPayment={handlePaymentSubmit}
            onError={handleError}
            publicKey={publicKey}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
