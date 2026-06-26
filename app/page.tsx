import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import WhyMorocco from '@/components/sections/WhyMorocco'
import WhyMarrakech from '@/components/sections/WhyMarrakech'
import AboutWinWin from '@/components/sections/AboutWinWin'
import FranchisePack from '@/components/sections/FranchisePack'
import Support from '@/components/sections/Support'
import Training from '@/components/sections/Training'
import NetworkAdvantages from '@/components/sections/NetworkAdvantages'
import Remuneration from '@/components/sections/Remuneration'
import Profile from '@/components/sections/Profile'
import RecruitmentProcess from '@/components/sections/RecruitmentProcess'
import Vision from '@/components/sections/Vision'
import FAQ from '@/components/sections/FAQ'
import ApplicationForm from '@/components/sections/ApplicationForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <WhyMorocco />
      <WhyMarrakech />
      <AboutWinWin />
      <FranchisePack />
      <Support />
      <Training />
      <NetworkAdvantages />
      <Remuneration />
      <Profile />
      <RecruitmentProcess />
      <Vision />
      <FAQ />
      <ApplicationForm />
      <Footer />
    </main>
  )
}
