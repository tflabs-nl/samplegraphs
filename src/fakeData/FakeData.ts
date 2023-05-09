import IGraphingTemplate from "../interfaces/IGraphingTemplate";

export interface IEndpointResponse {
    series: {
        data: { x: number; y: number }[]
    }[];
    type: string
}

export class FakeData {

    public static getGraphData(): IEndpointResponse[] {

        return [
            {
                type: 'digital_input_1',
                series: [{
                    data: [
                        {
                            x: Date.parse('2023-03-01 12:00'),
                            y: 1
                        },
                        {
                            x: Date.parse('2023-03-01 12:04'),
                            y: 1
                        },
                        {
                            x: Date.parse('2023-03-01 12:06'),
                            y: 0
                        },
                    ]
                }]
            }
        ];

    }

    public static getGraphTypes(): IGraphingTemplate[] {

        return [

            {
                key: 'digital_input_1',
                displayName: 'Digital Input 1',
                supportedGraphTypes: ["line", 'bar'],
                xAxis: {
                    type: "datetime"
                },
                yAxis: {
                    type: "numeric",
                    min: 0,
                    max: 1,
                    stepSize: 1
                }
            },

            {
                key: 'can_motor_rpm',
                displayName: 'CAN Motor RPM',
                supportedGraphTypes: ["line", 'bar'],
                xAxis: {
                    type: "datetime"
                },
                yAxis: {
                    type: "numeric",
                    min: 0,
                    max: 10000,
                    stepSize: 100
                }
            }

        ];

    }


}