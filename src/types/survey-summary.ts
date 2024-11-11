export interface ISurveySummary {
    summary: string;
    topics: ITopicSummary[];
    positiveTopicsCount: number;
    negativeTopicsCount: number;
}

export interface ITopicSummary {
    topicTitle: string;
    topicDescription: string;
    texts: string[];
}