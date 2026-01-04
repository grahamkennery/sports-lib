export var TileTypes;
(function (TileTypes) {
    TileTypes["Chart"] = "Chart";
    TileTypes["Map"] = "Map";
})(TileTypes || (TileTypes = {}));
export var ChartTypes;
(function (ChartTypes) {
    ChartTypes["Pie"] = "Pie";
    ChartTypes["ColumnsHorizontal"] = "Columns Horizontal";
    ChartTypes["ColumnsVertical"] = "Columns Vertical";
    ChartTypes["PyramidsVertical"] = "Pyramids Vertical";
    ChartTypes["LinesHorizontal"] = "Lines Horizontal";
    ChartTypes["LinesVertical"] = "Lines Vertical";
    ChartTypes["Spiral"] = "Spiral";
    ChartTypes["BrianDevine"] = "Brian Devine";
    ChartTypes["IntensityZones"] = "Intensity Zones";
})(ChartTypes || (ChartTypes = {}));
export var ChartDataValueTypes;
(function (ChartDataValueTypes) {
    ChartDataValueTypes["Total"] = "Total";
    ChartDataValueTypes["Average"] = "Average";
    ChartDataValueTypes["Maximum"] = "Maximum";
    ChartDataValueTypes["Minimum"] = "Minimum";
})(ChartDataValueTypes || (ChartDataValueTypes = {}));
export var ChartDataCategoryTypes;
(function (ChartDataCategoryTypes) {
    ChartDataCategoryTypes["ActivityType"] = "Activity Type";
    ChartDataCategoryTypes["DateType"] = "Date Type";
})(ChartDataCategoryTypes || (ChartDataCategoryTypes = {}));
export var TimeIntervals;
(function (TimeIntervals) {
    TimeIntervals[TimeIntervals["Auto"] = 0] = "Auto";
    TimeIntervals[TimeIntervals["Hourly"] = 1] = "Hourly";
    TimeIntervals[TimeIntervals["Daily"] = 2] = "Daily";
    TimeIntervals[TimeIntervals["Weekly"] = 3] = "Weekly";
    TimeIntervals[TimeIntervals["BiWeekly"] = 4] = "BiWeekly";
    TimeIntervals[TimeIntervals["Monthly"] = 5] = "Monthly";
    TimeIntervals[TimeIntervals["Quarterly"] = 6] = "Quarterly";
    TimeIntervals[TimeIntervals["Semesterly"] = 7] = "Semesterly";
    TimeIntervals[TimeIntervals["Yearly"] = 8] = "Yearly";
})(TimeIntervals || (TimeIntervals = {}));
