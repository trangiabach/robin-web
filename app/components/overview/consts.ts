import { SectionTextProps } from "./SectionText";
import { WhyOption } from "./why/types";

export const LandingSectionText: SectionTextProps = {
    title: 'Hunt down healthcare fradulence with the power of AI',
    subtitle: 'ROBIN-HUNT',
    description: "Robin-HUNT is Robin’s flagship ML pipeline that can both train and deploy numerous models for different classification tasks. It provides real-time fraud detection with accurate and instantaneous flagging of potentially fraudulent providers along with detailed anomaly metrics all within a single dashboard."
}

export const LandingSectionTextRobinHolmes: SectionTextProps = {
    title: 'Analyze healthcare claims and providers with proprietary LLMs',
    subtitle: 'ROBIN-HOLMES',
    description: "Robin-HOLMES is Robin's LLM for claims and provider analysis. Fine-tuned on billions of healthcare records, Robin-HOLMES can give in-depth analysis of fraud indicators, provide comprehensive reasoning, all via a friendly chat interface."
}

export const WhyOptionsRobinHunt: WhyOption[] = [
    {
        title: 'Continously Improving',
        description: 'Robin-HUNT can be continuously fine-tuned on new data allowing it to easily adapt to data drift. It has access to our own real-time database of healthcare data and can learn from your in-house data. '
    },
    {
        title: 'Fast, accurate and scalable',
        description: 'We have created an AI infrastructure capable of running models with billions of data points within seconds to give you the most reliable fraud detection tool.',
    }, 
    {
        title: 'Manage your insights',
        description: 'Robin-HUNT goes further than just providing simple classification. It provides helpful analytics and extracts the most important features from the data it is trained and deployed on.'
    },
    {
        title: 'Integrated Analysis',
        description: 'Robin-HUNT integrates with our second flagship tool, Robin-HOLMES to allow for instantaneous information retrieval on flagged providers'
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
        title: 'Instantaneous claims sorting/classification',
        description: 'Given any set of claims files, Robin-HOLMES can instantaneously sort and classify them based on any criteria and automatically put them into a downloadable folder for you to access.'
    },
    {
        title: 'Customize your models',
        description: 'Robin-HOLMES can be fine-tuned as well as utilizes RAG to adapt its knowledge base and decision making capabilities to any category of fraud.'
    }
]
