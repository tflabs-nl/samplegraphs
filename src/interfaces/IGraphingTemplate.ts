//react-apexcharts does not export these as a usable string. Only as part of the Props interface.
export type graphType =
    "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar";

export default interface IGraphingTemplate {

    displayName: string;
    key: string;

    xAxis: {
        type?: 'category' | 'datetime' | 'numeric';
        min?: number;
        max?: number;
        unit?: string;
        stepSize?: string | number;
    }

    yAxis: {
        type?: 'category' | 'datetime' | 'numeric';
        min?: number;
        max?: number;
        unit?: string;
        stepSize?: string | number;
    }

    supportedGraphTypes: graphType[]

}