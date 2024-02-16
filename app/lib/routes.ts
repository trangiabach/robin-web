export const clientRoutes = {
    dashboard: '/dashboard',
    models: (modelName?: string) => `/models/${modelName || ''}`,
    overviewModels: (modelName: string) => `/models/${modelName}/overview`,
    robinMetricPage: '/models/robin-hunt/metrics',
    robinAnalysisPage: '/models/robin-hunt/analysis',
    robinFinetuningPage: '/models/robin-hunt/finetuning'
}