import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Saransh', lastName: 'Batwe', email: 'saranshbatwe518@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content home-content mx-auto max-w-4xl justify-start px-5 sm:px-8 py-7 lg:py-12'>
        <header className='home-header flex flex-col items-center gap-8 justify-start'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions"  
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000.50} 
          />
        </header>

        Recent Transactions
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 300.68}, {currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home