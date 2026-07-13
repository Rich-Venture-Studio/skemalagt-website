import Hero from '@/components/Hero'
import IntegrationsStrip from '@/components/IntegrationsStrip'
import ValuePropCards from '@/components/ValuePropCards'
import FeatureCards from '@/components/FeatureCards'
import HowItWorksTeaser from '@/components/HowItWorksTeaser'
import IntegrationSetup from '@/components/IntegrationSetup'
import ResultsStats from '@/components/ResultsStats'
import IndustryCards from '@/components/IndustryCards'
import FinalCta from '@/components/FinalCta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntegrationsStrip />
      <IntegrationSetup />
      <ValuePropCards />
      <FeatureCards />
      <HowItWorksTeaser />
      <ResultsStats />
      <IndustryCards />
      <FinalCta />
    </>
  )
}
