import { SectionTextProps } from "./SectionText";
import { WhyOption } from "./why/types";

export const LandingSectionText: SectionTextProps = {
    title: 'Hunt down healthcare fradulence with the power of AI',
    subtitle: 'ROBIN-HUNT',
    description: "Robin-hunt is Robin's leading classification language model for identifying fraudlence in healthcare claims and providers. It can identify various cases of healthcare fraudulence, provide in-depth metrical analysis and connect to our best-in-class real-time databases of fraud cases."
}

export const LandingSectionTextRobinHolmes: SectionTextProps = {
    title: 'Analyze healthcare claims and providers with proprietary LLMs',
    subtitle: 'ROBIN-HOLMES',
    description: "Robin-holmes is Robin's LLM for claims and provider analysis. Fine-tuned on billions of healthcare records, Robin-holmes can give in-depth analysis of fraud indicators, provide comprehensive reasoning, all via a friendly chat interface."
}

export const WhyOptionsRobinHunt: WhyOption[] = [
    {
        title: 'Continously Improving',
        description: 'Robin-hunt is regularly updated and improves itself overtime with our own real-time database of healthcare fraud cases and your own data requests'
    },
    {
        title: 'Fast, accurate and scalable',
        description: 'We make sure to create AI infrastructure that can run on billions data points within seconds to give you the most reliable fraud detection',
    }, 
    {
        title: 'Manage your insights',
        description: 'Robin-hunt go further than just providing simple classification. It provides helpful analytics and extract important features from the data it is observing'
    },
    {
        title: 'Customize your models',
        description: 'We allow fine-tuning to create variations of Robin-hunt to fit your business needs'
    }
]

export const WhyOptionsRobinHolmes: WhyOption[] = [
    {
        title: 'Input any provider or claim data',
        description: 'Provide robin-holmes with any provider or claim data to get detailed analysis of fraud indicators, history, metrics, citations and more'
    },
    {
        title: 'Connected to real-time database',
        description: 'Robin-holmes are fined tuned on billions of data points related to healthcare frauds and also are connected to real-time data on fraud cases',
    }, 
    {
        title: 'Manage your insights',
        description: 'Holmes automatically sort its findings for you so you do not have to search through conversation history'
    },
    {
        title: 'Customize your models',
        description: 'We allow fine-tunin and data connections to create variations of Robin-holmes to fit your business needs'
    }
]
